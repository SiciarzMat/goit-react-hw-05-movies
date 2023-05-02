import { useParams, NavLink, Outlet, useLocation } from "react-router-dom"
import { fetchDetails } from "services/fetchDetails";
import { useEffect, useState } from "react";
import { Loader } from "../components/Loader";
import { Error } from "../components/Error";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";

const StyledBox = styled.div`
display: flex;
flex-direction: row;
gap: 15px;
padding-bottom: 5px;
border-bottom: 2px solid rgb(184, 183, 183);`

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
gap: 10px;
`
const StyledGenres = styled.div`
display: flex;
flex-direction: row;
gap: 5px;
`
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  &:hover{
    color: orange;
  }
`;
const StyledList = styled.ul`
margin-left: 45px;
line-height: 1.5;
`
const StyledParagraph = styled.p`
margin-top: 20px;`

const StyledButton = styled.button`
background-color:white;
padding: 10px;
outline:none;
text-decoration: none;
border: 1px solid rgb(184, 183, 183);
border-radius: 5px;
margin: 10px;
display: flex;
align-items: center;`

const MovieDetails = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [details, setDetails] = useState({});
    const { id } = useParams();
    const location = useLocation();
    const backlinkHref = location.state?.from ?? "/"

    useEffect(() => {
        const handleMoviesRequest = async () => {
            setIsLoading(true)
            try {
                const fetchedMovie = await fetchDetails(id);
                setDetails(fetchedMovie);
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        handleMoviesRequest()
    }, [id])

    const year = new Date(details.release_date).getFullYear();
    return (
        <>
            <StyledButton type="button">
                <StyledLink to={backlinkHref}>
                    <BsArrowLeft style={{ marginRight: 5 }} />
                    Go back
                </StyledLink>
            </StyledButton>

            <StyledBox>
                {details.poster_path === null
                    ?
                    (<img
                        src="https://img.freepik.com/free-vector/illustration-camera-icon_53876-5563.jpg?w=900&t=st=1678486874~exp=1678487474~hmac=a4f04450d41b0500a3b50c9217530014aca806126c8517f7433768454ed1572d"
                        alt="No found"
                        width="30%" height="30%"
                    />) :
                    (<img
                        src={`//image.tmdb.org/t/p/w500/${details.poster_path}`}
                        width="30%" height="30%"
                        alt={`Poster of ${details.title}`} />)}

                <StyledDiv>
                    <h2>{details.title} ({details.release_date ? year : null})</h2>
                    <p>User Score: {details.vote_average}</p>
                    <h3>Overview</h3>
                    <p>{details.overview}</p>
                    <h4>Genres</h4>
                    <StyledGenres>{details.genres ? details.genres.map(genre => (<span key={genre.id}>{genre.name}</span>)) : null}</StyledGenres>
                </StyledDiv>
                {isLoading && <Loader />}
                {error && <Error text="An error occurred. Please try again" />}
            </StyledBox>
            <StyledBox style={{ flexDirection: "column" }}>
                <StyledParagraph>Additional information</StyledParagraph>
                <StyledList>
                    <li><StyledLink to="cast">Cast</StyledLink></li>
                    <li><StyledLink to="reviews">Reviews</StyledLink></li>
                </StyledList>
            </StyledBox>
            <Outlet />

        </>
    )
}

export default MovieDetails;
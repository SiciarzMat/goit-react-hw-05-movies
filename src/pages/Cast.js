import { useEffect, useState } from "react";
import { fetchCast } from "services/fetchCast";
import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader";
import { Error } from "../components/Error";
import styled from "styled-components";

const StyledList = styled.ul`
list-style: none;
margin-top: 15px;
`

const StyledItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
`

const Cast = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cast, setCast] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const handleMoviesRequest = async () => {
            setIsLoading(true)
            try {
                const fetchedCast = await fetchCast(id);
                setCast(fetchedCast);
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        handleMoviesRequest()
    }, [id])

    return (
        <>

            <StyledList>
                {cast.length > 0
                    ?
                    cast.map(actor => (
                        <StyledItem key={actor.id}>
                            {actor.profile_path === null
                                ? (<img
                                    src="https://img.freepik.com/free-vector/illustration-camera-icon_53876-5563.jpg?w=900&t=st=1678486874~exp=1678487474~hmac=a4f04450d41b0500a3b50c9217530014aca806126c8517f7433768454ed1572d"
                                    alt="No found"
                                    width="25%" height="25%"
                                />)
                                :
                                (<img
                                    src={`//image.tmdb.org/t/p/w500/${actor.profile_path}`}
                                    alt={`${actor.name}`}
                                    width="25%" height="25%" />)}

                            <p>{actor.name}</p>
                            <p><b>Character:</b> {actor.character}</p>
                        </StyledItem>
                    ))
                    :
                    "We don't have any informations about the cast"}
            </StyledList>
            {isLoading && <Loader />}
            {error && <Error text="An error occurred. Please try again" />}
        </>
    )
}

export default Cast;
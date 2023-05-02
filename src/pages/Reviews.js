import { useEffect, useState } from "react";
import { fetchReviews } from "services/fetchReviews";
import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader";
import { Error } from "../components/Error";
import styled from "styled-components";

const StyledList = styled.ul`
list-style: none;
margin-top: 15px;
`

const StyledParagraph = styled.p`
margin-left: 15px;
margin-top: 10px;`

const StyledItem = styled.li`
margin-bottom: 20px;`

const Reviews = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [reviews, setReviews] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        const handleMoviesRequest = async () => {
            setIsLoading(true)
            try {
                const fetchedReviews = await fetchReviews(id);
                setReviews(fetchedReviews);
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        handleMoviesRequest()
    }, [id])

    return (<>
        <StyledList>
            {reviews.length > 0
                ?
                reviews.map(review => (
                    <StyledItem key={review.id}>
                        <b>Author: {review.author}</b>
                        <StyledParagraph>{review.content}</StyledParagraph>
                    </StyledItem>
                ))
                :
                "We don't have any reviews for this movie"}
        </StyledList>
        {isLoading && <Loader />}
        {error && <Error text="An error occurred. Please try again" />}
    </>
    )
};

export default Reviews;
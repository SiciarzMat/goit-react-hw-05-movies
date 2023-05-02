import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchTrending } from "services/fetchTrending";
import { Loader } from "../components/Loader";
import { Error } from "../components/Error";
import { MoviesList } from "./MoviesList";

const StyledHeading = styled.h2`
margin: 15px 0px 15px 10px;
`

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const handleMoviesRequest = async () => {
            setIsLoading(true)
            try {
                const fetchedMovies = await fetchTrending();
                setMovies(fetchedMovies);
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        handleMoviesRequest()
    }, [])

    return (
        <>
            <StyledHeading>Trending today</StyledHeading>
            <MoviesList movies={movies} />
            {isLoading && <Loader />}
            {error && <Error text="An error occurred. Please try again" />}
        </>
    )
}

export default Home;
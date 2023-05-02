import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const StyledLink = styled(NavLink)`
  color: blue;

  &.active {
    color: orange;
  }
`;

const StyledList = styled.ul`
margin-left: 45px;
line-height: 1.5;`


export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <StyledList>
      {movies.map(movie => (
        <li key={movie.id}>
          <StyledLink
            to={`/movies/${movie.id}`}
            state={{ from: location }}>
            {movie.title}
          </StyledLink>
        </li>
      ))}
    </StyledList>
  )
}

MoviesList.propTypes = {
  movies: PropTypes.array,
}
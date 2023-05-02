import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { Suspense } from "react";
import { Loader } from "../components/Loader";


const StyledHeader = styled.header`
width: 100vw;
box-shadow: 0 4px 2px -2px rgba(0,0,0,0.4);
`
const StyledNav = styled.nav`
padding-top: 15px;
padding-bottom: 15px;
`

const StyledLink = styled(NavLink)`
text-decoration: none;
color: black;
margin-left: 15px;
&.active {
    color: orange;
  }
`

const Container = styled.div`
margin: 0 auto;
padding: 0 16px;
`

export const Header = () => {
    return (
        <>
            <StyledHeader>
                <Container>
                    <StyledNav>
                        <StyledLink to="/" end>Home</StyledLink>
                        <StyledLink to="/movies">Movies</StyledLink>
                    </StyledNav>
                </Container>
            </StyledHeader>
            <Container>
                <Suspense fallback={
                    <>
                        <div>Loading page...</div>
                        <Loader />
                    </>
                }>
                    <Outlet />
                </Suspense>
            </Container>
        </>
    )
}
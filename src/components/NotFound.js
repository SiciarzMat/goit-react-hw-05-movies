import styled from "styled-components";

const StyledBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;`

const StyledHeading = styled.h3`
font-size: 64px;
font-style: bold;`

const StyledParagraph = styled.p`
font-size: 20px;`

export const NotFound = () => {
    return (
        <StyledBox>
            <StyledHeading>404</StyledHeading>
            <StyledParagraph>Sorry, we couldn't find that page </StyledParagraph>
        </StyledBox>
    )
}
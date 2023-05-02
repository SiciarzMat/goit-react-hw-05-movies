import { Triangle } from "react-loader-spinner";
import styled from "styled-components";

const StyledBox = styled.div`
display: flex;
justify-content: center;`


export const Loader = () => {
    return (
        <StyledBox>
            <Triangle
                height="80"
                width="80"
                color="orange"
                ariaLabel="triangle-loading"
                visible={true}
            />
        </StyledBox>
    )
};
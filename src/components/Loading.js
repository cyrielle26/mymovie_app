import { PropagateLoader } from "react-spinners";
import styled from "styled-components";

const Wrap = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;




export const Loading = () => {
    return (
    <Wrap>
        <PropagateLoader color="#f0f9f7" />
    </Wrap>)
}
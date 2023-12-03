import { PropagateLoader } from "react-spinners";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 300px;
`;

export const Loading = () => {
  return (
    <Wrap>
      <PropagateLoader color="#f9f9f9" />
    </Wrap>
  );
};

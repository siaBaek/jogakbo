import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 50px 0;
`;

const FlexBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  width: 100%;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  a {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const Box = styled.div`
  background-color: yellowgreen;
  height: 150px;
  background-size: cover;
  background-position: center center;
`;

function Present() {
  return (
    <Wrapper>
      <FlexBox>
        <BoxContainer>
          <Link to={`/campaign/1`}>
            <Box />
          </Link>
        </BoxContainer>
        <BoxContainer>
          <Link to={`/campaign/2`}>
            <Box />
          </Link>
        </BoxContainer>
      </FlexBox>
    </Wrapper>
  );
}

export default Present;

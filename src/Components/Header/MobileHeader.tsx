import styled from "styled-components";

const Head = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  z-index: 999;
`;

const Logo = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: white;
`;

function MobileHeader() {
  return (
    <Head>
      <Logo>JOGAKBO</Logo>
    </Head>
  );
}

export default MobileHeader;

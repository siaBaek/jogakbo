import { useEffect, useState } from "react";
import styled from "styled-components";
import banner from "../../assets/banner.jpg";
import MobileBanner from "./MobileBanner";

const Splash = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 32px;
  letter-spacing: 2px;
  background: linear-gradient(45deg, #feac5e 0%, #c779d0 50%, #4bc0c8 100%);
  z-index: 99999;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 30px;
  width: 100%;
  height: 100vh;
  background: url(${banner}) center center;
  opacity: 0.85;
  /* background: linear-gradient(45deg, #feac5e 0%, #c779d0 50%, #4bc0c8 100%); */
`;

const Welcome = styled.div`
  padding: 100px 0 40px;
  h2 {
    text-align: center;
    font-size: 26px;
    font-weight: bold;
    color: white;
  }
  h1 {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    color: white;
  }
`;

const BannerContainer = styled.div`
  height: 300px;
  width: 375px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  width: 100%;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(7.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  color: rgba(255, 255, 255, 0.75);
  border-radius: 20px;
`;

const Images = styled.div`
  position: relative;
  display: flex;
  height: 300px;
  transition: transfrom 0.5s;
`;

const BannerImage = styled.img`
  width: 375px;
`;

const BtnContainer = styled.div`
  position: absolute;
  bottom: 30px;
  left: 30px;
  right: 30px;
  p {
    text-align: center;
    padding: 2px;
  }
`;

const LogInBtn = styled.button`
  width: 100%;
  margin: 5px auto;
  padding: 15px 30px;
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(7.5px);
  border: 0.996094px solid rgba(255, 255, 255, 0.18);
  box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  color: rgba(255, 255, 255, 0.75);
  border-radius: 15px;
  font-size: 22px;
  text-align: center;
`;

function MobileHome() {
  const [splash, setSplash] = useState(true);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setSplash(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  });

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {splash ? (
        <Splash>
          <h2>JOGAKBO</h2>
        </Splash>
      ) : null}
      <Container>
        <Welcome>
          <h2>Welcom to</h2>
          <h1> Jogakbo</h1>
        </Welcome>
        <MobileBanner />
        <BtnContainer>
          <LogInBtn>Log in</LogInBtn>
          <p>회원가입</p>
          <p>로그인하지 않고 둘러보기</p>
        </BtnContainer>
      </Container>
    </>
  );
}

export default MobileHome;
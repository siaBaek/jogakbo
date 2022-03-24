import styled, { useTheme } from "styled-components";
import banner from "../../assets/banner.jpg";
import logo from "../../assets/logo.png";
import blockchain from "../../assets/blockchain.png";
import nft from "../../assets/nft.png";
import wallet from "../../assets/wallet.png";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { showSignUpState } from "../../atom";
import Signup from "../../Components/Modal/SignUpModal";
import { media } from "../../theme";

// 소개 배너 컴포넌트 Intro

const Banner = styled.div`
  width: 100%;
  height: 500px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),
    url(${banner});
  background-position: center center;
  background-size: cover;
`;
const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: 200px 0 50px;
  width: 1100px;
  height: 100%;
  img {
    width: 50px;
  }
  h2,
  p {
    color: ${(props) => props.theme.bgColor};
  }
  h2 {
    font-size: 42px;
    text-shadow: ${(props) => props.theme.textColor} 3px 3px;
  }
  a {
    /* display: block; */
    width: 150px;
  }
  button {
    width: 150px;
    padding: 8px 10px;
    background: ${(props) => props.theme.bgColor};
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
  }
  ${media.tablet} {
    width: auto;
    padding: 200px 30px 50px;
  }
`;

function Intro() {
  const [showSignUp, setShowSignUp] = useRecoilState(showSignUpState);

  return (
    <>
      <Banner>
        <BannerContainer>
          <img src={logo} />
          <h2>Welcome to Jogakbo</h2>
          <div>
            <p>조각보는 블록체인 기반 기부 플랫폼입니다.</p>
            <p>
              캠페인에 기부하여 NFT를 수집할 수 있고, 직접 캠페인을 만들 수도
              있습니다.
            </p>
          </div>
          <button onClick={() => setShowSignUp(true)}>회원가입하기</button>
        </BannerContainer>
      </Banner>
      {showSignUp && <Signup />}
    </>
  );
}

// Home

const BrowserContainer = styled.div`
  width: 1100px;
  margin: 80px auto 300px;
  padding: 30px 0;
  ${media.tablet} {
    width: 100%;
    padding: 0 30px;
  }
`;

const GradientBorder = styled.div`
  width: 100%;
  padding: 5px;
  border: 1px solid transparent;
  background-image: linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)),
    ${(props) => props.theme.gradient};

  background-origin: border-box;
  background-clip: content-box, border-box;
  border-radius: 15px;
  margin-bottom: 100px;
`;

const Section = styled.section`
  width: 100%;
  margin-bottom: 100px;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 70px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 250px;
  height: 250px;
  padding: 10px;
  background: ${(props) => props.theme.contentBgColor};
  border-radius: 15px;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 18%);
  img {
    width: 130px;
  }
  p {
    text-align: center;
    padding: 20px 0;
    color: ${(props) => props.theme.textColor};
  }
`;

const TabContainer = styled.div`
  display: flex;
  padding: 0 30px;
`;

const Tab = styled.div<{ tab: boolean }>`
  width: 150px;
  padding: 15px 20px;
  background: ${(props) => (props.tab ? useTheme().bgColor : useTheme().gray)};
  text-align: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  &:last-child {
    margin-left: 3px;
  }
`;

const Dev = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DevProfile = styled.div`
  margin-bottom: 10px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: lightgray;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
`;

const Question = styled(motion.li)`
  margin-bottom: 10px;
  padding: 20px 30px;
  background: ${(props) => props.theme.gray};
  border-radius: 10px;
  color: white;
  font-size: 18px;
  cursor: pointer;
`;

const Answer = styled(motion.div)`
  margin-bottom: 10px;
  display: none;
  padding: 20px 30px;
  font-size: 18px;
`;

function BrowserHome() {
  const [tab, setTab] = useState(true);
  const [question, setQuestion] = useState(true);

  const onClickQuestion = (a: number) => {
    const answer = document.getElementById(`${a}`);
    setQuestion((prev) => !prev);
    question
      ? (answer!.style.display = "block")
      : (answer!.style.display = "none");
  };

  const QuestionData = [
    {
      question: "캠페인 기부 조건을 달성하지 못할 시 환불절차는 어떻게 되나요?",
      answer:
        "조건 금액을 달성하지 못한 캠페인은 환불 상태로 변경되며 기간 내 환불 요청이 가능해지게 됩니다",
    },
    {
      question: "캠페인은 아무나 생성할 수 있나요?",
      answer:
        "create campaign을 통해 양식을 제출하게 되면 심사 후 캠페인으로 등록됩니다.",
    },
    { question: "질문3", answer: "답변3" },
    { question: "질문4", answer: "답변4" },
    { question: "질문5", answer: "답변5" },
    { question: "질문6", answer: "답변6" },
  ];

  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Intro />
      <BrowserContainer>
        <Section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <Title>✔️ 서비스 특징</Title>
          <Content>
            <Item>
              <img src={blockchain} />
              <p>
                블록체인을 이용한 <br />
                투명한 기부가 가능합니다
              </p>
            </Item>
            <Item>
              <img src={nft} />
              <p>기부증서로 NFT를 발행합니다</p>
            </Item>
            <Item>
              <img src={wallet} />
              <p>다양한 지갑 서비스를 제공합니다</p>
            </Item>
          </Content>
        </Section>
        <Section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <Title>✔️ 서비스 이용방법</Title>
          <TabContainer>
            <Tab tab={tab} onClick={() => setTab(true)}>
              기부 참여
            </Tab>
            <Tab tab={!tab} onClick={() => setTab(false)}>
              캠페인 생성
            </Tab>
          </TabContainer>
          {tab ? <Tab1 /> : <Tab2 />}
        </Section>
        <Section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <Title>✔️ 개발자 소개</Title>
          <Content>
            <Dev>
              <DevProfile data-aos="flip-left"></DevProfile>
              <p>개발자1</p>
            </Dev>
            <Dev>
              <DevProfile data-aos="flip-left"></DevProfile>
              <p>개발자2</p>
            </Dev>
            <Dev>
              <DevProfile data-aos="flip-left"></DevProfile>
              <p>개발자3</p>
            </Dev>
          </Content>
        </Section>
        <Section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <Title>✔️ 로드맵</Title>
          <p
            style={{
              display: "block",
              padding: "30px",
              backgroundColor: useTheme().gray,
              height: "300px",
              borderRadius: 15,
            }}
          >
            {" "}
            준비중입니다{" "}
          </p>
        </Section>
        <Section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <Title>✔️ Q&A</Title>
          <ul>
            {QuestionData.map((a, i) => (
              <>
                <Question onClick={() => onClickQuestion(i)}>
                  ❔ {a.question}
                </Question>
                <Answer id={`${i}`}>❗️ {a.answer}</Answer>
              </>
            ))}
          </ul>
        </Section>
      </BrowserContainer>
    </>
  );
}

export default BrowserHome;

const TabBackground1 = styled.div`
  margin: 0 30px;
  padding: 60px 30px;
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: ${(props) => props.theme.boxShadow1};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const StepContainer = styled.div`
  margin-bottom: 60px;
  p {
    padding: 0 20px;
  }
  &:last-child {
    margin: 0;
  }
`;

const Step = styled.div`
  margin-bottom: 40px;
  padding: 10px 15px;
  width: 100px;
  background: ${(props) => props.theme.contentBgColor};
  border-radius: 20px;
  box-shadow: ${(props) => props.theme.boxShadow1};
  text-align: center;
`;

function Tab1() {
  return (
    <TabBackground1>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <StepContainer>
          <Step>Step1</Step>
          <p>Campaign 메뉴를 통해 둘러보세요</p>
        </StepContainer>
        <StepContainer>
          <Step>Step2</Step>
          <p>
            기부하고 싶은 캠페인을 발견했다면 donate 버튼으로 기부할 수 있습니다
          </p>
        </StepContainer>
        <StepContainer>
          <Step>Step3</Step>
          <p>my page에서 발급된 NFT를 확인해보세요</p>
        </StepContainer>
      </div>
    </TabBackground1>
  );
}

const TabBackground2 = styled.div`
  margin: 0 30px;
  padding: 60px 30px;
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: ${(props) => props.theme.boxShadow1};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

function Tab2() {
  return (
    <TabBackground2>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <StepContainer>
          <Step>Step1</Step>
          <p>Campaign 페이지의 create campaign 버튼을 클릭하세요</p>
        </StepContainer>
        <StepContainer>
          <Step>Step2</Step>
          <p>유의사항을 읽어보시고 양식에 맞게 작성하여 제출해주세요</p>
        </StepContainer>
        <StepContainer>
          <Step>Step3</Step>
          <p>심사결과는 평균 5일 이후 제출한 이메일로 보내드립니다</p>
        </StepContainer>
      </div>
    </TabBackground2>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { showSignUpState } from "../../atom";
import { media } from "../../theme";
import apple from "../../assets/svg/apple.svg";
import google from "../../assets/svg/google.svg";
import naver from "../../assets/svg/naver.svg";
import kakao from "../../assets/svg/kakao.svg";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const SignUp = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 360px;
  height: 432px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.bgColor};
  backdrop-filter: blur(7.5px);
  border: ${(props) => props.theme.glass.border};
  color: ${(props) => props.theme.glass.color};
  box-shadow: ${(props) => props.theme.glass.boxShadow};
  ${media.tablet} {
    width: 50%;
  }
`;

const SignUpHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  height: 5%;
  div {
    cursor: pointer;
  }
`;
const SignUpLogo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 0 24px;
  font-size: 24px;
`;

const LoginForm = styled.form`
  width: 100%;
  margin-bottom: 12px;
`;

const LoginInput = styled.input`
  all: unset;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: ${(props) => props.theme.gray};
  padding: 13px 12px;
  margin-bottom: 12px;
`;

const LoginButton = styled.button`
  margin: 12px 0;
  border-radius: 5px;
  padding: 13px 0;
  text-align: center;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.gradient};
  }
`;

const MoreAction = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  font-size: 13px;
  div {
    padding: 0 5px;
  }
`;

const SocialSignUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  hr {
    position: relative;
    bottom: -8px;
    display: block;
    margin: 0;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.gray};
    border: none;
  }
  span {
    padding: 0 8px;
    margin-bottom: 16px;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: -0.3px;
    z-index: 9;
    background: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.gray};
  }
`;

const SocialSignUpButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

interface ISocial {
  bgColor: string;
}

const SocialSignUpButton = styled.img<ISocial>`
  width: 44px;
  height: 44px;
  background: ${(props) => props.bgColor};
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
  &:last-child {
    padding: 12px;
  }
`;

const SignUpText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 10%;
`;

interface ILoginButton {
  bgColor: string;
}

const SignUpButton = styled.div<ILoginButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
  height: 13%;
  border-radius: 5px;
  background: ${(props) => props.bgColor};
  cursor: pointer;
  box-shadow: ${(props) => props.theme.boxShadow1};
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${(props) => props.theme.boxShadow2};
  }
  &:last-child {
    margin: 0;
  }
`;

function SignUpModal() {
  const [showSignUp, setShowSignUp] = useRecoilState(showSignUpState);
  // const google = faGoogle as IconProp;
  // const apple = faApple as IconProp;
  const times = faTimes as IconProp;

  return (
    <Container onClick={() => setShowSignUp(false)}>
      <SignUp
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <SignUpHeader>
          <div
            onClick={() => {
              setShowSignUp(false);
            }}
          >
            <FontAwesomeIcon icon={times} />
          </div>
        </SignUpHeader>
        <SignUpLogo>JOGAKBO</SignUpLogo>
        <LoginForm>
          <LoginInput type="email" required placeholder="이메일" />
          <LoginInput type="password" required placeholder="비밀번호" />
        </LoginForm>
        <LoginButton>로그인</LoginButton>
        <MoreAction>
          <div>비밀번호 찾기</div>
          <div> | </div>
          <div>회원가입</div>
        </MoreAction>
        <SocialSignUp>
          <hr />
          <span>간편 로그인</span>
        </SocialSignUp>
        <SocialSignUpButtons>
          <SocialSignUpButton bgColor="#f8f8f8" src={google} />
          <SocialSignUpButton bgColor="#fee500" src={kakao} />
          <SocialSignUpButton bgColor="#1ec800" src={naver} />
          <SocialSignUpButton bgColor="#ffffff" src={apple} />
        </SocialSignUpButtons>
        {/* <SignUpText>간편로그인</SignUpText>
        <LoginButton bgColor="#ea4335">
          <img src={google} />
        </LoginButton>
        <LoginButton bgColor="#fee500">
          <img src={kakao} />
        </LoginButton>
        <LoginButton bgColor="#1ec800">
          <img src={naver} />
        </LoginButton>
        <LoginButton bgColor="lightgray">
          <img src={apple} />
        </LoginButton> */}
      </SignUp>
    </Container>
  );
}

export default SignUpModal;

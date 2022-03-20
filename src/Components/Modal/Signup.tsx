import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { showSignUpState } from "../../atom";

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

const SignUpModal = styled.div`
  padding: 24px;
  width: 25%;
  height: 60vh;
  border-radius: 10px;
  background-color: ${(props) => props.theme.glass.bgColor};
  backdrop-filter: blur(7.5px);
  border: ${(props) => props.theme.glass.border};
  color: ${(props) => props.theme.glass.color};
  box-shadow: ${(props) => props.theme.glass.boxShadow};

  /* background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  box-shadow: ${(props) => props.theme.boxShadow1}; */
`;

const SignUpHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  div {
    cursor: pointer;
  }
`;
const SignUpLogo = styled.h1`
  margin: 10px 0;
  text-align: center;
  font-size: 24px;
`;

const SignUpText = styled.div`
  text-align: center;
  margin: 30px 0;
`;

interface ILoginButton {
  bgColor: string;
}

const LoginButton = styled.div<ILoginButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  background: ${(props) => props.bgColor};
  cursor: pointer;
  box-shadow: ${(props) => props.theme.boxShadow1};
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${(props) => props.theme.boxShadow2};
  }
`;

function Signup() {
  const [showSignUp, setShowSignUp] = useRecoilState(showSignUpState);
  const google = faGoogle as IconProp;
  const apple = faApple as IconProp;
  const times = faTimes as IconProp;

  return (
    <Container onClick={() => setShowSignUp(false)}>
      <SignUpModal
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
        <SignUpText>간편로그인</SignUpText>
        <LoginButton bgColor="#E94234">
          <FontAwesomeIcon icon={google} />
        </LoginButton>
        <LoginButton bgColor="#fae100">카카오 로그인</LoginButton>
        <LoginButton bgColor="#19ce60">네이버 로그인</LoginButton>
        <LoginButton bgColor="lightgray">
          <FontAwesomeIcon icon={apple} />
        </LoginButton>
      </SignUpModal>
    </Container>
  );
}

export default Signup;

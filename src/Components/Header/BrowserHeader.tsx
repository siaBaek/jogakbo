import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled, { ThemeProvider } from "styled-components";
import { isLightModeState, showModalState, showSignUpState } from "../../atom";
import ConnectWalletModal from "../Modal/ConnectWalletModal";
import Signup from "../Modal/Signup";

const Head = styled(motion.header)`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  z-index: 999;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 30px;
  width: 935px;
  height: 100%;
  z-index: 9;
`;
const Col = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled(motion.h1)`
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => props.theme.bgColor};
`;

const MenuUl = styled.ul`
  display: flex;
`;

const MenuLi = styled(motion.li)`
  padding: 5px 10px;
  margin: 0 5px;
  color: ${(props) => props.theme.bgColor};
  font-size: 20px;
  font-weight: bold;
`;

const ConnectWallet = styled.div`
  background: ${(props) => props.theme.bgColor};
  margin-left: 15px;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  /* color: ${(props) => props.theme.textColor}; */
  &:hover {
    background: ${(props) => props.theme.gradient};
    color: white;
  }
`;

const headVariants = {
  top: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    backdropFilter: "none",
    border: "none",
  },
  scroll: {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    backdropFilter: "blur(7.5px)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
  },
};

const logoVariants = {
  top: {
    color: "white",
  },
  scroll: {
    color: "black",
  },
};

const ModeButton = styled.button``;

const SignUp = styled.div`
  background: ${(props) => props.theme.bgColor};
  margin-left: 15px;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  /* color: ${(props) => props.theme.textColor}; */
  &:hover {
    background: ${(props) => props.theme.gradient};
    color: white;
  }
`;

function BrowserHeader() {
  const [showModal, setShowModal] = useRecoilState(showModalState);
  const [showSignUp, setShowSignUp] = useRecoilState(showSignUpState);

  const headAnimation = useAnimation();
  const logoAnimation = useAnimation();
  const { scrollY } = useViewportScroll();
  const [mode, setMode] = useRecoilState(isLightModeState);
  const toggleMode = () => {
    setMode((prev) => !prev);
  };

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 20) {
        headAnimation.start("scroll");
        logoAnimation.start("scroll");
      } else {
        headAnimation.start("top");
        logoAnimation.start("top");
      }
    });
  }, [scrollY, headAnimation, logoAnimation]);

  return (
    <>
      <Head variants={headVariants} animate={headAnimation} initial={"top"}>
        <Container>
          <Col>
            <Link to="/">
              <Logo variants={logoVariants}>JOGAKBO</Logo>
            </Link>
          </Col>
          <Col>
            <MenuUl>
              <Link to="/">
                <MenuLi variants={logoVariants}>Campaigns</MenuLi>
              </Link>
              <Link to="/">
                <MenuLi variants={logoVariants}>Create Campaign</MenuLi>
              </Link>
            </MenuUl>
          </Col>
          <Col>
            <ModeButton onClick={() => toggleMode()} className="mr-3">
              {mode ? "dark mode" : "light mode"}
            </ModeButton>
            <ConnectWallet onClick={() => setShowModal(true)}>
              Connect Wallet
            </ConnectWallet>
            <SignUp onClick={() => setShowSignUp(true)}>Sign Up</SignUp>
          </Col>
        </Container>
      </Head>
      {showModal && <ConnectWalletModal />}
      {showSignUp && <Signup />}
    </>
  );
}

export default BrowserHeader;

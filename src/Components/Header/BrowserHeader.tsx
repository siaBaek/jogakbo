import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  color: white;
`;

const MenuUl = styled.ul`
  display: flex;
`;

const MenuLi = styled(motion.li)`
  padding: 5px 10px;
  margin: 0 5px;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const ConnectWallet = styled.div`
  background: white;
  margin-left: 15px;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: linear-gradient(45deg, #feac5e 0%, #c779d0 50%, #4bc0c8 100%);
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

function BrowserHeader() {
  const headAnimation = useAnimation();
  const logoAnimation = useAnimation();
  const { scrollY } = useViewportScroll();

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
          <ConnectWallet>Connect Wallet</ConnectWallet>
        </Col>
      </Container>
    </Head>
  );
}

export default BrowserHeader;

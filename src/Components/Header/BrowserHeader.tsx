import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faToggleOn,
  faToggleOff,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import {
  isLightModeState,
  showSignUpState,
  showSubMenuState,
} from "../../atom";
import Signup from "../Modal/SignUpModal";
import { media } from "../../theme";
import SubMenu from "../Modal/SubMenuModal";

// 위치 고정 + 스크롤 이벤트
const HeaderWrapper = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;

// 크기 고정, flex container, 수평정렬
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 30px;
  width: 1100px;
  height: 80px;
  ${media.tablet} {
    width: auto;
  }
`;

// flex items, 수직정렬
const Col = styled.div`
  display: flex;
  align-items: center;
`;

// Col1
const Logo = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;

// Col2
const MenuUl = styled.ul`
  display: flex;
  ${media[768]} {
    display: none;
  }
`;

const MenuLi = styled.li`
  padding: 5px 10px;
  margin: 0 5px;
  font-size: 20px;
  font-weight: bold;
`;

// Col3
const SignUp = styled.div`
  background: ${(props) => props.theme.bgColor};
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${(props) => props.theme.gradient};
    color: white;
  }
  ${media[768]} {
    display: none;
  }
`;
const ModeButton = styled.button`
  margin-left: 15px;
  font-size: 20px;
`;

const Hamburger = styled.div`
  display: none;
  ${media[768]} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    margin-left: 15px;
    cursor: pointer;
    z-index: 9999;
    font-size: 26px;
  }
`;

// 전체 헤더 스크롤 애니메이션
const headVariants = {
  // 스크롤 맨 위에 있을 경우
  top: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    backdropFilter: "none",
    border: "none",
  },
  // 스크롤 맨 위가 아닌 경우
  scroll: {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    backdropFilter: "blur(7.5px)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
  },
};

function BrowserHeader() {
  // 추가: 현재 파라미터를 이용한 현재 위치 서브메뉴 색상 변경

  // 헤더 애니메이션 관련
  const headAnimation = useAnimation();
  const { scrollY } = useViewportScroll();

  // 회원가입 모달 state
  const [showSignUp, setShowSignUp] = useRecoilState(showSignUpState);

  // 서브메뉴 state
  const [showSubMenu, setShowSubMenu] = useRecoilState(showSubMenuState);

  // 다크모드 state
  const [mode, setMode] = useRecoilState(isLightModeState);
  const on = faToggleOn as IconProp;
  const off = faToggleOff as IconProp;
  const hamburger = faHamburger as IconProp;

  const toggleMode = () => {
    setMode((prev) => !prev);
  };

  const toggleSubMenu = () => {
    setShowSubMenu((prev) => !prev);
  };

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 20) {
        headAnimation.start("scroll");
      } else {
        headAnimation.start("top");
      }
    });
  }, [scrollY, headAnimation]);

  return (
    <>
      <HeaderWrapper
        variants={headVariants}
        animate={headAnimation}
        initial={"top"}
      >
        <HeaderContainer>
          <Col>
            <Link to="/">
              <Logo>JOGAKBO</Logo>
            </Link>
          </Col>
          <Col>
            <MenuUl>
              <Link to="/campaigns">
                <MenuLi>Campaigns</MenuLi>
              </Link>
              <Link to="/">
                <MenuLi>Create Campaign</MenuLi>
              </Link>
            </MenuUl>
          </Col>
          <Col>
            <SignUp onClick={() => setShowSignUp(true)}>Sign Up</SignUp>
            <ModeButton onClick={() => toggleMode()} className="mr-3">
              {mode ? (
                <FontAwesomeIcon icon={off} />
              ) : (
                <FontAwesomeIcon icon={on} />
              )}
            </ModeButton>
            <Hamburger onClick={toggleSubMenu}>
              <FontAwesomeIcon icon={hamburger} />
            </Hamburger>
          </Col>
        </HeaderContainer>
      </HeaderWrapper>
      {/* 회원가입 모달 */}
      {showSignUp && <Signup />}
      {showSubMenu && <SubMenu />}
    </>
  );
}

export default BrowserHeader;

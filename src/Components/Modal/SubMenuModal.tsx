import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faTimes,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import {
  isLightModeState,
  showSignUpState,
  showSubMenuState,
} from "../../atom";
import SignUpModal from "./SignUpModal";
import Signup from "./SignUpModal";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const SubMenuModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  width: 50%;
  height: 100%;
  background: ${(props) => props.theme.bgColor};
`;

const SubMenuHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  font-size: 32px;
  div {
    cursor: pointer;
  }
`;

const SubMenuContents = styled.ul``;
const SubMenuContent = styled.li`
  padding: 20px 0;
  font-size: 28px;
`;

const SignUp = styled.div`
  background: ${(props) => props.theme.bgColor};
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 10px;
  text-transform: uppercase;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  border: 1px solid gray;

  &:hover {
    background: ${(props) => props.theme.gradient};
    color: white;
    border: none;
  }
`;

function SubMenu() {
  const [showSubMenu, setShowSubMenu] = useRecoilState(showSubMenuState);
  const [showSignUp, setShowSignUp] = useRecoilState(showSignUpState);

  const times = faTimes as IconProp;

  return (
    <Container onClick={() => setShowSubMenu(false)}>
      <SubMenuModal>
        <SubMenuContents>
          <SubMenuHeader>
            <div
              onClick={() => {
                setShowSubMenu(false);
              }}
            >
              <FontAwesomeIcon icon={times} />
            </div>
          </SubMenuHeader>
          <Link to="/campaigns">
            <SubMenuContent>Campaigns</SubMenuContent>
          </Link>
          <Link to="/createcampaign">
            <SubMenuContent>Create Campaign</SubMenuContent>
          </Link>
        </SubMenuContents>
        <SubMenuContents>
          <SubMenuContent
            onClick={() => {
              setShowSignUp(true);
            }}
          >
            <SignUp>Sign Up</SignUp>
          </SubMenuContent>
        </SubMenuContents>
      </SubMenuModal>
      {showSignUp && <SignUpModal />}
    </Container>
  );
}

export default SubMenu;

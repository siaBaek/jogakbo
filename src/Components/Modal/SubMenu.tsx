import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faTimes,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isLightModeState, showSubMenuState } from "../../atom";

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
  height: 50px;
  background: pink;
  font-size: 28px;
`;

const SubMenuFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
`;

const ModeButton = styled.button`
  margin-left: 15px;
  font-size: 20px;
`;

function SubMenu() {
  const [showSubMenu, setShowSubMenu] = useRecoilState(showSubMenuState);
  const [mode, setMode] = useRecoilState(isLightModeState);

  const times = faTimes as IconProp;
  const on = faToggleOn as IconProp;
  const off = faToggleOff as IconProp;

  const toggleMode = () => {
    setMode((prev) => !prev);
  };

  return (
    <Container onClick={() => setShowSubMenu(false)}>
      <SubMenuModal>
        <SubMenuHeader>
          <div
            onClick={() => {
              setShowSubMenu(false);
            }}
          >
            <FontAwesomeIcon icon={times} />
          </div>
        </SubMenuHeader>
        <SubMenuContents>
          <SubMenuContent>Campaigns</SubMenuContent>
          <SubMenuContent>Create Campaign</SubMenuContent>
          <SubMenuContent>Sign Up</SubMenuContent>
        </SubMenuContents>
        <SubMenuFooter>
          <ModeButton onClick={() => toggleMode()} className="mr-3">
            {mode ? (
              <FontAwesomeIcon icon={off} />
            ) : (
              <FontAwesomeIcon icon={on} />
            )}
          </ModeButton>
        </SubMenuFooter>
      </SubMenuModal>
    </Container>
  );
}

export default SubMenu;

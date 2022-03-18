import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  RecoilState,
  RecoilValue,
  SetRecoilState,
  SetterOrUpdater,
  useRecoilState,
} from "recoil";
import styled from "styled-components";
import {
  modalPropsState,
  myAddressState,
  qrValueState,
  showModalState,
} from "../../atom";
import klip from "../../assets/png/klip-logo.svg";
import kaikas from "../../assets/png/kaikas-logo.svg";
import metamask from "../../assets/png/metamask-logo.svg";
import QRCode from "qrcode.react";
import { isMobile } from "react-device-detect";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  transition: all 0.2s ease-in-out;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: gray;
  border-radius: 10px;
  transition: all 0.2 ease-in-out;
  width: 600px;
  padding: 44px 51px;
`;

const ConnectWalletModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: all 0.2s ease-in-out;
  color: white;
  button {
    all: unset;
    cursor: pointer;
  }
  margin-bottom: 28px;

  h5 {
    font-size: 20px;
  }
`;

const ConnectWalletModalContent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const ConnectWalletCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 140px;
  height: 160px;
  padding: 0 20px;
  box-sizing: border-box;
  background: ${(props) => props.theme.gradient};
  border-radius: 10px;
  h5 {
    margin-top: 15px;
    color: white;
  }
  ${(props) => props.theme.boxShadow1};
  transition: all 0.2s ease-in-out;
  &:hover {
    ${(props) => props.theme.boxShadow2};
    transform: translateY(-5px);
  }
`;

const QRContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

function ConnectWalletModal() {
  const [showModal, setShowModal] = useRecoilState(showModalState);
  const [modalProps, setModalProps] = useRecoilState(modalPropsState);
  const [qrvalue, setQrvalue] = useRecoilState(qrValueState);
  const times = faTimes as IconProp;

  return (
    <ModalWrapper onClick={() => setShowModal(false)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ConnectWalletModalHeader>
          <h5>{modalProps.title}</h5>
          <button
            onClick={() => {
              setShowModal(false);
              setQrvalue("DEFAULT");
            }}
          >
            <FontAwesomeIcon icon={times} />
          </button>
        </ConnectWalletModalHeader>
        <ConnectWalletModalContent>
          {qrvalue == "DEFAULT" ? (
            <>
              <ConnectWalletCard>
                <img src={metamask} />
                <h5>Metamask </h5>
              </ConnectWalletCard>
              <ConnectWalletCard>
                <img src={kaikas} />
                <h5>Kaikas </h5>
              </ConnectWalletCard>
              <ConnectWalletCard
                onClick={() => {
                  modalProps.onConfirm();
                }}
              >
                <img src={klip} />
                <h5>Klip </h5>
              </ConnectWalletCard>
            </>
          ) : (
            <>
              <QRContainer>
                <QRCode
                  value={qrvalue}
                  // bgColor fgColor
                  size={256}
                  includeMargin
                />
              </QRContainer>
            </>
          )}
        </ConnectWalletModalContent>
      </ModalContent>
    </ModalWrapper>
  );
}

export default ConnectWalletModal;

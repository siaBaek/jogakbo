import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { myAddressState, myBalanceState } from "../../atom";
import { useRecoilState } from "recoil";
import { media } from "../../theme";
import { getBalance } from "../../api/UseCaver";
import * as KlipAPI from "../../api/UseKlip";

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 200px 0 100px 0;
  width: 935px;
  margin: 0 auto;
  ${media.tablet} {
    width: auto;
    padding: 170px 0 130px 0;
  }
  ${media.mobile} {
    flex-direction: column;
    align-items: center;
    padding: 100px 0 50px 0;
  }
`;

interface IProfile {
  bgphoto: string;
}

const ProfileImage = styled.div<IProfile>`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
  margin: 10px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  ${media.tablet} {
    width: 220px;
    height: 220px;
  }
  ${media.mobile} {
    width: 220px;
    height: 220px;
  }
`;

const ProfileInfoBox = styled.div`
  width: 50%;
  margin: 10px;
  margin-bottom: 20px;
  ${media.mobile} {
    width: 100%;
    padding: 0 10px;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  position: relative;
  margin-top: 20px;
  height: 50px;
  label {
    position: absolute;
    top: -18px;
    left: 5px;
    color: gray;
  }
  input {
    all: unset;
    height: 40px;
    padding: 0 10px;
    font-size: 18px;
  }
  &:first-child {
    input {
      background: ${(props) => props.theme.gray};
      border-radius: 5px;
      width: 100%;
      color: white;
      ${media.mobile} {
        font-size: 13px;
      }
    }
  }
`;

const Withdraw = styled.button`
  float: right;
  background: red;
  padding: 10px 12px;
  border-radius: 5px;
  color: white;
  font-size: 12px;
`;

const NFTContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px 15px;
  width: 935px;
  padding: 30px;
  margin: 0 auto;
  margin-bottom: 200px;
  h3 {
    position: absolute;
    left: 30px;
  }
  ${media.tablet} {
    width: auto;
  }
  ${media.mobile} {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 100px;
  }
`;

const NFTBox = styled(motion.div)`
  background: pink;
  background-size: cover;
  background-position: center center;
  height: 200px;
  border-radius: 10px;
  ${media.tablet} {
    height: 150px;
  }
  ${media[768]} {
    height: 130px;
  }
`;

const CopyBox = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const boxVariants = { hover: { scale: 1.05 } };
const DEFAULT_IMAGE =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

function Mypage() {
  const [profile, setProfile] = useState(DEFAULT_IMAGE);
  const [myAddress, setMyAddress] = useRecoilState(myAddressState);
  const [myBalance, setMyBalance] = useRecoilState(myBalanceState);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const copyLinkRef = useRef();
  const [ownToken, setOwnToken] = useState([]);

  const getUserData = async () => {
    const _balance = await getBalance(
      "0xA5707282Da9FC57C09e159B61cE9DAA646F838D4"
    );
    setMyBalance(_balance);
  };
  getUserData();
  console.log(myBalance);

  return (
    <>
      <ProfileContainer>
        <ProfileImage bgphoto={profile} />
        <ProfileInfoBox>
          <ProfileInfo>
            <label htmlFor="address">Wallet Address</label>
            <input id="address" readOnly type="text" value={myAddress} />
            <CopyBox>{/* <FontAwesomeIcon icon={faClone} /> */}</CopyBox>
          </ProfileInfo>
          <ProfileInfo>
            <label htmlFor="balance">Wallet Balance</label>
            <input
              id="balance"
              readOnly
              type="text"
              value={`${myBalance} Klay`}
            />
          </ProfileInfo>
          <Withdraw>회원 탈퇴</Withdraw>
        </ProfileInfoBox>
      </ProfileContainer>
      <NFTContainer>
        <h3>My NFTs</h3>
        {ownToken.map((data, i) => (
          <>
            <NFTBox
              key={i}
              // onClick={(e) => handleShow(e)}
              variants={boxVariants}
              whileHover="hover"
            />
          </>
        ))}
        {/* <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>프로필 변경</Modal.Title>
          </Modal.Header>
          <Modal.Body>프로필 이미지로 설정하시겠습니까?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleOK}>
              OK
            </Button>
          </Modal.Footer>
        </Modal> */}
      </NFTContainer>
    </>
  );
}

export default Mypage;

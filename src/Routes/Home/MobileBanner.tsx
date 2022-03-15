import { useState } from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import blockchain from "../../assets/blockchain.png";
import nft from "../../assets/nft.png";
import wallet from "../../assets/wallet.png";

const Container = styled.div`
  padding: 30px;
  width: 100%;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(7.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  color: rgba(255, 255, 255, 0.75);
  border-radius: 20px;
`;

const Img = styled.img`
  display: block;
  width: 70%;
  margin: 20px auto;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

function MobileBanner() {
  const [index, setIndex] = useState(0);
  const handleSelect = (
    selectedIndex: number,
    e: Record<string, unknown> | null
  ) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      prevIcon={false}
      nextIcon={false}
    >
      <Carousel.Item>
        <Container>
          <Img src={blockchain} alt="First slide" />
          <Carousel.Caption>
            <Title>블록체인 기술</Title>
            <p>
              캠페인과 기부내역이 블록체인에 등록되어, 거래 내역 위변조가
              불가능해져 투명한 기부가 가능합니다
            </p>
          </Carousel.Caption>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <Img src={nft} alt="Second slide" />
          <Carousel.Caption>
            <Title>NFT 발행</Title>
            <p>
              마음에 드는 캠페인에 Klay를 기부해보세요! 캠페인 NFT가 기부 증서로
              발행됩니다
            </p>
          </Carousel.Caption>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <Img src={wallet} alt="Third slide" />
          <Carousel.Caption>
            <Title>다양한 지갑 서비스</Title>
            <p>원하는 지갑으로 편리하게 기부할 수 있습니다</p>
          </Carousel.Caption>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
}

export default MobileBanner;

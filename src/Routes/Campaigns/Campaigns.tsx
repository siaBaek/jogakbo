import { Routes, Route, useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Past from "./Past";
import Present from "./Present";

const Container = styled.div`
  width: 935px;
  margin: 100px auto;
  padding: 30px;
`;

const CampaignsTitle = styled.h3`
  text-align: center;
  margin-bottom: 50px;
  padding-bottom: 5px;
  border-bottom: 1px solid lightgray;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span`
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 15px 0px;
  border-radius: 10px;
  color: yellow;
  a {
    display: block;
  }
`;

function Campaigns() {
  return (
    <>
      <Container>
        <CampaignsTitle>All Campaigns</CampaignsTitle>
        <Tabs>
          <Tab>
            <Link to="present">진행 중 캠페인</Link>
          </Tab>
          <Tab>
            <Link to="past">완료된 캠페인</Link>
          </Tab>
        </Tabs>
        <Routes>
          <Route path="present" element={<Present />} />
          <Route path="past" element={<Past />} />
        </Routes>
      </Container>
    </>
  );
}

export default Campaigns;

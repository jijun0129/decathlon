import styled from "styled-components";
import TheHeader from "../layout/TheHeader";
import SectionGraph from "../components/SectionGraph";

const GraphDiv = styled.div`
  width: 80%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const GraphH2 = styled.h2`
  display: flex;
  gap: 15px;
  font-size: 24px;
  font-weight: 500;
`;

const Box = styled.div`
  width: 20px;
  height: 30px;
  background-color: #272757;
`;

const SelectDateDiv = styled.div`
  width: 90%;
  font-size: 14px;
  text-align: right;
`;

const SectionPage = () => {
  return (
    <>
      <TheHeader />
      <GraphDiv>
        <GraphH2>
          <Box />
          섹션별 체류 시간
        </GraphH2>
        <SelectDateDiv>일간 / 주간 / 월간</SelectDateDiv>
        <SectionGraph />
      </GraphDiv>
    </>
  );
};

export default SectionPage;

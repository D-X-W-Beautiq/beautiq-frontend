import Header from "@components/commons/header/Header";

import CardContainer from "./components/CardContainer/CardContainer";
import RecentAnalysisCard from "./components/RecentAnalysisCard/RecentAnalysisCard";
import TodayTip from "./components/TodayTip/TodayTip";
import * as S from "./HomePage.styled";

const HomePage = () => {
  return (
    <>
      <Header left="beautiq" right="hambuger" />
      <S.HomePageWrapper>
        <S.HomeImage />
        <CardContainer />
        <RecentAnalysisCard />
        <TodayTip />
      </S.HomePageWrapper>
    </>
  );
};

export default HomePage;

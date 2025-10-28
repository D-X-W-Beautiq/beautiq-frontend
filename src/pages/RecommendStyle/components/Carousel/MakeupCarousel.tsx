import "swiper/css";
import "swiper/css/pagination";

import { useLayoutEffect, useRef, useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import * as S from "./MakeupCarousel.styled";

type MakeUp = {
  makeUpId: number;
  imageName: string;
  imageUrl: string;
  keywords: string[];
  createdAt: string;
};

interface MakeupCarouselProps {
  makeUps: MakeUp[];
}

const MakeUpCarousel = ({ makeUps }: MakeupCarouselProps) => {
  return (
    <S.CarouselWrapper>
      <S.PaginationStyle></S.PaginationStyle>
      <Swiper
        slidesPerView={2.2}
        slidesPerGroup={2}
        spaceBetween={24}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        style={{ paddingBottom: "24px" }}
      >
        {makeUps.map((makeUp) => (
          <SwiperSlide key={makeUp.makeUpId}>
            <KeywordLimitedCard makeUp={makeUp} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.CarouselWrapper>
  );
};

export default MakeUpCarousel;

// 키워드가 넘치면 자동 숨김 처리 되도록 렌더링 하는 컴포넌트
const KeywordLimitedCard = ({ makeUp }: { makeUp: MakeUp }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleKeywords, setVisibleKeywords] = useState<string[]>([]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const temp = document.createElement("div");
    temp.style.position = "absolute";
    temp.style.visibility = "hidden";
    temp.style.display = "flex";
    temp.style.gap = "0.6rem";
    document.body.appendChild(temp);

    let totalWidth = 0;
    const allowed: string[] = [];

    makeUp.keywords.forEach((k) => {
      const span = document.createElement("span");
      span.innerText = k;
      span.style.padding = "0.2rem 0.8rem";
      span.style.fontSize = "1.2rem";
      temp.appendChild(span);

      const w = span.offsetWidth + 6; // 간격 포함
      totalWidth += w;

      if (container.offsetWidth > totalWidth) {
        allowed.push(k);
      }
    });

    document.body.removeChild(temp);
    setVisibleKeywords(allowed);
  }, [makeUp.keywords]);

  return (
    <S.Card>
      <S.ImageBox>
        <img src={makeUp.imageUrl} alt={makeUp.imageName} />
      </S.ImageBox>

      <S.InfoBox>
        <S.KeywordList ref={containerRef}>
          {visibleKeywords.map((keyword) => (
            <S.Keyword key={keyword}>{keyword}</S.Keyword>
          ))}
        </S.KeywordList>
        <S.Title>{makeUp.imageName || makeUp.createdAt}</S.Title>
      </S.InfoBox>
    </S.Card>
  );
};

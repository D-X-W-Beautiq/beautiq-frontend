import styled from "@emotion/styled";
import { getTypography } from "@styles/typography";

export const Wrap = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* 카드 안에서 중앙정렬 */
`;

export const Placeholder = styled.div`
  width: 16rem;            /* 160px */
  height: 16rem;           /* 160px */
  border-radius: 1.6rem;   /* 16px */
  background: ${({ theme }) => theme.colors.primary[100]};
  display: grid;
  place-items: center;

  .cam {
    font-size: 3.2rem;     /* 32px */
    opacity: 0.85;
  }
`;

export const Preview = styled.div`
  width: 16rem;            /* 160px */
  height: 16rem;           /* 160px */
  border-radius: 1.6rem;   /* 16px */
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .remove {
    position: absolute;
    top: 0.8rem;           /* 8px */
    right: 0.8rem;         /* 8px */
    width: 2.6rem;         /* 26px */
    height: 2.6rem;        /* 26px */
    border-radius: 50%;
    border: none;
    background: #ffffffcc;
    font-size: 1.8rem;     /* 18px */
    cursor: pointer;
  }
`;

export const Hint = styled.p`
  margin: 1.2rem 0 1.6rem; /* 12px 0 16px */
  font-size: 1.2rem;       /* 12px */
  color: ${({ theme }) => theme.colors.neutral[700]};
  text-align: center;      /* 안내문 중앙정렬 */
  ${getTypography("caption2Medi")}
`;

export const BtnRow = styled.div`
  width: 100%;                           /* 카드 내부 폭 꽉 채움 */
  display: flex;                         /* 동일 너비 보장 */
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.0rem;                           /* 12px */

  padding: 0 1rem;

  justify-content: center;           /* 가운데 정렬 */

  /* 작은 화면에서는 1열로 쌓기 (옵션) */
  @media (max-width: 36rem) {            /* 360px */
    grid-template-columns: 1fr;
  }


  /* label 안에 렌더링되는 버튼에도 동일 스타일 적용 */
  label > button {
    width: 13.6rem;
  }
`;
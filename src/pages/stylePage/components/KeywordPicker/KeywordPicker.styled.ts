import { css } from "@emotion/react";
import styled from "@emotion/styled";

const PINK = "#e91e63";
const PINK_LIGHT = "#f6cfe0";

export const Wrap = styled.section``;

export const Count = styled.p`
  font-weight: 700;
  margin-bottom: 0.6rem; /* 6px */
  text-align: center;
`;

export const Guide = styled.p`
  font-size: 1.2rem;      /* 12px */
  color: #8f7f89;
  margin-bottom: 2rem;    /* 20px */
  text-align: center;
`;

/* 각 행: 가운데 정렬, 간격을 촘촘하게 */
export const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.4rem 0.4rem;     /* 기존 rem 그대로 유지 */
  margin-bottom: 0.8rem;  /* 8px */
  flex-wrap: nowrap;
`;

/* 사용자 추가 키워드가 생길 때 쓰는 행(줄바꿈 허용) */
export const ExtraRow = styled(Row)`
  flex-wrap: wrap;
  margin-top: 0.4rem;     /* 4px */
`;

export const Chip = styled.button<{ active: boolean }>`
  padding: 0.8rem 1.4rem;                       /* 8px 14px */
  border-radius: 99.9rem;                       /* 999px */
  font-size: 1.4rem;                            /* 14px */
  border: 0.1rem solid ${({ theme }) => theme.colors.gray[200]}; /* 1px */
  background: #fff;
  color: ${({ theme }) => theme.colors.gray[600]};
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;                                  /* 6px */
  white-space: nowrap;                          /* 줄바꿈 방지 */
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      background: ${PINK};
      color: #fff;
      border-color: ${PINK};
    `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .x {
    font-size: 1.4rem;                          /* 14px */
    line-height: 1;
  }
`;

/* 선택된(입력으로 추가되는) 칩도 '기존 칩'과 동일 크기/느낌으로 */
export const Selected = styled.div`
  margin-top: 1.2rem;                           /* 12px */
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;                                    /* 10px */
  justify-content: center;
`;

export const SelectedChip = styled.button`
  padding: 0.8rem 1.4rem;                       /* 8px 14px */
  border-radius: 99.9rem;                       /* 999px */
  font-size: 1.4rem;                            /* 14px */
  background: ${PINK};      /* 활성 칩과 같은 톤 */
  color: #fff;
  border: 0.1rem solid ${PINK};                 /* 1px */
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;                                  /* 6px */
  white-space: nowrap;
  cursor: pointer;

  span {
    font-size: 1.4rem;                          /* 14px */
    line-height: 1;
  }
`;
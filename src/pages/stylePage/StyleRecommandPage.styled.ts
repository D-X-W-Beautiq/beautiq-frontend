import styled from "@emotion/styled";

/* 전체 배경 → 흰색 */
export const Screen = styled.div`
  min-height: 100vh;
  background: #ffffff;
`;

/* 헤더: 타이틀 중앙, X 버튼 테두리 제거 */
export const HeaderBar = styled.header`
  height: 56px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #ffe6ef;
  border-bottom: 1px solid #f1e3ea;

  .title {
    font-weight: 800;
    font-size: 18px;
    color: #e45c9c;
    letter-spacing: -0.2px;
  }

  .close {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    background: transparent;
    border: none;
    outline: none;
    color: #e45c9c;
    font-size: 20px;
    cursor: pointer;
  }
`;

/* 본문: 업로드 영역을 살짝 더 위로 */
export const Body = styled.main`
  padding: 28px 16px 24px;       /* 필요 시 24~32px에서 미세조정 */
  max-width: 360px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

/* 섹션 경계 제거 */
export const Card = styled.section`
  background: transparent;
  border: 0;
  border-radius: 0;
  padding: 0;
  margin: 0;
`;

/* 밑줄형 인풋: 피그마 '끝이 둥근 캡'을 배경 레이어로 정확 재현 */
export const InputBlock = styled.div`
  margin: 12px 0 24px;
  position: relative;
  padding-bottom: 16px; /* 캡 바 여유 */

  .label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border: 0;
  }

  /* 메인 라인 + 좌/우 캡(반원)을 조합해 '라운드 바' 생성 */
  &::after,
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    height: 2px;
    pointer-events: none;
  }

  // /* 중앙 라인 */
  // &::after {
  //   left: 16px;                 /* 좌우 여백 */
  //   right: 16px;
  //   background: #f6cfe0;
  //   border-radius: 1px;
  // }

  // /* 좌/우 캡을 반원으로 추가 */
  // &::before {
  //   left: 8px;
  //   right: 8px;
  //   height: 8px;                /* 반원 지름 */
  //   background:
  //     radial-gradient(circle at left bottom, #f6cfe0 60%, transparent 61%) left bottom / 8px 8px no-repeat,
  //     radial-gradient(circle at right bottom, #f6cfe0 60%, transparent 61%) right bottom / 8px 8px no-repeat;
  // }

  input {
    width: 100%;
    height: 40px;
    border:0;
    border-bottom: 0.1rem solid #f6cfe0;       /* 기본 밑줄/테두리 제거 */
    background: transparent;
    padding: 0 4px;
    font-size: 14px;
    border-radius: 0.6rem;
    outline: none;

    &::placeholder {
      color: #bda8b3;
      text-align: center;
    }

    &:focus {
      box-shadow: none !important;
      outline: none;
    }
  }
`;

/* '다음으로' 버튼: 원래 느낌 유지(테두리/그림자 X) */
export const BottomBar = styled.div`
  padding-bottom: 16px;

  button {
    width: 100%;
    height: 48px;
    border-radius: 12px;
    background: #e45c9c;
    color: #fff;
    font-weight: 800;
    font-size: 16px;
    border: none;
    box-shadow: none;
    outline: none;

    &:focus,
    &:active {
      border: none;
      box-shadow: none;
      outline: none;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;
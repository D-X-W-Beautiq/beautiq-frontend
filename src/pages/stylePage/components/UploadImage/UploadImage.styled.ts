import styled from "@emotion/styled";

export const Wrap = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* 카드 안에서 중앙정렬 */
`;

export const Placeholder = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 16px;
  background: #f3b8cc;
  display: grid;
  place-items: center;

  .cam {
    font-size: 32px;
    opacity: 0.85;
  }
`;

export const Preview = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .remove {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: none;
    background: #ffffffcc;
    font-size: 18px;
    cursor: pointer;
  }
`;

export const Hint = styled.p`
  margin: 12px 0 16px;       /* 여백 살짝 키워 균형 */
  font-size: 12px;
  color: #a48996;
  text-align: center;        /* 안내문 중앙정렬 */
`;

export const BtnRow = styled.div`
  width: 100%;                          /* 카드 내부 폭 꽉 채움 */
  display: grid;                        /* 동일 너비 보장 */
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;

  /* 작은 화면에서는 1열로 쌓기 (옵션) */
  @media (max-width: 360px) {
    grid-template-columns: 1fr;
  }

  button {
    height: 44px;
    width: 100%;
    border-radius: 10px;
    font-weight: 700;
    font-size: 14px;
    color: #fff;
    background: #e91e63;
    border: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  /* label 안에 렌더링되는 버튼에도 동일 스타일 적용 */
  label > button {
    width: 100%;
  }
`;
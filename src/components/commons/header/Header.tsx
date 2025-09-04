import * as S from "../header/Header.styled";

interface HeaderProps {
  back ?: boolean;
  text?:string;
  right?: "hambuger" | "close";
}

const Header = ({back = false, text, right} : HeaderProps) => {
  return(
    <S.HeaderWrapper>
      {/* back이 true인 경우 back버튼을 만들고 false면 안만든다. => svg로 대체 해야 한다*/}
      {back ? <div>"있음"</div> : null }
      {text && <div>{text}</div>}
      {right === "hambuger" ? "햄버거": right === "close" ? "닫힘" : null}
    </S.HeaderWrapper>
  );
}

export default Header;
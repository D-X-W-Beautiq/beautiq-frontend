import Header from "../components/commons/header/Header";

function Testpage(){
    return (
        // return문 안에는 태그 2개 반환 못해서 div로 감싸줘야함
        <div>

            {/* 오른쪽 햄버거 아이콘 테스트 */}
            <Header text="텍스트" right="hambuger"/>
            <Header text="텍스트" right="close"/>
            <Header back={true} text="텍스트"/>
            <Header back={true} text="텍스트" right="close"/>
            <Header right="hambuger"/>
            <Header right="close"/>
            <Header back={true} />
            <Header back={true}  right="close"/>
            

        </div>
    );
}

export default Testpage;
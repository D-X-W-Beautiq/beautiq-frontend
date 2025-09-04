import Header from "../components/commons/header/Header";

function Testpage(){
    return (
        // return문 안에는 태그 2개 반환 못해서 div로 감싸줘야함
        <div>
            <Header back={true} text=""/>
            <Header back={true} text="안녕하시긔"/>
            <Header back={false} text="안녕하시긔" right="hambuger"/>
        
        </div>
    );
}

export default Testpage;
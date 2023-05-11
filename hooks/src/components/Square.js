import React from "react";
import "./Square.css";



export default class Square extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         value: null,
    //     };
    // }
    // State 생성 (무언가를 "기억하기" 위해 component는 state를 사용.)
    // 동기화를 위해 부모에 옮겨줌(Board.js)
    render(){
        return(
            // <button className="square"
            //     onClick={() => {console.log('click')}}>
            
            // State 변경(클릭 시, value 값을 X로 바꾸겠다.)
            <button className="square"
            onClick={() => {this.props.onClick()}}>
                
                {/* {this.props.value} */}
                {this.props.value} 
            </button>
            )
    }// state 이용(this.state.value)
}

// Square의 render 함수 내부의 this.state.value를 this.props.value로 바꿔줍니다.
// Square의 render 함수 내부의 this.setState()를 this.props.onClick()으로 바꿔줍니다..
// Square는 게임의 상태를 유지할 필요가 없기 때문에 constructor를 지워줍니다.


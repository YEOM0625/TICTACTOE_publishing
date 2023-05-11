import React from "react";
import "./Square.css";



export default class Square extends React.Component{
  
    render(){
        return(

            <button className="square"
            onClick={() => {this.props.onClick()}}>
                
               
                {this.props.value} 
            </button>
            )
    }// state 이용(this.state.value)
}



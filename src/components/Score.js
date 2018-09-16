import React, { Component } from 'react';
class Score extends Component{
    assignClass(){
        let myClass ="";
        if(this.props.score>80){
            myClass="high-score"
        }
        else if(this.props.score>50){
            myClass="medium-score"
        }else{
            myClass="low-score"
        }
        return myClass;
    }
    render(){
        return(<div className={this.assignClass()}>Score: {this.props.score}</div>)
    }
}
export default Score
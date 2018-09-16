import React, { Component } from 'react';
import Letter from './Letter';
class Letters extends Component{

    generateLetterTags(){
        const letterStatus = this.props.letterStatus
        return Object.keys(letterStatus).map((l)=>{
            return <Letter
             class={letterStatus[l]?"selected": null} 
             key={l} letter={l} 
             selectLetter={this.props.selectLetter} />
        });
    }
    render(){
        return(
        <div>
            <div>Available Letters:</div>
            <span>{this.generateLetterTags()}</span>
        </div>)

    }
}
export default Letters
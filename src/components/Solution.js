import React, { Component } from 'react';
import Letter from './Letter'
class Solution extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         word: "HAMSTER",
    //         hint: "furry"
    //     }
    // }
    generateLetterTags() {
        return this.props.word.split('').map(l => {
            return <Letter 
            key={l} 
            letter={this.props.letterStatus[l]? l: "_"} 
            class="solutionLetter"/>
        });
    }
    render() {
        return (
            <div>
                <div>{this.props.hint}</div>
                {this.generateLetterTags()}
            </div>
        )
    }
}
export default Solution
import React, { Component } from 'react';
import Score from './components/Score';
import Letters from './components/Letters';
import Solution from './components/Solution';
import './App.css';

class App extends Component {
  constructor() {
    // @ts-ignore
    super()
    this.state = {
      letterStatus: this.generateLetterStatus(),
      score: 100,
      word: "DOG",
      hint: "Man's companion"
    }
  }
  generateLetterStatus() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }
  selectLetter = (letter) => {
    let letterStatus = { ...this.state.letterStatus };
    letterStatus[letter] = true;
    let newScore = this.getScore(letter);
    this.setState({ letterStatus: letterStatus, score: newScore });
  }
  didWin() {
    for (let l of this.state.word) {
      if (!this.state.letterStatus[l]) return false;
    } return true;
  }
  getScore = (letter) => {
    let updateScore = -20;
    if (this.state.word.includes(letter)) {
      updateScore = 5;
    }
    updateScore += this.state.score;
    return updateScore;
  }
  restartGame=()=>{
    this.setState({...this.state, score: 100, word: "CAT", hint: "Smarter than dog", letterStatus: this.generateLetterStatus() })
  }
  render() {
    if (this.didWin()) {
      return (
        <div className="success-message">You won the game!!
        <button type="button" onClick={this.restartGame}>Restart Game</button>
        </div>
      )
    }
    else if (this.state.score > 0) {
      return (

        <div>
          <Score score={this.state.score} />
          <Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter} />
          <Solution letterStatus={this.state.letterStatus} word={this.state.word} hint={this.state.hint} />
        </div>
      );
    } else if (this.state.score <= 0) {
      return (
      <div className="game-over">Game Over! The word was {this.state.word} 
        <button type="button" onClick={this.restartGame}>Restart Game</button>
      </div>)
    }
  }
}
export default App;


/*
  Name : React Playground
  Main Quiz Game Entry
  By : Theppasith N.
*/

import React from "react";
import { PropTypes } from "react"
import ReactDOM from "react-dom";
import { Panel , FormGroup , ControlLabel , FormControl , Col , Button } from "react-bootstrap";
import QuizAddForm from './QuizAddForm.js'
import QuizList from './QuizList.js'

// Main Game
class QuizGame extends React.Component{

      constructor(){
        super();
        this.state = {questions:[] , question_id:0};
      }

      onAddQuiz(quiz){
        //Add up the Counter
        quiz.id = ++this.state.question_id;
        //Add Question into Pool
        this.state.questions.push(quiz);
        //SetState For Reactive Changes
        this.setState({questions: this.state.questions
          , question_id : this.state.question_id});
      }

      render(){
        return (
          <div>
              <QuizList items={this.state.questions} />
              <QuizAddForm onAddQuiz={this.onAddQuiz.bind(this)} />
          </div>
        );
      }
  }
export default QuizGame;

/*
  Name : React Playground
  List of All Quiz
  By : Theppasith N.
*/

import React from "react";
import ReactDOM from 'react-dom';
import {Panel,Col} from "react-bootstrap";

//A Class for Single Question to Display
class Question extends React.Component{

    constructor(){
      super();
    }

    render(){
      console.log("Receive Single item");
      console.log(this.props.data);
      let headerString = "Question id :" + this.props.data.id ;
      return (

      <div>
          <div className="row">
          <Col md={12}>
              <Panel header={headerString}>

              <div className="row">
                  <Col md = {12}>
                      {this.props.data.question} + {this.props.data.answer}
                  </Col>
              </div>

              <div className="row">
                  <Col md={6}>
                      {this.props.data.choice1}
                  </Col>
                  <Col md={6}>
                      {this.props.data.choice2}
                  </Col>
              </div>

              <div className="row">
                  <Col md={6}>
                      {this.props.data.choice3}
                  </Col>
                  <Col md={6}>
                      {this.props.data.choice4}
                  </Col>
              </div>

              </Panel>
          </Col>
          </div>
      </div>
      );
    }
}
export default Question;

// Quiz List ( Hold a lot of Question )
class QuizList extends React.Component{
    constructor(props){
      super(props);
      //Receive items From Parent (via properties of this object)
      this.state = {questions: this.props.items};
    }

    render(){
      console.log("QuizList");
      let question_items = this.state.questions.map(
        function(question_item,i){
          return <Question data={question_item} key={i} />
        });
        return (
            <Panel header="Quiz List !">
              {question_items}
            </Panel>
        );
    }
}
export default QuizList;

/*
  Name : React Playground
  Header Bar Components Goes Here
  By : Theppasith N.
*/

import React from "react";
import { Button, Panel } from 'react-bootstrap';
// Main App
class HeaderBar extends React.Component {
  // Rendering Method
  render() {
    return (
        <Panel>
          <div class = "HeaderBar" >
            <span>
              <Button bsStyle="primary">Play Now !</Button>
            </span>
            &nbsp;&nbsp;&nbsp;
            <span>
              <Button bsStyle="primary">Quiz Add Form !</Button>
            </span>
            &nbsp;&nbsp;&nbsp;
            <span>
              <Button bsStyle="primary">Quiz List</Button>
            </span>
            &nbsp;&nbsp;&nbsp;
          </div>
        </Panel>
    );
  }
}

export default HeaderBar;

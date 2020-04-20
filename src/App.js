import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Grid} from 'semantic-ui-react';
import { Row, Col } from 'react-bootstrap'
import Votes from "./components/votes";
import Buttons from "./components/orderbuttons";

class App extends Component {
  render() {
    return (
      <div class="container">
        <Grid>
          <Row className="">
            <Col md={8} mdOffset={2} >
              <h1>Blog posts populares</h1>
              <Buttons />
              <Votes />
            </Col>
          </Row>
      </Grid>
    </div>
    );
  }
}
export default App;

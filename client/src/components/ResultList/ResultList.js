 
import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Result from "../Result/Result";

const ResultsList = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <div className="p-4 mb-5">
        <Card>
          <Card.Header>Results</Card.Header>
          <Card.Body>
            <Result results={props.results} />
          </Card.Body>
        </Card>
      </div>
    </React.Fragment> 
  );
}

export default ResultsList;
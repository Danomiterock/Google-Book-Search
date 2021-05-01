import React from "react";
import { Card, ButtonGroup, Image } from "react-bootstrap";
import API from "../../utils/API";
import SaveBtn from "../Save/Save";
import ViewBtn from "../View/View";

class Result extends React.Component {
  state = {
    buttonClicked: false,
  };

  handleFormSubmit = (event, item) => {
    event.preventDefault();
    console.log(item);
    this.setState({ buttonClicked: true });
    API.saveBook(item)
      .then((res) => {
        this.setState({ buttonClicked: false });
        window.location.href = "/saved";
      })
      .catch((err) => console.log(err));
  };

  render() {
    return this.props.results.items.length > 0 ? (
      this.props.results.items.map((result) => (
        <Card bg="light" key={result.id} className="my-3">
          <Card.Header
            as="h5"
            className="d-flex justify-content-between align-items-center bg-light"
          >
            <Card.Title className="font-weight-bold">
              {result.volumeInfo.title}
              <br></br>
              <small>{[...result.volumeInfo.authors].join(", ")}</small>
            </Card.Title>
            <ButtonGroup>
              <ViewBtn result={result} />
              <SaveBtn
                handleFormSubmit={this.handleFormSubmit}
                result={result}
              />
            </ButtonGroup>
          </Card.Header>
          <Card.Body>
            <Image
              src={result.volumeInfo.imageLinks.thumbnail}
              className="float-left img-thumbnail mr-2"
            />
            <Card.Text>{result.volumeInfo.description}</Card.Text>
          </Card.Body>
        </Card>
      ))
    ) : (
      <h1>No books yet</h1>
    );
  }
}

export default Result;

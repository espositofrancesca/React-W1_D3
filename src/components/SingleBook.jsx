import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card
            className="mx-4 my-4"
              style={{ width: "12rem" }}
              onClick={() => this.setState({ selected: !this.state.selected })}
            >
              <Card.Img variant="top" src={this.props.book.img} />
              <Card.Body>
                <Card.Title>{this.props.book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SingleBook;

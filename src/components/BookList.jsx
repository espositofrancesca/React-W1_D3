import { Container, Form, Row, Col } from "react-bootstrap";

/* import fantasy from "../data/fantasy.json"; */
import { Component } from "react";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    filter: "",
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca qui il tuo libro"
                value={this.state.filter}
                onChange={(event) => {
                  this.setState({
                    filter: event.target.value,
                  });
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.books
            .filter((book) => book.title.toLowerCase().includes(this.state.filter))
            .map((item) => (
              <Col key={item.asin}>
                <SingleBook book={item} />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;

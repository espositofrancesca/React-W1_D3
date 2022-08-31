import Alert from "react-bootstrap/Alert";
import { Container, Row, Col } from "react-bootstrap";


function WarningSign(props) {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} >
          <Alert className="mt-5 p-2" variant="danger">
            {props.text}

          </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default WarningSign;

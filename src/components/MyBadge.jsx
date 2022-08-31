import {  Badge } from "react-bootstrap";

function MyBadge(props) {
  return <Badge className="p-2 mybadge" bg={props.color}>{props.text}</Badge>;
}

export default MyBadge;

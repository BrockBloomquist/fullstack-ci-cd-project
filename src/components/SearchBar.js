import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { SearchDropdown } from "./SearchDropdown";

export function SearchBar() {
  return (
    <>
      <Col>
        <h4>All Users</h4>
      </Col>
      <Col xs="auto">
        <Form.Control
          type="text"
          placeholder="Search Users..."
          className=" mr-sm-2"
        />
      </Col>
      <Col xs="auto">
        <Button variant="outline-success" type="submit">
          Submit
        </Button>
      </Col>
      <Col xs="auto">
        <SearchDropdown />
      </Col>
    </>
  );
}

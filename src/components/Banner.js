import { SmallExample } from "./SmallExample";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { SearchBar } from "./SearchBar";
import "../assets/stylesheets/styles.css";

export function Banner() {
  return (
    <Container className="mx-auto border border-dark shadow rounded mt-4 user-container">
      <Row className="my-2">
        <SearchBar />
      </Row>
      <Row className="justify-content-center">
        <SmallExample />
      </Row>
    </Container>
  );
}

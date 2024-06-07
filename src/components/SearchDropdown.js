import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

export function SearchDropdown() {
  let [title, setTitle] = useState("Filter");
  let [users, setUsers] = useState([]);
  return (
    <Dropdown className="d-flex justify-content-end">
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        {title}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          href="#/action-1"
          onClick={() => {
            setTitle("Newest");
          }}
        >
          Newest
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-2"
          onClick={() => {
            setTitle("Oldest");
          }}
        >
          Oldest
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-3"
          onClick={() => {
            setTitle("Alphabetical");
          }}
        >
          Alphabetical
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

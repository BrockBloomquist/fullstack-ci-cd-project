import Table from "react-bootstrap/Table";
import { TableItem } from "./TableItem";
export function SmallExample() {
  return (
    <Table striped bordered hover size="sm" className="overflow-auto">
      <thead>
        <tr>
          <th>#</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody className="m-3">
        <TableItem />
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>jacon@test.com</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>larry@test.com</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

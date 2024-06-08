import Table from "react-bootstrap/Table";
import { TableItem } from "./TableItem";
export function SmallExample({ setIsModalOpen }) {
  return (
    <Table striped bordered hover size="sm" className="overflow-auto">
      <thead>
        <tr>
          <th>#</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Username</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody className="m-3">
        <TableItem n={1} setIsModalOpen={setIsModalOpen} />
        <TableItem n={2} setIsModalOpen={setIsModalOpen} />
        <TableItem n={3} setIsModalOpen={setIsModalOpen} />
        <TableItem n={4} setIsModalOpen={setIsModalOpen} />
      </tbody>
    </Table>
  );
}

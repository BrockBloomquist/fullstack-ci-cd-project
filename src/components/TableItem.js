import { Button } from "react-bootstrap";
import "../assets/stylesheets/styles.css";

export let fullName = "Mark";
export let email = "otto@test.com";
export let username = "@mdo";

export function TableItem({ n, setIsModalOpen }) {
  return (
    <>
      <tr>
        <td>{n}</td>
        <td>{fullName}</td>
        <td>{email}</td>
        <td>{username}</td>
        <td>
          <Button
            className="details-button"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            User Details
          </Button>
        </td>
      </tr>
    </>
  );
}

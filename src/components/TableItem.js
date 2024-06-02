export function TableItem() {
  let n = 1;
  let fullName = "Mark";
  let email = "otto@test.com";
  let username = "@mdo";
  return (
    <>
      <tr>
        <td>{n}</td>
        <td>{fullName}</td>
        <td>{email}</td>
        <td>{username}</td>
      </tr>
    </>
  );
}

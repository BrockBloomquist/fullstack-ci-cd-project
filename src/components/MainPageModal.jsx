import { fullName } from "./TableItem";
import { IoMdClose } from "react-icons/io";
import "../assets/stylesheets/styles.css";
export const MainPageModal = ({ isModalOpen, onClose }) => {
  return (
    <>
      <section className="modal">
        <article className="modal-content p-lg-4">
          <div className="exit-icon text-end">
            <IoMdClose onClick={onClose} />
          </div>
          <main className="modal-mainContents">
            <h5 className="modal-title">User</h5>
            <hr />
            <p className="modal-text">Do something to this user</p>
          </main>
        </article>
      </section>
    </>
  );
};

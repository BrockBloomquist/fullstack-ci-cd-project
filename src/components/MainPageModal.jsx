import { fullName } from "./TableItem";
import "../assets/stylesheets/styles.css";
export const MainPageModal = () => {
  return (
    <>
      <section className="modal">
        <article className="modal-content p-lg-4"></article>
        <div className="exit-icon text-end"></div>
        <main className="modal-mainContents">
          <h5 className="modal-image">{fullName}</h5>
        </main>
      </section>
    </>
  );
};

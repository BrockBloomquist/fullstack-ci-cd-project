import { useState } from "react";
import "../assets/stylesheets/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navItems = ["home"];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="inner">
        <header>
          <button
            type="button"
            className="sidebar-burger"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <span>{isOpen ? "Close" : "menu"}</span>
          </button>
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </header>
        <nav>
          {navItems.map((item) => (
            <button key={item} type="button">
              <span>{item}</span>
              <p>{item}</p>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

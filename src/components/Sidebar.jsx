import { useState } from "react";
import "../assets/stylesheets/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navItems = ["home", "settings"];

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
            <span className="material-symbols-outlined">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </header>
        <nav>
          {navItems.map((item) => (
            <button key={item} type="button">
              <span className="material-symbols-outlined">{item}</span>
              <p>{item}</p>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

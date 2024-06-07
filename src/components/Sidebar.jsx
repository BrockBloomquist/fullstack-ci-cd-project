import { useState } from "react";
import "../assets/stylesheets/styles.css";
import burger from "../assets/img/burger.svg";
import logo from "../assets/img/Icon_BLACK.png";
import home from "../assets/img/house-solid.svg";
import { Button } from "react-bootstrap";

const navItems = ["home", "settings"];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="inner">
        <header>
          <button
            className="sidebar-burger"
            variant="light"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <img src={burger} />
          </button>
          <h4>Sidebar</h4>
        </header>
        <nav>
          {navItems.map((item) => (
            <button key={item} type="button">
              <img href={home} />
              <p>{item}</p>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

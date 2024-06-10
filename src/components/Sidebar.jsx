import { useState } from "react";
import "../assets/stylesheets/styles.css";
import burger from "../assets/img/burger.svg";
import home from "../assets/img/house-solid.svg";
import gear from "../assets/img/gear-solid.svg";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button, Stack } from "react-bootstrap";

const navItems = [
  { name: "home", image: home, ref: "/" },
  { name: "settings", image: gear, ref: "/settings" },
];

export const Sidebar = ({ openModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Stack className={`sidebar ${isOpen ? "open" : ""}`}>
      <aside>
        <div className="inner">
          <header>
            <button
              className="sidebar-burger"
              variant="light"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <img src={burger} alt="burger-icon" />
            </button>
            <h4>Navigation</h4>
          </header>
          <nav>
            {navItems.map((item) => (
              <Button key={item.name} type="button" href={item.ref}>
                <img src={item.image} alt="home-icon" />
                <p>{item.name}</p>
              </Button>
            ))}
            <div className="profile">
              <Button key="Test" type="button" onClick={openModal}>
                <img src={home} alt="home-icon" />
                <p>Profile</p>
              </Button>
            </div>
          </nav>
        </div>
      </aside>
    </Stack>
  );
};

import { useState } from "react";
import "../assets/stylesheets/styles.css";
import burger from "../assets/img/burger.svg";
import home from "../assets/img/house-solid.svg";
import gear from "../assets/img/gear-solid.svg";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

const navItems = [
  { name: "home", image: home, ref: "/" },
  { name: "settings", image: gear, ref: "/settings" },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Col xs={1}>
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
            </nav>
          </div>
        </aside>
      </Col>
    </Container>
  );
};

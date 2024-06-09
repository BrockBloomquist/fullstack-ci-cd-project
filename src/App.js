import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "./components/Banner";
import { Sidebar } from "./components/Sidebar";
import { useState } from "react";
import { MainPageModal } from "./components/MainPageModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setIsModalOpen(true);
    setModalContent(content);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Sidebar />
      <Banner setIsModalOpen={setIsModalOpen} />
      {isModalOpen && (
        <MainPageModal isModalOpen={isModalOpen} onClose={closeModal} />
      )}
    </>
  );
}

export default App;

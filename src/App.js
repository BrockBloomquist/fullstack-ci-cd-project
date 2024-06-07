import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "./components/Banner";
import { Sidebar } from "./components/Sidebar";
function App() {
  return (
    <>
      <Sidebar />
      <Banner />
    </>
  );
}

export default App;

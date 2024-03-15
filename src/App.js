import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div style={{ backgroundColor: "#221f1f" }}>
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

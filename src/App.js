import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
    </div>
  );
}

export default App;

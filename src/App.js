import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Employees from "./components/Employees";

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <Employees />
    </div>
  );
}

export default App;

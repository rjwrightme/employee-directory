import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Employee from "./components/Employee";

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <Employee
        name="John Smith"
        image="https://picsum.photos/100"
        dob="02/11/1973"
        email="example@mail.com"
        phone="0404123456"
      />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Employees from "./components/Employees";

class App extends React.Component {
  state = {
    employeeList: [],
    displayList: [],
  };

  updateDisplayList = (list) => {
    this.setState({
      displayList: list || this.state.employeeList,
    });
  };

  updateEmployeeList = (list) => {
    this.setState({
      employeeList: list,
    });
    this.updateDisplayList(list);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Filter
          employeeList={this.state.employeeList}
          updateDisplayList={this.updateDisplayList}
        />
        <Employees
          employeeList={this.state.employeeList}
          displayList={this.state.displayList}
          updateEmployeeList={this.updateEmployeeList}
        />
      </div>
    );
  }
}

export default App;

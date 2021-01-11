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

  sortAlphabetically = (list) => {
    list.sort((a, b) => a.name.first.localeCompare(b.name.first));
    this.updateDisplayList(list);
  };

  sortDescending = (list) => {
    list.sort((a, b) => b.name.first.localeCompare(a.name.first));
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
          sortAlphabetically={this.sortAlphabetically}
          sortDescending={this.sortDescending}
        />
      </div>
    );
  }
}

export default App;

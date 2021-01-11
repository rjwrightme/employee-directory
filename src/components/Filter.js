import React from "react";
import "../styles/Filter.css";

class Search extends React.Component {
  filteremployees = (e) => {
    const filteredList = this.props.employeeList.filter((employee) => {
      return (
        employee.name.first
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        employee.name.last.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    this.props.updateDisplayList(filteredList);
  };

  render() {
    return (
      <input
        className="searchBox"
        type="text"
        placeholder="Search Employees"
        onChange={this.filteremployees}
      ></input>
    );
  }
}

export default Search;

import React from "react";
import Card from "./Card";
import "../styles/Employees.css";

class Employees extends React.Component {
  state = {
    error: null,
    isLoaded: false,
  };

  componentDidMount() {
    // Make AJAX request to the Random User API to fill our app with dummy data
    fetch(
      "https://randomuser.me/api/?results=5&seed=abc&inc=picture,name,phone,email,dob,nat&nat=au"
    )
      .then((response) => response.json())
      .then(
        (result) => {
          const employees = result.results;
          this.setState({
            isLoaded: true,
          });
          this.props.updateEmployeeList(employees);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  handleSort = (e) => {
    if (e.target.innerText === "˅") {
      e.target.innerText = "˄";
      this.props.sortAlphabetically(this.props.displayList);
    } else {
      e.target.innerText = "˅";
      this.props.sortDescending(this.props.displayList);
    }
  };

  render() {
    const { error, isLoaded } = this.state;
    const displayList = this.props.displayList;
    if (error) {
      return <div>Error: {error.message}. Please try refreshing the page.</div>;
    } else if (!isLoaded) {
      return <div>Loading Employees...</div>;
    } else {
      return (
        <div id="employeeList">
          <div className="card">
            <h3>Profile</h3>
            <h3>
              Name <span onClick={this.handleSort}>˅</span>
            </h3>
            <h3>Phone</h3>
            <h3>Email</h3>
            <h3>DOB</h3>
          </div>
          {displayList.map((employee) => (
            <Card
              image={employee.picture.large}
              name={`${employee.name.first} ${employee.name.last}`}
              phone={employee.phone}
              email={employee.email}
              dob={employee.dob.date.substr(0, 10)}
            />
          ))}
        </div>
      );
    }
  }
}

export default Employees;

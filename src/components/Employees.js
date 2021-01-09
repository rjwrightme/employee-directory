import React from "react";
import Card from "./Card";
import "../styles/Employees.css";

class Employees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      employeeList: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://randomuser.me/api/?results=5&seed=abc&inc=picture,name,phone,email,dob,nat&nat=au"
    )
      .then((response) => response.json())
      .then(
        (result) => {
          const employees = result.results;
          this.setState({
            isLoaded: true,
            employeeList: employees,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, employeeList } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div id="employeeList">
          <div className="card">
            <h3>Profile</h3>
            <h3>Name</h3>
            <h3>Phone</h3>
            <h3>Email</h3>
            <h3>DOB</h3>
          </div>
          {employeeList.map((employee) => (
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

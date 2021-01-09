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
      .then((data) => console.log(data));
    //   .then(
    //     (result) => {
    //       this.setState({
    //         isLoaded: true,
    //         employeeList: result.employeeList,
    //       });
    //     },
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error,
    //       });
    //     }
    //   );
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <p>{items}</p>
        // <Card
        //   image="https://picsum.photos/100"
        //   name="John Smith"
        //   phone="0404123456"
        //   email="example@mail.com"
        //   dob="02/11/1973"
        // />
      );
    }
  }
}

export default Employees;

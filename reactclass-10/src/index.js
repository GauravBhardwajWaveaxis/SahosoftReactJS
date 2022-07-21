import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Footer from "./Footer";
// import Header from "./Header";
// import Layout from "./Layout";
// import Sidebar from "./Sidebar";

// class Employee extends Component {
//   render() {
//     return (
//       <>
//         <h1>My Name is : {this.props.name}</h1>
//         <h1>My Id is : {this.props.id}</h1>
//       </>
//     );
//   }
// }

// ReactDOM.render(
//   <>
//     <h1>Gaurav Bhardwaj</h1>
//     <Employee name="Gaurav Bhardwaj" id={10} />
//   </>,
//   document.getElementById("root")
// );

// class Employee extends Component {
//   render() {
//     return (
//       <>
//         <h1>My Name is : {this.props.name}</h1>
//         <h1>My Id is : {this.props.id}</h1>
//         <h1>Frinds List: {this.props.frindsList} </h1>
//       </>
//     );
//   }
// }

// Employee.defaultProps = {
//   name: "ABC XYZ",
//   id: 10,
//   frindsList: ["akansha", "Swati", "Hetal"],
// };

// ReactDOM.render(
//   <>
//     <h1>Gaurav Bhardwaj</h1>
//     {/* <Employee /> */}
//     <Employee
//       name="Gaurav Bhardwaj"
//       id={10}
//       frindsList={["abc", "xyz", "pqr"]}
//     />
//   </>,
//   document.getElementById("root")
// );

// import Student from "./Student";

// ReactDOM.render(
//   <>
//     {/* <Student
//       name="Gaurav Bhardwaj"
//       age={25}
//       mblNo={7017651577}
//       isActive={true}
//       fun={() => {
//         return <h6>This Is Function</h6>;
//       }}
//     /> */}
//   </>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <>
//     {/* <Student /> */}
//     <Student> This is Anonymous Props!(Childern Data) </Student>
//   </>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <>
//     <Layout>
//       <Header />
//       <Sidebar />
//       <Footer />
//     </Layout>
//   </>,
//   document.getElementById("root")
// );

import PropTypes from "prop-types";

class Employee extends Component {
  render() {
    console.log(typeof this.props.id);
    return (
      <>
        <h1>My Name is : {this.props.name}</h1>
        <h1>My Id is : {this.props.id}</h1>
        <h1>Frinds List: {this.props.frindsList} </h1>
        <h1>Gender is : {this.props.gender}</h1>
      </>
    );
  }
}

// Employee.propTypes = {
//   name: PropTypes.string.isRequired,
//   id: PropTypes.number,
//   frindsList: PropTypes.array,
//   gender: PropTypes.string.oneOf(),
// };

Employee.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number,
  frindsList: PropTypes.array,
  gender: PropTypes.string,
  gender: PropTypes.oneOf(["Male", "Female"]),
};

ReactDOM.render(
  <>
    <Employee
      name="Gaurav"
      id={15}
      frindsList={["abc", "pqr", "xyz", "pqr", "xyz"]}
      gender="Male"
    />

    {/* <Employee
      name="Akash"
      id={111}
      frindsList={{ frndId: 54, friName: "suhas" }}
    /> */}
  </>,
  document.getElementById("root")
);

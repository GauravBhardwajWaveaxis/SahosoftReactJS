// export default class Employee {
//   admin1() {
//     console.log("This Is Admin 1 Function");
//   }
//   admin2() {
//     console.log("This Is Admin 2 Function");
//   }
// }

// export default function employeeData(params) {
//   console.log("This is Employee Data Function");
// }

// function employeeData(params) {
//   console.log("This is Employee Data Function");
// }

// export default employeeData();

// export default var empName = "Gaurav Bhardwaj";

// var empName = "Gaurav Bhardwaj";
// export default empName;

//=============================Named Export========================//

class Employee {
  admin() {
    console.log("This Is Admin Method!!!");
  }
}

class Student {
  getStudentDetail() {
    console.log("Get Student Details.");
  }
}

export default function getData(params) {
  console.log("This Is Get Data Function !!!!!!");
}

export { Employee, Student };

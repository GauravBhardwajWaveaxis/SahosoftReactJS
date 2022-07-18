import reactdom from "react-dom";
import "./styles.css";
// import Toggle from "./Toggle";

// reactdom.render(
//   <>
//     {/* Internal CSS */}

//     <h1 style={{ color: "red", textAlign: "center" }}>
//       Good Morning ReactJS !!!
//     </h1>

//     {/* External CSS */}

//     <h2 className="heading">Gaurav Bhardwaj Lives In Bangalore.</h2>

//     <h2 id="two">Waveaxis In Bangalore.</h2>
//   </>,
//   document.getElementById("root")
// );

// const isActive = true;
// const isActive = false;

// reactdom.render(
//   <>
//     <h1>Gaurav Bhardwaj</h1>

//     {isActive === true ? (
//       <h2>I Am Active !!!</h2>
//     ) : (
//       <h2>I Am Not Active !!!</h2>
//     )}

//     <button>Hide Me</button>
//   </>,
//   document.getElementById("root")
// );

// let isActive = false;

// reactdom.render(
//   <>
//     {/* <h1>Gaurav Bhardwaj</h1>

//     {isActive === true ? (
//       <h2>I Am Active !!!</h2>
//     ) : (
//       <h2>I Am Not Active !!!</h2>
//     )}

//     <button
//       onClick={() => {
//         isActive !== !isActive;
//       }}
//     >
//       Hide Me
//     </button> */}
//     <Toggle />
//   </>,
//   document.getElementById("root")
// );

const nameList = ["Hitesh", "Pooja", "Samir", "Ajit"];

const empList2 = [
  { id: 1, name: "Gaurav" },
  { id: 2, name: "Chandan" },
  { id: 3, name: "Sachin" },
];

reactdom.render(
  <>
    {/* <h1>Gaurav</h1> */}

    {nameList.map((name, index) => {
      return <h1 key={index}>{name}</h1>;
    })}

    {empList2.map((emp) => {
      return <h1 key={emp.id}>{emp.name}</h1>;
    })}
  </>,
  document.getElementById("root")
);

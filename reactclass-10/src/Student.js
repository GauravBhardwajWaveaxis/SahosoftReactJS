const Student = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h1>Age: {props.age}</h1>
      <h1>Mobile Number: {props.mblNo}</h1>
      <h1>isActive: {props.isActive ? "Active" : "Not Active"}</h1>
      <h1>Function:{props.fun()} </h1>
      <h1>Children Data:{props.children} </h1>
    </>
  );
};

Student.defaultProps = {
  name: "Amit Kumar",
  age: 54,
  mobileno: 48743884,
  isActive: false,
  fun: () => {
    return <h3>This is Arrow Fun!</h3>;
  },
};
export default Student;

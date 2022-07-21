const StudentDetails = (props) => {
  console.log(props);
  return (
    <>
      <h2>This Is Student Functional Child Component.</h2>
      <h2>Student Detail:{`${props.name}`}</h2>
    </>
  );
};

export default StudentDetails;

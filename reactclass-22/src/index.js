import React from 'react'
import ReactDOM from 'react-dom'
import Student from './Student'
import myContext from './Context'

// const fName = createContext();

// const Student = () => {

// 	// let firstName = "Gaurav";

// 	// Object

// 	let fullName = {

// 		firstName: "Gaurav",
// 		lastName: "Bhardwaj"

// 	}


// // Array


// 	return (
// 		<>
// 			<h1>This is Student Component (Parent).</h1>

// 			{/* <fName.Provider value={firstName}>
// 				<Student1 />
// 			</fName.Provider> */}

// 			<fName.Provider value={fullName}>
// 				<Student1 />
// 			</fName.Provider>

// 		</>
// 	)
// }



// const Student1 = () => {
// 	return (
// 		<>
// 			<h1>This is Student 1 Component (Child 1).</h1>
// 			{/* <fName.Consumer>
// 				{
// 					(dataRecive) => { return <h2>Parent Data in Student 2 : {dataRecive}</h2> }
// 				}
// 			</fName.Consumer> */}
// 			<Student2 />
// 		</>
// 	)
// }



// const Student2 = () => {
// 	return (
// 		<>
// 			<h1>This is Student 2 Component (Child 2).</h1>

// 			<Student3 />

// 			{/* <fName.Consumer>

// 				{

// 					(parentData) => { return <h2>Parent Data in Student 3 : {parentData}</h2> }

// 				}

// 			</fName.Consumer> */}

// 			<fName.Consumer>
// 				{
// 					(dataRecived) => { return <h2>Parent Data in Student 3 : First Name : {dataRecived.firstName} and Last Name : {dataRecived.lastName}</h2> }
// 				}
// 			</fName.Consumer>

// 		</>
// 	)
// }



// const Student3 = () => {
// 	return (
// 		<>
// 			<h1>This is Student Component (Child 3).</h1>
// 		</>
// 	)
// }





// export default function Index() {
// 	return (
// 		<>
// 			<h1>
// 				Context in React JS (Context API)
// 			</h1>
// 			<Student></Student>
// 		</>
// 	)
// }


// ReactDOM.render(
// 	<>
// 		<Index />
// 	</>, document.getElementById("root")
// )


// Passing Two Variables


// const fName = createContext();

// const lName = createContext();

// const Student = () => {

// 	let firstName = "Gaurav";

// 	let lastName = "Bhardwaj";


// 	// Array


// 	return (
// 		<>
// 			<h1>This is Student Component (Parent).</h1>

// 			<fName.Provider value={firstName}>
// 				<lName.Provider value={lastName}>

// 					<Student1 />

// 				</lName.Provider>
// 			</fName.Provider>

// 		</>
// 	)
// }





// const Student1 = () => {
// 	return (
// 		<>
// 			<h1>This is Student 1 Component (Child 1).</h1>
// 			{/* <fName.Consumer>
// 				{
// 					(dataRecive) => { return <h2>Parent Data in Student 2 : {dataRecive}</h2> }
// 				}
// 			</fName.Consumer> */}
// 			<Student2 />
// 		</>
// 	)
// }



// const Student2 = () => {

// 	const firstName = useContext(fName);
// 	const lastName = useContext(lName);

// 	return (
// 		<>
// 			<h1>This is Student 2 Component (Child 2).</h1>

// 			<Student3 />

// 			<h2>{`My First Name is ${firstName} and my last name is ${lastName}`}</h2>





// 		</>
// 	)
// }




// const Student3 = () => {
// 	return (
// 		<>
// 			<h1>This is Student Component (Child 3).</h1>
// 			<fName.Consumer>
// 				{
// 					(firstName) => {
// 						return (
// 							<lName.Consumer>
// 								{
// 									(lastName) => {
// 										return <h3>{"My First Name is : " + firstName + " and my last name is : " + lastName}</h3>
// 									}
// 								}
// 							</lName.Consumer>
// 						)
// 					}
// 				}
// 			</fName.Consumer>
// 		</>
// 	)
// }









// export default function Index() {
// 	return (
// 		<>
// 			<h1>
// 				Context in React JS (Context API)
// 			</h1>
// 			<Student></Student>
// 		</>
// 	)
// }


// ReactDOM.render(
// 	<>
// 		<Index />
// 	</>, document.getElementById("root")
// )





// For Seprate Files






export default function Index() {
	return (
		<>
			<h1>Context in React JS (Context API).</h1>

			<myContext.Provider value={"Gaurav Bhardwaj"}>

				<Student />

			</myContext.Provider>
		</>
	)
}


ReactDOM.render(
	<>
		<Index />
	</>, document.getElementById("root")
)






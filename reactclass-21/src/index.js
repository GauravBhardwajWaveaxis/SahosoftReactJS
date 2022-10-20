import React, { createContext } from 'react'
import ReactDOM from 'react-dom'

// import HIgherOrderFun from './HIgherOrderFun';
// import HOme from './HOme';




// export default function Index() {


// 	const data = useCustomHook();
// 	console.log(useCustomHook());



// 	return (
// 		<>
// 			<h1>Welcome To : Custom Hook in ReactJS</h1>
// 			<h2>Count : {data.count}</h2>
// 			<button onClick={data.handleCountState} >Click Count</button>
// 		</>

// 	)
// }



// Second Way


// export default function Index() {


// 	const [count, handleCountState] = useCustomHook();

// 	console.log(useCustomHook());



// 	return (
// 		<>
// 			<h1>Welcome To : Custom Hook in ReactJS</h1>
// 			<h2>Count : {count}</h2>
// 			<button onClick={handleCountState} >Click Count</button>
// 		</>

// 	)
// }


// ReactDOM.render(
// 	<>
// 		<Index />

// 	</>, document.getElementById('root')
// )



// Higher order components or HOC in React JS



// export default function Index() {

// 	return (
// 		<>

// 			<h1>Higher Order Components Or HOC in ReactJS</h1>
// 			<HOme />

// 		</>

// 	)
// }

// ReactDOM.render(
// 	<>
// 		<Index />

// 	</>, document.getElementById('root')
// )



// Context in React JS (Context API)




const fName = createContext();


const Student = () => {


	let firstName = "Gaurav";


	return (
		<>
			<h1>This is Student Component (Parent).</h1>
			<fName.Provider value={firstName}>
				<Student1 />
			</fName.Provider>

		</>
	)
}



const Student1 = () => {


	return (
		<>
			<h1>This is Student 1 Component (Child).</h1>
			<Student2 />
		</>
	)
}



const Student2 = () => {
	return (
		<>

			<h1>This is Student 2 Component (Child).</h1>

			<Student3 />

			<fName.Consumer>
				{
					(parentData) => { return <h2>{parentData}</h2> }
				}
			</fName.Consumer>

		</>
	)
}



const Student3 = () => {
	return (
		<>
			<h1>This is Student 3 Component (Child).</h1>
		</>
	)
}



export default function Index() {

	return (
		<>

			<h1>Context in React JS (Context API)</h1>
			<Student />

		</>

	)
}

ReactDOM.render(
	<>
		<Index />

	</>, document.getElementById('root')
)

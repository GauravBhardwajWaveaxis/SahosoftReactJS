import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'


// export default function Index() {

// 	const Result = useState("Gau...");

// 	const name = Result[0];
// 	const setName = Result[1];

// 	const fullName = () => {
// 		setName("Gaurav Bhardwaj")
// 	}

// 	return (
// 		<>
// 			{console.log(Result)}
// 			<h1>Hooks in React JS</h1>
// 			<h2>useState Hook in React JS</h2>
// 			<h3>My Name is : {name}</h3>
// 			<button onClick={fullName}>Full Name </button>
// 		</>
// 	)
// }

// ReactDOM.render(
// 	<>
// 		<Index />
// 	</>, document.getElementById('root')
// )




// export default function Index() {


// 	// Array Destrcturing


// 	const [name, setName] = useState("Gau...");


// 	const fullName = () => {
// 		setName("Gaurav Bhardwaj")
// 	}

// 	return (
// 		<>

// 			<h1>Hooks in React JS</h1>
// 			<h2>useState Hook in React JS</h2>
// 			<h3>My Name is : {name}</h3>
// 			<button onClick={fullName}>Full Name </button>
// 		</>
// 	)
// }

// ReactDOM.render(
// 	<>
// 		<Index />
// 	</>, document.getElementById('root')
// )







// export default function Index() {

// 	// Set External Variable


// 	var shortName = "Gau..."


// 	const [name, setName] = useState(shortName);

// 	const [add, setAdd] = useState("Bangalore")


// 	const fullName = () => {
// 		setName("Gaurav Bhardwaj");
// 		setAdd("Saharanpur")
// 	}

// 	return (
// 		<>

// 			<h1>Hooks in React JS</h1>
// 			<h2>useState Hook in React JS</h2>
// 			<h3>My Name is : {name}</h3>
// 			<h3>My Address is : {add}</h3>
// 			<button onClick={fullName}>Full Name </button>
// 		</>
// 	)
// }

// ReactDOM.render(
// 	<>
// 		<Index />
// 	</>, document.getElementById('root')
// )





// export default function Index() {

// 	// Object

// 	const Employee = {
// 		id: 10,
// 		name: "Gau...",
// 		city: "Ban..."
// 	}

// 	const [empObj, setEmpData] = useState(Employee)


// 	const fullName = () => {

// 		// setEmpData({
// 		// 	id: 10,
// 		// 	name: "Gaurav Bhardwaj",
// 		// 	city: "Bangalore"
// 		// })

// 		//=========Preferablable Way=========//

// 		setEmpData((state) => {
// 			console.log(state);
// 			return {
// 				id: 10,
// 				name: "Gaurav Bhardwaj",
// 				// city: "Bangalore"
// 				city: state.city
// 			}
// 		});


// 	}

// 	return (
// 		<>

// 			<h1>Hooks in React JS</h1>
// 			<h2>useState Hook in React JS</h2>
// 			<h3>{`ID : ${empObj.id} `}</h3>
// 			<h3>{`Name : ${empObj.name} `}</h3>
// 			<h3>{`City : ${empObj.city} `}</h3>

// 			<button onClick={fullName}>Full Name </button>
// 		</>
// 	)
// }

// ReactDOM.render(
// 	<>
// 		<Index />
// 	</>, document.getElementById('root')
// )


// Array


// export default function Index() {

// 	const empList = ['Gaurav', 'Raj', 'Rohit', 'Manoj']

// 	const [empObj, setEmpData] = useState(empList)


// 	const fullName = () => {

// 		setEmpData((state) => {
// 			console.log(state);
// 			return [
// 				'Gaurav', 'Raj'
// 			]
// 		})

// 	}

// 	return (
// 		<>

// 			<h1>Hooks in React JS</h1>
// 			<h2>useState Hook in React JS</h2>
// 			<h3>{empObj.map(name => name)}</h3>


// 			<button onClick={fullName}>Full Name </button>
// 		</>
// 	)
// }

// ReactDOM.render(
// 	<>
// 		<Index />
// 	</>, document.getElementById('root')
// )



// export default function Index() {


// 	const [count, setCount] = useState(0)

// 	const fullName = () => {

// 		setCount(count + 1)

// 	}

// 	// Try Arraw Function

// 	return (
// 		<>

// 			<h1>Hooks in React JS</h1>
// 			<h2>useState Hook in React JS</h2>
// 			<h3>Count : {count}</h3>


// 			<button onClick={fullName}>Count</button>
// 		</>
// 	)
// }

// ReactDOM.render(
// 	<>
// 		<Index />
// 	</>, document.getElementById('root')
// )





// useEffect Hook



// export default function Index() {


// 	const [count, setCount] = useState(0)

// 	const [count1, setCount1] = useState(100)

// 	const fullName = () => {

// 		setCount(count + 1)

// 	}

// 	// useEffect(() => {
// 	// 	alert('useEffect Fired !')
// 	// })

// 	const count2 = () => {
// 		setCount1(count1 + 1)
// 	}

// 	useEffect(() => {
// 		alert('useEffect Fired !')
// 	}, [count])

// 	return (
// 		<>

// 			<h1>Hooks in React JS</h1>
// 			<h2>useState Hook in React JS</h2>
// 			<h3>Count : {count}</h3>
// 			<h3>Count 2 : {count1}</h3>


// 			<button onClick={fullName}>Count</button>
// 			<button onClick={count2}>Count 2</button>
// 		</>
// 	)
// }

// ReactDOM.render(
// 	<>
// 		<Index />
// 	</>, document.getElementById('root')
// )





export default function Index() {


	const [count, setCount] = useState(0)

	const [count1, setCount1] = useState(100)

	const fullName = () => {

		setCount(count + 1)

	}

	// useEffect(() => {
	// 	alert('useEffect Fired !')
	// })

	const count2 = () => {
		setCount1(count1 + 1)
	}

	const getAlertData = () => {
		alert("Alert Fired By Function Externally.")
	}


	// useEffect(() => {
	// 	getAlertData();

	// }, [count])


	// useEffect(() => {
	// 	getAlertData();

	// }, [count > 5])


	// useEffect(() => {
	// 	if (count > 5) {
	// 		getAlertData();
	// 	}
	// }, [count])


	useEffect(() => {
		if (count > 5) {
			getAlertData();
		} else if (count1 > 102) {
			getAlertData();
		}
	}, [count, count1])




	return (
		<>

			<h1>Hooks in React JS</h1>
			<h2>useState Hook in React JS</h2>
			<h3>Count 1 : {count}</h3>
			<h3>Count 2 : {count1}</h3>


			<button onClick={fullName}>Count</button>
			<button onClick={count2}>Count 2</button>
		</>
	)
}

ReactDOM.render(
	<>
		<Index />
	</>, document.getElementById('root')
)
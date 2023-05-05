import React from "react";
import ReactDOM from "react-dom/client";


// const buttonEle = (
// 	<button>Click Me</button>
// )


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// 	<>
// 		<h2>React Keys</h2>
// 		{buttonEle}
// 	</>
// )



// ----------------------------------------------------

// Array

// class Fruits extends React.Component {

// 	fruitList = ["Apple", "Banana", "Mango", "Kiwifruit", "Orange", "Watermelon", "Pineapple"]

// 	render() {
// 		return (
// 			<>
// 				{this.fruitList.map((fruitsList, index) => { return <ul key={index}><li>{fruitsList}</li></ul> })}
// 			</>
// 		)
// 	}
// }



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// 	<>
// 		<h2>React Keys !!!</h2>
// 		<Fruits />
// 	</>
// )


// -------------------------------------------------


// Nested Array


// class Fruits extends React.Component {

// 	// fruitList = ["Apple", "Banana", "Mango", "Kiwifruit", "Orange", "Watermelon", "Pineapple", ["Potato", "Capsicum", "Turnip", "Tomato", "Green Peas", "Ginger", "Onion", "Cauliflower", "Garlic"]]

// 	fruitList = ["Apple", "Banana", "Mango", "Kiwifruit", "Orange", "Watermelon", "Pineapple", [10, 15, 25, 50, 30, 60, 50,]]

// 	render() {
// 		return (
// 			<>

// 				{/* {this.fruitList.map((fruitsList, index) => { return console.log(fruitsList) })} */}

// 				{this.fruitList.map((fruitsList, index) => {
// 					return (
// 						<>{
// 							typeof (fruitsList === "string" ? fruitsList : "Price")
// 						}</>
// 					)
// 				})}


// 				{/* {this.fruitList.map((fruitsList, index) => { return <ul key={index}><li>{fruitsList}</li></ul> })} */}
// 			</>
// 		)
// 	}
// }



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// 	<>
// 		<h2>React Keys !!!</h2>
// 		<Fruits />
// 	</>
// )



// -----------------------------------------------




// const Item = () => {
// 	return (
// 		<>
// 		</>
// 	)
// }


class Elements extends React.Component {
	render() {
		const list = this.props.numberList;
		console.log(list);
		return (
			<>
				<li>{list}</li>
			</>
		)
	}
}


const numList = [34, 56, 2, 56, 2, 56, 34]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<h2>React Keys !!!</h2>
		<Elements numberList={numList} />
	</>
)












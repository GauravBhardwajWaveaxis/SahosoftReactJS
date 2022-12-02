// import React from "react";
// import { Component } from "react";
// import ReactDOM from 'react-dom'
// import ExternalCss from "./ExternalCss";


// class Welcome extends Component {

// 	styleObj = {
// 		color: 'red',
// 		fontWeight: 'bold'
// 	}

// 	styleObj2 = {
// 		fontSize: '25px',
// 		fontWeight: 'bold',
// 		backgroundColor: 'red'
// 	}



// 	render() {
// 		return (
// 			<>

// 				{/* Inline CSS */}

// 				<h2 style={{ color: 'green', backgroundColor: "yellow", textAlign: "center" }}>Hello Students.Good Morning</h2>
// 				<h2 style={this.styleObj}>React Style Concepts</h2>

// 				<h2 style={{ color: 'yellowgreen', fontStyle: 'italic', ...this.styleObj2 }}>My Name is Gaurav Bhardwaj. I am from Saharanpur.</h2>
// 			</>
// 		)
// 	}
// }


// ReactDOM.render(
// 	<>
// 		<h1>Welcome</h1>
// 		<Welcome />
// 		<ExternalCss />
// 	</>, document.getElementById("root")
// )







// class Welcome extends Component {
// 	constructor() {
// 		super()
// 		this.state = {
// 			isActive: true
// 		}
// 	}


// 	toggleColor = () => {
// 		this.setState({
// 			isActive: !this.state.isActive
// 		})
// 	}

// 	render() {

// 		this.styleObj = {
// 			color: 'white',
// 			backgroundColor: this.state.isActive ? "red" : "green",
// 		}

// 		// if (this.state.isActive) {
// 		// 	this.styleObj.backgroundColor = 'red';
// 		// } else {
// 		// 	this.styleObj.backgroundColor = 'green';
// 		// }


// 		return (
// 			<>

// 				<button style={this.styleObj} onClick={this.toggleColor}>{(this.state.isActive) ? 'Red' : 'Green'}</button>
// 			</>
// 		)
// 	}
// }


// ReactDOM.render(
// 	<>
// 		<Welcome />

// 	</>, document.getElementById("root")
// )

// import './style.css'

// class Welcome extends Component {

// 	render() {
// 		return (
// 			<>
// 				<h2><a href="https://www.sahosoft.com/" target="_blank" rel="noreferrer">Go To Sahosoft</a></h2>

// 			</>
// 		)
// 	}
// }


// ReactDOM.render(
// 	<>
// 		<Welcome />

// 	</>, document.getElementById("root")
// )

// import React from "react";
// import ReactDOM from 'react-dom'
// import style from './ModuleCss/index.module.css';

// import Button from "./button";


// function Welcome() {
// 	return (
// 		<>
// 			{/* <h2 className="one two">Welcome To Sahosoft Classes.</h2> */}

// 			<button className={style.one}>Index Button</button>

// 			<Button style={style.one} />
// 		</>
// 	)
// }


// ReactDOM.render(
// 	<>
// 		<Welcome />

// 	</>, document.getElementById("root")
// )



import React from "react";
import ReactDOM from 'react-dom'
import './scss/index.scss'



function Welcome() {
	return (
		<>
			<h2 className="one">Welcome To Sahosoft Classes.</h2>
			<h2 className="two">Example for SCSS style.</h2>


		</>
	)
}


ReactDOM.render(
	<>
		<Welcome />

	</>, document.getElementById("root")
)




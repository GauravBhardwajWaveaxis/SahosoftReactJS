// import React from 'react';
// import ReactDOM from 'react-dom';
// import './scss/index.scss';
// import style from './style.module.css'
// import cx from 'classnames'


// function Index() {
// 	return (
// 		<>

// 			{/* <h2 className='one'>Welcome, Good Morning.</h2>
// 			<h2 className='two'>Sahasoft Classes</h2> */}


// 			{/* <h2 className={style.font}>Welcome, Good Morning.</h2> */}

// 			<h2 className={`${style.font} ${style.fontColor}`}>Welcome, Good Morning.</h2>

// 			<h2 className={cx(style.font, style.fontColor)}>Sahasoft Classes</h2>

// 			<h2 className={cx(style.fontColor, { [style.backColor]: true })}>CSS With Classname</h2>

// 		</>
// 	)
// }




// ReactDOM.render(
// 	<>
// 		<Index />
// 	</>, document.getElementById('root')

// )


import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import style from './style.module.css'
import cx from 'classnames'


// function Button({ type, text }) {
// 	console.log(type);
// 	return (
// 		<>
// 			<button className={cx(style.font, style[type])}>{text}</button>
// 		</>
// 	)
// }


// function Index() {
// 	return (
// 		<>
// 			<Button type='save' text="Save Data" />
// 			<Button type='cancel' text="Cancel Data" />
// 		</>
// 	)
// }

// ReactDOM.render(
// 	<>
// 		<Index />
// 	</>, document.getElementById('root')

// )




//-----------------BootStrap----------------//


// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import 'bootstrap/dist/css/bootstrap.min.css';


// function ButtonExamples() {
// 	return (
// 		<>
// 			<Button variant="primary">Primary</Button>{' '}
// 			<Button variant="secondary">Secondary</Button>{' '}
// 			<Button variant="success">Success</Button>{' '}
// 			<Button variant="warning">Warning</Button>{' '}
// 			<Button variant="danger">Danger</Button>{' '}
// 			<Button variant="info">Info</Button>{' '}
// 			<Button variant="light">Light</Button>{' '}
// 			<Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
// 		</>
// 	);
// }


// function BasicExample() {
// 	return (
// 		<Card style={{ width: '18rem' }}>
// 			{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
// 			<Card.Body>
// 				<Card.Title>Card Title</Card.Title>
// 				<Card.Text>
// 					Some quick example text to build on the card title and make up the
// 					bulk of the card's content.
// 				</Card.Text>
// 				<Button variant="primary">Go somewhere</Button>
// 			</Card.Body>
// 		</Card>
// 	);
// }


// function Index() {
// 	return (
// 		<>
// 			<h1>Sahosoft</h1>
// 			<ButtonExamples />
// 			<BasicExample />
// 		</>
// 	)
// }

// ReactDOM.render(
// 	<>
// 		<Index />
// 	</>, document.getElementById('root')

// )



import React from 'react'
import HIgherOrderFun from './HIgherOrderFun'

function HOme(props) {
	return (
		<>
			<h1>This is HOme Component.</h1>
			<h3>Name:{props.name}</h3>
		</>

	)
}

export default HIgherOrderFun(HOme);

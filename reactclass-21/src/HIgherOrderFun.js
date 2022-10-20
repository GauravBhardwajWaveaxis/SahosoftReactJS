import React from 'react'

export default function HIgherOrderFun(HOmeChildComponent) {


	const newComponent = () => {
		return (
			<>
				<h1>This is HIgherOrderFun Component.</h1>
				<div style={{ backgroundColor: 'red' }}>
					<HOmeChildComponent name="Gaurav" />
				</div>
			</>

		)
	}
	return newComponent;

}


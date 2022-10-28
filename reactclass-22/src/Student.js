import React, { useContext } from 'react'
import myContext from './Context';

export default function Student() {

	const stdName = useContext(myContext);
	console.log(stdName);

	return (
		<>
			<Student />
		</>

	)
}

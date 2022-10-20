import React, { useState } from 'react'

// export default function useCustomHook() {

// 	const [count, setCount] = useState(0);


// 	const handleCountState = () => {
// 		setCount(count + 1);
// 	}

// 	return {
// 		count, handleCountState
// 	}

// }



// Array


export default function useCustomHook() {

	const [count, setCount] = useState(0);


	const handleCountState = () => {
		setCount(count + 1);
	}

	return [

		count, handleCountState
	]


}

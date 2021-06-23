import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

const useField = (type) => {
	const [value, setValue] = useState('')

	const onChange = (e) => {
		setValue(e.target.value)
	}

	const reset = () => {
		console.log('click')
		console.log(value)
		setValue('')
	}

	return {
		type,
		value,
		onChange,
		reset,
	}
}

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
)

export { useField }

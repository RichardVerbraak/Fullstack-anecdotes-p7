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
		setValue('')
	}

	// This object will only be destructured for the inputFields
	// This is done so reset isn't given as a prop to the <input/>
	const inputFields = { type, value, onChange }

	return {
		inputFields,
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

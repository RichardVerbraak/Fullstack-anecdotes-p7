import React from 'react'
import { useField } from '../index'

// useField hook basically creates a separate state per field
// The hook returns everything like type, value, onChange handler and a reset button all inside an object
// The input fields will be "filled in" with these values via destructuring (type prop will be set to type, type={type} or just shorthand, type)

const CreateNew = ({ addNew }) => {
	const content = useField('text')
	const author = useField('text')
	const info = useField('text')

	const handleSubmit = (e) => {
		e.preventDefault()

		const anecdote = {
			content: content.inputFields.value,
			author: author.inputFields.value,
			info: info.inputFields.value,
			votes: 0,
			id: (Math.random() * 10000).toFixed(0),
		}

		addNew(anecdote)
	}

	return (
		<div>
			<h2>create a new anecdote</h2>
			<form onSubmit={handleSubmit}>
				<div>
					content
					<input name='content' {...content.inputFields} />
				</div>
				<div>
					author
					<input name='author' {...author.inputFields} />
				</div>
				<div>
					url for more info
					<input name='info' {...info.inputFields} />
				</div>
				<button type='submit'>create</button>
				<button
					type='button'
					onClick={() => {
						content.reset()
						author.reset()
						info.reset()
					}}
				>
					reset
				</button>
			</form>
		</div>
	)
}

export default CreateNew

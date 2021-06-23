import React from 'react'
import { useField } from '../index'

const CreateNew = ({ addNew }) => {
	const content = useField('text')
	const author = useField('text')
	const info = useField('text')

	const handleSubmit = (e) => {
		e.preventDefault()

		const anecdote = {
			content: content.value,
			author: author.value,
			info: info.value,
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
					<input
						name='content'
						type={content.type}
						value={content.value}
						onChange={content.onChange}
					/>
				</div>
				<div>
					author
					<input
						name='author'
						type={author.type}
						value={author.value}
						onChange={author.onChange}
					/>
				</div>
				<div>
					url for more info
					<input
						name='info'
						type={info.type}
						value={info.value}
						onChange={info.onChange}
					/>
				</div>
				<button>create</button>
			</form>
			<button
				onClick={() => {
					content.reset()
					author.reset()
					info.reset()
				}}
			>
				reset
			</button>
		</div>
	)
}

export default CreateNew

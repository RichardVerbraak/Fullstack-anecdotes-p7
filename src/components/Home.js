import React, { useState, useEffect } from 'react'

import About from './About'
import Anecdotes from './Anecdotes'
import Anecdote from './Anecdote'
import CreateNew from './CreateNew'
import Menu from './Menu'

const Home = ({ location, match }) => {
	const page = location.pathname || '/'
	const id = match.params.id

	const [notification, setNotification] = useState('')
	const [anecdote, setAnecdote] = useState({})

	const [anecdotes, setAnecdotes] = useState([
		{
			content: 'If it hurts, do it more often',
			author: 'Jez Humble',
			info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
			votes: 0,
			id: '1',
		},
		{
			content: 'Premature optimization is the root of all evil',
			author: 'Donald Knuth',
			info: 'http://wiki.c2.com/?PrematureOptimization',
			votes: 0,
			id: '2',
		},
	])

	const addNew = (anecdote) => {
		setAnecdotes([...anecdotes, anecdote])
		setNotification(
			`a new anecdote ${anecdote.content} by ${anecdote.author} created`
		)
		setTimeout(() => {
			setNotification('')
		}, 5000)
	}

	useEffect(() => {
		if (id) {
			const foundAnecdote = anecdotes.find((anecdote) => anecdote.id === id)
			setAnecdote(foundAnecdote)
		}
	}, [id, anecdotes])

	const vote = (id) => {
		const anecdote = anecdotes.find((anecdote) => anecdote.id === id)

		const voted = {
			...anecdote,
			votes: anecdote.votes + 1,
		}

		setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)))
	}

	return (
		<div>
			<h1>Software anecdotes</h1>
			<Menu />

			{notification && <p>{notification}</p>}
			{id ? (
				<Anecdote anecdote={anecdote} />
			) : (
				<Anecdotes anecdotes={anecdotes} />
			)}

			{page === '/about' && <About />}
			{page === '/create' && <CreateNew addNew={addNew} />}
		</div>
	)
}

export default Home

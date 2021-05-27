import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import About from './About'
import Anecdotes from './Anecdotes'
import CreateNew from './CreateNew'
import Menu from './Menu'

const Home = ({ location }) => {
	const [page, setPage] = useState('/')
	const [notification, setNotification] = useState('')

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

	useEffect(() => {
		setPage(location.pathname)
	}, [location.pathname])

	const addNew = (anecdote) => {
		anecdote.id = (Math.random() * 10000).toFixed(0)
		setAnecdotes(anecdotes.concat(anecdote))
	}

	const anecdoteById = (id) => anecdotes.find((a) => a.id === id)

	const vote = (id) => {
		const anecdote = anecdoteById(id)

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

			{page === '/' && <Anecdotes anecdotes={anecdotes} />}
			{page === '/about' && <About />}
			{page === '/create' && <CreateNew addNew={addNew} />}
		</div>
	)
}

export default Home

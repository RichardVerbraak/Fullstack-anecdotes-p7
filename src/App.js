import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
	return (
		<Switch>
			<Route path='/' component={Home} />
			<Route path='/anecdotes' />
			<Route path='/create' />
			<Route path='/about' />
		</Switch>
	)
}

export default App

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'

const App = () => {
	return (
		<div>
			<Switch>
				<Route path='/' component={Home} />
				<Route path='/anecdotes' />
				<Route path='/create' />
				<Route path='/about' />
			</Switch>
			<Footer />
		</div>
	)
}

export default App

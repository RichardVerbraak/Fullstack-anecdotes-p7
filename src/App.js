import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'

const App = () => {
	return (
		<div>
			<Switch>
				<Route path='/anecdotes/:id' component={Home} />
				<Route path='/' component={Home} />
			</Switch>
			<Footer />
		</div>
	)
}

export default App

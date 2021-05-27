import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import CreateNew from './components/CreateNew'
import About from './components/About'

const App = () => {
	return (
		<div>
			<Switch>
				<Route path='/' component={Home} />
				<Route path='/create' component={CreateNew} />
				<Route path='/about' component={About} />
			</Switch>
			<Footer />
		</div>
	)
}

export default App

import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import '../containers/App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'



class App extends Component {
	constructor(){
		super()
		this.state = {
			robots : [],
			searchfield: ''
		}
	}
	onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value})
		
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users =>this.setState({robots : users}));
	}

	render() {
		const filterRobot = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		});
		return !this.state.robots ?
			<h1>Loading</h1> :
			<div className='tc'>
				<h1 className='f1'>Robofriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					
						<CardList robots={filterRobot}/>
				</Scroll>
			</div>
		
	}
}
export default App;
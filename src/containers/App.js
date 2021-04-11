import React, { Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			Monsters: [],
			searchField: ''
		}
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> {
			return response.json();
		})
		.then(users=> {
			this.setState({ Monsters: users})
		});
	}
	onSearchChange = (event) => {
		this.setState({searchField : event.target.value});
	}
	render (){
		const {Monsters, searchField} = this.state;
		const filteredMonsters =Monsters.filter(monster => {
			return monster.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return !Monsters.length ? 
			<h2 className='tc white'>Monsters approaching ...... </h2> :
			(
				<div className='tc'>
					<h1 className='f1'>Monsterverse</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList Monsters={filteredMonsters}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);	
	}
}
export default App;
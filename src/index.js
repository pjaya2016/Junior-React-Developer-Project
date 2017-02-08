import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search.js';

class App extends Component{
	render(){
		return(
			<Search />
			);
	}
}

ReactDOM.render(<App />, document.getElementById('app'), () => {
	console.log('Successfully connected to react');
})
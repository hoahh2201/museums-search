import React from 'react';
import museumtale from '../api/museumtale';
import SearchBar from './SearchBar';
import Museumlist from './Museumlist';
 
class App extends React.Component {
	state = { 
		museums: []
	}

	componentDidMount = () => {
		let component = this;
		museumtale.get('/search/',{
			params: { key: 'Angkor'}
		}).then(function(response){
			console.log(response.data.product_list);
			const museums = response.data.product_list;
			component.setState({museums});
		}) 
	}

	onSearchSubmit = async (term) => {
		// console.log(term);
		const response = await museumtale.get('/search/', {
			params: { key: term}
		})
	 
		this.setState({museums : response.data.product_list });
	
	}

	render () {
		return (

			<div className="ui container" style={{ marginTop: '10px'}}>
				
				<SearchBar onSubmit={this.onSearchSubmit} />
				<Museumlist museums={this.state.museums} />

			</div>
		);
	}
} 


export default App;
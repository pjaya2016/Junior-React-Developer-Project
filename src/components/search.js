import React,{Component} from 'react';
import {Data} from './data';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class Search extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			language: '',
			sort : '',
			order : '', 
			obj : [],
			current_page : 1,
			records_per_page : 3
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.updateInput = this.updateInput.bind(this);
		this.selectInput = this.selectInput.bind(this);
		this.selectASC = this.selectASC.bind(this);
		this.selectSort = this.selectSort.bind(this);

	}

	onSubmit(){
		Data(this.state.username,this.state.language,this.state.order,this.state.sort).then((res)=>{			
			this.setState({
				obj : res.data.items
			})
		});
	}

	updateInput(e){
		this.setState({
			username : e.target.value
		})
	}


	selectInput(e){
		this.setState({
			language : e.target.value
		})
	}


	selectASC(e){
		if(this.state.order !== 'ASC'){
			this.setState({
				order : "ASC"
			})
		}else{
			this.setState({
				order : 'DESC'
			})
		}
	}

	selectSort(e){
		this.setState({
			sort : e.target.value
		})
	}

	render(){
		return (<div>
			<h3>Search</h3>
			<input id="#idInput" type="text" name="search" value={this.state.value} onChange={this.updateInput} />
			<input type="submit" name="submit" value="search" onClick={ this.onSubmit }/>
			<br />
			<span>Language Selected : {this.state.language}</span>
			<select onChange={this.selectInput}>
			<option value=""></option>
			<option value="PHP">PHP</option>
			<option value="NODE">NODE</option>
			</select>
			<span>Sort Selected : {this.state.sort}</span>

			<select onChange={this.selectSort}>
			<option value=""></option>
			<option value="stars">Stars</option>
			<option value="forks">Forks</option>
			<option value="updated">Updated</option>
			</select>

			ASC Order : <input type="checkbox" name="ASC" 
			value="ASC" onChange={this.selectASC} /> 		


			<BootstrapTable
			data={ this.state.obj } pagination>
			<TableHeaderColumn dataField='id'>ID</TableHeaderColumn>     
			<TableHeaderColumn dataField='login' isKey>Login</TableHeaderColumn>
			<TableHeaderColumn dataField='url'>Url</TableHeaderColumn>
			</BootstrapTable>
			</div>
			);
	}
}

export  default  Search;




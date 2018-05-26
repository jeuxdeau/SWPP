import React, { Component } from 'react'
import { Jumbotron, Alert, Button } from 'reactstrap'
import DetailCompanionBlock from '../../atoms/DetailCompanionBlock'

export default class DetailPage extends Component {
	componentDidMount() {
		this.props.get_companion_list()
	}

	render() {
		const companion_list = this.props.companion_list
		const name = this.props.match.params.name
		const errors = this.props.errors || {}
		
		if(companion_list) {
			const companion = companion_list.find((element) => (element.name == name))
			return (
				<Jumbotron className="container">
					<h1>
						VASELINE <Button size="sm" outline color="primary" onClick={()=>this.onSignoutBtnClick()}>Logout</Button>
					</h1>
					{
						errors.get_list_errors?
							<Alert color="danger">
								{errors.get_list_errors}
							</Alert>
							:""
					}
					<DetailCompanionBlock companion={companion} />
				</Jumbotron>
			)
		}
		else {
			return (
				<Jumbotron className="container"> 
				</Jumbotron>
			)
		}
	}
}
import React, { Component } from 'react'
import { Jumbotron, Alert, Button, CardDeck, Container, Row, Col } from 'reactstrap'
import CompanionBlock from '../../atoms/CompanionBlock'

export default class ListPage extends Component {
	onSignoutBtnClick() {
		this.props.post_signout()
	}
	componentDidMount() {
		this.props.get_companion_list()
		this.props.get_companion_address_list()
	}

	render() {
		const companion_list = this.props.companion_list
		const companion_address_list = this.props.companion_address_list
		const errors = this.props.errors || {}
		if(companion_list && companion_address_list) {
			console.log(companion_address_list[0].user.profile)
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
					<CardDeck>
						{companion_list.map((companion, index) =>
							{ return 	(
											<Col xs="4">
											<CompanionBlock companion={companion}
															key={index} first_address={companion_address_list[index].user.profile.first_address} second_address={companion_address_list[index].user.profile.second_address} />
											<p />
											</Col>
										)
										//(<ul key={companion.name}>{companion.name}
										//	<li>age : {companion.age}</li>
										//	<li>sex : {companion.sex}</li>
										//</ul>)
							})}
					</CardDeck>
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

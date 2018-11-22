import React, {Component} from 'react'
import { Alert, Button, Jumbotron, Form, InputGroup, InputGroupAddon, Input } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../pages/colorlib.css'

import TextInput from '../../atoms/TextInput'

export default class SigninPage extends Component {
	state = {
		username: '',
		password: ''
	}

	handleInputChange = (event) => {
		const target = event.target
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name

		this.setState({
			[name]: value
		})
	}

	onSubmit = (event) => {
		event.preventDefault()
		this.props.onSubmit(this.state.username, this.state.password)
	}

	render() {
		const errors = this.props.errors || {}
		return (
			<div class="login-page">
			  <div class="form">
			    <form class="login-form" onSubmit={this.onSubmit}>
				<img src="https://raw.githubusercontent.com/jeuxdeau/Vaseline/master/frontend/src/containers/images/logo_signin.png" />
				{
					errors.non_field_errors?
 					<Alert color="warning">
 						{errors.non_field_errors}
 					</Alert>: ""
 				}
				<TextInput name="username" placeholder="id" error={errors.username} onChange={this.handleInputChange} />
				<TextInput name="password" placeholder="password" error={errors.password} type="password" onChange={this.handleInputChange} />
				<button type="submit">login</button>
			    <p class="message">아직 계정이 없으신가요? <a href="/signup">계정 만들기</a></p>
			    </form>
			  </div>
			</div>
		)
	}
}

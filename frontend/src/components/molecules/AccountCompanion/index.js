import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Alert, Card, CardDeck, Button, CardImg, CardTitle, CardText, CardBody, Form } from 'reactstrap'
import TextInput from '../../atoms/TextInput'
import  MultiSelectReact  from 'multi-select-react'

const desired_mate_breed_options = [
	{label:'믹스', value:'mix'},
	{label:'닥스훈트', value:'dachshund'},
	{label:'달마시안', value:'dalmatian'},
	{label:'리트리버', value:'retriever'}]

const desired_mate_breed_options2 = [
        {label:'믹스', value:'mix'},
        {label:'닥스훈트', value:'dachshund'},
        {label:'달마시안', value:'dalmatian'}]

class AccountCompanion extends Component {
	onSignoutBtnClick() {
                this.props.post_signout()
        }
	componentDidMount() {
		this.props.get_companion_list()
	}
	constructor(props) {
                super(props)
                this.state = {
                        username: undefined,
                        password: undefined,
                        nickname: undefined,
                        first_address: undefined,
                        second_address: undefined,
			age: undefined,
                        gender: undefined,
                        email: undefined,
			desired_mate_breed : [],
                }
        }
        handleInputChange = (event) => {
                const target = event.target
                const value = target.type === 'checkbox' ? target.checked : target.value
                const name = target.name
		console.log(target)
                this.setState({
                        [name]: value
                })
        }
	optionClicked(optionsList) {
        	this.setState({ desired_mate_breed: optionsList })
  	}
  	selectedBadgeClicked(optionsList) {
        	this.setState({ desired_mate_breed: optionsList })
  	}

		render() {
			const selectedOptionsStyles = {
        			color: "#3c763d",
            			backgroundColor: "#dff0d8"
			}
        		const optionsListStyles = {
            			backgroundColor: "#dff0d8",
            			color: "#3c763d"
        		}
			const companion_id = this.props.match.params.id
			const companion_list = this.props.companion_list
			console.log(companion_id+"!!!")
			console.log(this.props)
                	const errors = this.props.errors || {}
			if(companion_list){
				const companion = companion_list[companion_id-1]
				console.log(companion.desired_mate)
				console.log(this.state.desired_mate_breed)
                		return (
					<Jumbotron className="container">
	                                <h1>
        	                                VASELINE <Button size="sm" outline color="primary" onClick={()=>this.onSignoutBtnClick()}>Logout</Button>
                	                </h1>
					<Form onSubmit={this.onSubmitPassword}>
                                        {
                                                errors.non_field_errors?
                                                        <Alert color="danger">
                                                                {errors.non_field_errors}
                                                        </Alert>: ""
                                        }
                                        <CardDeck>
                                        <TextInput name="name" label="name" error={errors.name} onChange={this.handleInputChange} placeholder={companion.name}/>
					<TextInput name="sex" label="sex" error={errors.name} onChange={this.handleInputChange} placeholder={companion.sex}/>
					<TextInput name="birth_year" label="birth_year" error={errors.name} onChange={this.handleInputChange} placeholder={companion.birth_year}/>
					<TextInput name="breed" label="breed" error={errors.name} onChange={this.handleInputChange} placeholder={companion.breed}/>
					<TextInput name="size" label="size" error={errors.name} onChange={this.handleInputChange} placeholder={companion.size}/>
					<CardDeck>
					<h2>Desired_mate</h2>
					<CardDeck>
					<h3>Personality</h3>
					<CardDeck>
					<TextInput name="affinity_with_human" label="affinity_with_human" error={errors.name} onChange={this.handleInputChange} placeholder={companion.desired_mate.personality.affinity_with_human}/>
					<TextInput name="affinity_with_dog" label="affinity_with_dog" error={errors.name} onChange={this.handleInputChange} placeholder={companion.desired_mate.personality.affinity_with_dog}/>
					<TextInput name="shyness" label="shyness" error={errors.name} onChange={this.handleInputChange} placeholder={companion.desired_mate.personality.shyness}/>
					<TextInput name="activity" label="activity" error={errors.name} onChange={this.handleInputChange} placeholder={companion.desired_mate.personality.activity}/>
					<TextInput name="loudness" label="loudness" error={errors.name} onChange={this.handleInputChange} placeholder={companion.desired_mate.personality.loudness}/>
					<TextInput name="aggression" label="aggression" error={errors.name} onChange={this.handleInputChange} placeholder={companion.desired_mate.personality.aggression}/>
					<TextInput name="etc" label="etc" error={errors.name} onChange={this.handleInputChange} placeholder={companion.desired_mate.personality.etc}/>
						
					<MultiSelectReact 
      						options={this.state.desired_mate_breed}
      						optionClicked={this.optionClicked.bind(this)}
      						selectedBadgeClicked={this.selectedBadgeClicked.bind(this)}
      						selectedOptionsStyles={selectedOptionsStyles}
      						optionsListStyles={optionsListStyles} />
    						

					<TextInput name="name" label="name" error={errors.name} onChange={this.handleInputChange} placeholder={companion.name}/>
                                        <TextInput name="name" label="name" error={errors.name} onChange={this.handleInputChange} placeholder={companion.name}/>
                                        <TextInput name="name" label="name" error={errors.name} onChange={this.handleInputChange} placeholder={companion.name}/>
                                        <TextInput name="name" label="name" error={errors.name} onChange={this.handleInputChange} placeholder={companion.name}/>
                                        <TextInput name="name" label="name" error={errors.name} onChange={this.handleInputChange} placeholder={companion.name}/>
                                        <Button type="submit" color="danger" size="lg">
                                                Update Companion
                                        </Button>
					</CardDeck>
					</CardDeck>
					</CardDeck>
                                        </CardDeck>
                                </Form>

					<Card>
                                		<CardImg        top width="100%"
                                        		src="http://www.petguide.com/wp-content/uploads/2013/05/cute-dog-names-12.jpg"
                                         		alt="Card image cap" />
                                		<CardBody>
                                        		<CardTitle>{companion.name}</CardTitle>
                                        		<CardText>age : {companion.age}</CardText>
                                 		       	<CardText>sex : {companion.sex}</CardText>
                                		</CardBody>
                        		</Card>
					</Jumbotron>
				)}
			else {
                        return (
                                <Card>
                                        <CardTitle>{1}</CardTitle>
                                        <CardText>not : {2}</CardText>
                                        <CardText>start : {3}</CardText>
                                </Card>
                        )}
		}
}
export default AccountCompanion

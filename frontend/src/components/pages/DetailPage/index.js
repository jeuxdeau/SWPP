import React, { Component } from 'react'
import { Jumbotron, Alert, Button, Modal } from 'reactstrap'
import DetailCompanionBlock from '../../atoms/DetailCompanionBlock'
import Sidebar from '../../molecules/Sidebar'
import MessageApp from '../../atoms/MessageApp'

export default class DetailPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			messageAppActivated: false,
		}
	}

	onSendMessageBtnClick() {
		this.setState({
			messageAppActivated: !this.state.messageAppActivated
		})
	}

	onSendLikeBtnClick(sender, receiver) {
		this.props.post_like(sender, receiver)
	}

	onSendProposalBtnClick(sender, receiver) {
		this.props.post_proposal(sender, receiver)
	}

	onSignoutBtnClick() {
		this.props.post_signout()
	}

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
				<div>
				<Jumbotron className="container">
					<h1>
						VASELINE 
						<Button size="sm" outline color="primary" onClick={()=>this.onSignoutBtnClick()}>Logout</Button>{' '}
						<Button size="sm" outline color="primary" onClick={()=>this.onSendLikeBtnClick(this.props.user_id, companion.id)}>좋아요</Button>{' '}
						<Button size="sm" outline color="primary" onClick={()=>this.onSendMessageBtnClick()}>쪽지보내기</Button>{' '}
						<Button size="sm" outline color="primary" onClick={()=>this.onSendProposalBtnClick(this.props.user_id, companion.id)}>결혼해요</Button>
						<MessageApp messageAppOpen={this.state.messageAppActivated}
									messageSender={this.props.user_id} 
									messageReceiverName={companion.name} 
									messageReceiverId={companion.id}
									messageToggle={()=>this.onSendMessageBtnClick()}
									messageSend={this.props.post_message}/>
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
				</div>
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
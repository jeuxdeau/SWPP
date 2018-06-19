import React, { Component } from 'react'
import { Jumbotron, Alert, Button, Modal, UncontrolledTooltip } from 'reactstrap'
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

<<<<<<< HEAD
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
              <Button size="sm" outline color="primary" onClick={() => this.onSignoutBtnClick()}>Logout</Button>{' '}
            </h1>
            {
              errors.get_list_errors ?
                <Alert color="danger">
                  {errors.get_list_errors}
                </Alert>
                : ''
            }
            <DetailCompanionBlock companion={companion} />
            <Col sm="10" md={{ size: 10, offset: 1 }}>
              <Card>
                <div>
                  <Row>
                    <Col xs="6" sm="4">
                      <a href="#" id="LikeButton">
                        <Button block size="sm" outline color="primary" onClick={() => this.onSendLikeBtnClick(this.props.user_id, companion.id)}>
                          <img src={require('../../../../Resources/Like.png')} height="100" width="100" alt={'Like!'} />
                        </Button>{' '}
                      </a>
                      <UncontrolledTooltip target="LikeButton">좋아요!</UncontrolledTooltip>
                    </Col>
                    <Col xs="6" sm="4">
                      <a href="#" id="MessageButton">
                        <Button block size="sm" outline color="primary" onClick={() => this.onSendMessageBtnClick()}>
                          <img src={require('../../../../Resources/message.png')} height="100" width="100" alt={'Send Message!'} />
                        </Button>{' '}
                      </a>
                      <UncontrolledTooltip target="MessageButton">메세지 보내기</UncontrolledTooltip>

	MakeLikeBtn(sentArray, sender, receiver) {
		if(sentArray.includes(receiver)) {
			return (
				<Button size="sm" outline color="secondary" disabled>좋아요</Button>
			)
		}
		else {
			return (
				<Button size="sm" outline color="primary" onClick={()=>{this.onSendLikeBtnClick(sender, receiver)}}>좋아요</Button>
			)
		}

	}

	MakeProposalBtn(sentArray, sender, receiver) {
		if(sentArray.includes(receiver)) {
			return (
				<Button size="sm" outline color="secondary" disabled>결혼해요</Button>
			)
		}
		else {
			return (
				<Button size="sm" outline color="primary" onClick={()=>{this.onSendProposalBtnClick(sender, receiver)}}>결혼해요</Button>
			)
		}

	}

	render() {
		const companion_list = this.props.companion_list
		const user_repr = this.props.user_repr
		const user_news = this.props.user_news
		if(companion_list == undefined || user_repr == undefined || user_news == undefined) return null

		const name = this.props.match.params.name
		const errors = this.props.errors || {}

		const repr_news = user_news.companion.filter((singleCompanion) =>
			{ return (singleCompanion.id == user_repr.represent_companion)})[0]
		const like_sent = repr_news.like_sent
		const proposal_sent = repr_news.proposal_sent
		const like_sent_receiver_id = like_sent.map((singleLike, index) => { return (singleLike.receiver)})
		const proposal_sent_receiver_id = proposal_sent.map((singleProposal, index) => {return (singleProposal.receiver)})

		if(companion_list) {
			const companion = companion_list.find((element) => (element.name == name))
			return (
				<div>
				<p />
				<div class="form" style={{width:"800px"}}>
				<h3>{companion.name}의 프로필</h3><p />
				<DetailCompanionBlock companion={companion} /><p />
				{this.MakeLikeBtn(like_sent_receiver_id, user_repr.represent_companion, companion.id)}{' '}

				<Button size="sm" outline color="primary" onClick={()=>this.onSendMessageBtnClick()}>쪽지보내기</Button>{' '}

				{this.MakeProposalBtn(proposal_sent_receiver_id, user_repr.represent_companion, companion.id)}{' '}

				<MessageApp messageAppOpen={this.state.messageAppActivated}
							messageSenderId={user_repr.represent_companion}
							messageReceiverName={companion.name}
							messageReceiverId={companion.id}
							messageToggle={()=>this.onSendMessageBtnClick()}
							messageSend={this.props.post_message}/>
			{
				errors.get_list_errors?
					<Alert color="danger">
						{errors.get_list_errors}
					</Alert>
					:""
			}
				</div>
				</div>
			)
		}
	}
}

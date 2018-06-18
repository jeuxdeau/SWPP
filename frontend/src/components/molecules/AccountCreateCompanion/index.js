import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Table, Jumbotron, Alert, Card, CardDeck, Button, CardImg, CardTitle, CardText, CardBody, Form } from 'reactstrap'
import TextInput from '../../atoms/TextInput'
import CompanionBlock from '../../atoms/CompanionBlock'

let breed_imsi = 'toy_poodle'
let name_imsi = "companion_name"
let sex_imsi = 'female'
let birth_year_imsi = 2018
let size_imsi = 'small'
let desired_mate_sex_imsi = 'male'
let desired_mate_breed_imsi = 'toy_poodle'
let desired_mate_size_imsi = 'small'
let desired_mate_affinity_with_human_imsi = 0
let desired_mate_affinity_with_dog_imsi = 0
let desired_mate_aggression_imsi = 0
let desired_mate_shyness_imsi = 0
let desired_mate_activity_imsi = 0
let desired_mate_loudness_imsi = 0
let desired_mate_etc_imsi = "etc"

let affinity_with_human_imsi = 1
let affinity_with_dog_imsi = 1
let aggression_imsi = 1
let shyness_imsi = 1
let activity_imsi = 1
let loudness_imsi = 1
let etc_imsi = "etc"
let season_start_imsi = '2018-06-25'
let season_end_imsi = '2018-06-25'
let setting = false

class AccountCreateCompanion extends Component {
	onSignoutBtnClick() {
                this.props.post_signout()
        }
	constructor(props) {
                super(props)
                this.state = {
			name: name_imsi,
                       	birth_year: birth_year_imsi,
                        sex: sex_imsi,
			size: size_imsi,
			breed: breed_imsi,
			desired_mate_sex: desired_mate_sex_imsi,
			desired_mate_breed: desired_mate_breed_imsi,
			desired_mate_size: desired_mate_size_imsi,
			desired_mate_affinity_with_human: desired_mate_affinity_with_human_imsi,
			desired_mate_affinity_with_dog: desired_mate_affinity_with_dog_imsi,
			desired_mate_shyness: desired_mate_shyness_imsi,
			desired_mate_activity: desired_mate_activity_imsi,
			desired_mate_aggression: desired_mate_aggression_imsi,
			desired_mate_loudness: desired_mate_loudness_imsi,
			desired_mate_etc: desired_mate_etc_imsi,
			affinity_with_human: affinity_with_human_imsi,
			affinity_with_dog: affinity_with_dog_imsi,
			shyness: shyness_imsi,
			activity: activity_imsi,
			aggression: aggression_imsi,
			loudness: loudness_imsi,
			etc: etc_imsi,
			season_start:season_start_imsi,
			season_end:season_end_imsi,
                }
        }
        handleInputChange = (event) => {
                const target = event.target
                const value = target.type === 'checkbox' ? target.checked : target.value
                const name = target.name
		console.log(target)
                if(name == "breed")
                        breed_imsi = target.value
		else if(name == "name")
			name_imsi = target.value
		else if(name == "sex")
			sex_imsi = target.value
		else if(name == "birth_year")
			birth_year_imsi = target.value
		else if(name == "size")
			size_imsi = target.value
		else if(name == "desired_mate_sex")
			desired_mate_sex_imsi = target.value
		else if(name == "desired_mate_breed")
			desired_mate_breed_imsi = target.value
		else if(name == "desired_mate_size")
			desired_mate_size_imsi = target.value
		else if(name == "desired_mate_affinity_with_human")
			desired_mate_affinity_with_human_imsi = target.value
		else if(name == "desired_mate_affinity_with_dog")
			desired_mate_affinity_with_dog_imsi = target.value
		else if(name == "desired_mate_shyness")
			desired_mate_shyness_imsi = target.value
		else if(name == "desired_mate_activity")
			desired_mate_activity_imsi = target.value
		else if(name == "desired_mate_loudness")
			desired_mate_loudness_imsi = target.value
		else if(name == "desired_mate_agression")
			desired_mate_agression_imsi = target.value
		else if(name == "desired_mate_etc")
			desired_mate_etc_imsi = target.value
		else if(name == "affinity_with_human")
                        affinity_with_human_imsi = target.value
                else if(name == "affinity_with_dog")
                        affinity_with_dog_imsi = target.value
                else if(name == "shyness")
                        shyness_imsi = target.value
                else if(name == "activity")
                        activity_imsi = target.value
                else if(name == "loudness")
                        loudness_imsi = target.value
                else if(name == "agression")
                        agression_imsi = target.value
                else if(name == "etc")
                        etc_imsi = target.value
		else if(name == "season_start")
			season_start_imsi = target.value
		else if(name == "season_end")
			season_end_imsi = target.value

		this.setState({
                        [name]: value
                })
        }
	onSubmit = (event) => {
                event.preventDefault()
                console.log("??")
                let companion_info = {
			name: this.state.name,
                        birth_year: this.state.birth_year,
                        sex: this.state.sex,
                        size: this.state.size,
                        breed: this.state.breed
		}
		for (var key in companion_info){
                        if(companion_info[key] == undefined)
                                companion_info[key]=this.props.companion_list[this.props.match.params.id-1][key]
		}
		let desired_mate_personality = {
			affinity_with_human: this.state.desired_mate_affinity_with_human,
                        affinity_with_dog: this.state.desired_mate_affinity_with_dog,
                        shyness: this.state.desired_mate_shyness,
                        activity: this.state.desired_mate_activity,
                        aggression: this.state.desired_mate_aggression,
                        loudness: this.state.desired_mate_loudness,
                        etc: this.state.desired_mate_etc
		}
		for (var key in desired_mate_personality){
                        if(desired_mate_personality[key] == undefined)
                                desired_mate_personality[key]=this.props.companion_list[this.props.match.params.id-1].desired_mate.personality[key]
                }
		let desired_mate = {
			sex: this.state.desired_mate_sex,
                        breed: this.state.desired_mate_breed,
                        size: this.state.desired_mate_size
		}
		for (var key in desired_mate){
                        if(desired_mate[key] == undefined)
                                desired_mate[key]=this.props.companion_list[this.props.match.params.id-1].desired_mate[key]
                }
		let personality = {
			affinity_with_human: this.state.affinity_with_human,
                        affinity_with_dog: this.state.affinity_with_dog,
                        shyness: this.state.shyness,
                        activity: this.state.activity,
                        aggression: this.state.aggression,
                        loudness: this.state.loudness,
                        etc: this.state.etc
		}
		for (var key in personality){
                        if(personality[key] == undefined)
                                personality[key]=this.props.companion_list[this.props.match.params.id-1].personality[key]
                }
		let mating_season = {
			season_start:this.state.season_start,
                        season_end:this.state.season_end
		}
		for (var key in mating_season){
                        if(mating_season[key] == undefined)
                                mating_season[key]=this.props.companion_list[this.props.match.params.id-1].mating_season[key]
                }
		let information = {
			companion_info:companion_info,
			desired_mate_personality:desired_mate_personality,
			desired_mate:desired_mate,
			personality:personality,
			mating_season, mating_season
		}
		console.log(information)
                this.props.onSubmit(information, this.props.user_id)
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
			console.log(this.state)
			console.log(this.props.user_id)
                	const errors = this.props.errors || {}
			if(this.props.user_id){
				return (
					<Jumbotron className="container">
	                                <h1>
        	                                VASELINE <Button size="sm" outline color="primary" onClick={()=>this.onSignoutBtnClick()}>Logout</Button>
                	                </h1>
					<Form onSubmit={this.onSubmit}>
                                        {
                                                errors.non_field_errors?
                                                        <Alert color="danger">
                                                                {errors.non_field_errors}
                                                        </Alert>: ""
                                        }
                                        <CardDeck>
					<h2>Companion Info</h2>
					<Table>
                                        <thead>
                                        <tr><th><center>#</center></th><th><center>Update</center></th></tr>
                                        </thead>
                                        <tbody>
                                        <tr><th><center>Name</center></th><th><center>
					<TextInput name="name" error={errors.name} onChange={this.handleInputChange}/>
					</center></th></tr>
					<tr><th><center>Sex</center></th><th><center>
					
					<Input type="select" name="sex" error={errors.name} onChange={this.handleInputChange} value={sex_imsi}>
					<option value='female'>암컷</option>
                                        <option value='male'>수컷</option>
					</Input></center></th></tr>
					
					<tr><th><center>BirthYear</center></th><th><center>
					<Input type="select" name="birth_year" error={errors.name} onChange={this.handleInputChange} value={birth_year_imsi}>
					<option value="2018">2018</option>
					<option value="2017">2017</option>
					<option value="2016">2016</option>
					<option value="2015">2015</option>
					<option value="2014">2014</option>
					<option value="2013">2013</option>
					<option value="2012">2012</option>
					<option value="2011">2011</option>
					<option value="2010">2010</option>
					<option value="2009">2009</option>
					<option value="2008">2008</option>
					<option value="2007">2007</option>
					<option value="2006">2006</option>
					<option value="2005">2005</option>
					<option value="2004">2004년 이전</option>
					</Input>
					</center></th></tr>
					<tr><th><center>Breed</center></th><th><center>
					<Input type="select"  name="breed" error={errors.name} onChange={this.handleInputChange} value={breed_imsi}>
					<option value='mix'>믹스</option>
			          	<option value='dachshund'>닥스훈트</option>
          				<option value='dalmatian'>달마시안</option>
          				<option value='retriever'>리트리버</option>
          				<option value='malamute'>말라뮤트</option>
          				<option value='maltese'>말티즈</option>
          				<option value='miniature_pinscher'>미니핀</option>
          				<option value='bulldog'>불독</option>
          				<option value='beagle'>비글</option>
          				<option value='bichon_frise'>비숑프리제</option>
          				<option value='samoyed'>사모예드</option>
          				<option value='shar_pei'>샤페이</option>
          				<option value='shepherd'>세퍼트</option>
          				<option value='sapsal'>삽살</option>
          				<option value='sheepdog'>쉽독</option>
          				<option value='spitz'>스피츠</option>
          				<option value='siberian_husky'>시베리안 허스키</option>
          				<option value='shih_tzu'>시츄</option>
          				<option value='yorkshire_terrier'>요크셔 테리어</option>
          				<option value='welsh_corgi'>웰시코기</option>
          				<option value='jindo_dog'>진돗개</option>
          				<option value='chihuahua'>치와와</option>
					<option value='cocker_spaniel'>코카스파니엘</option>
					<option value='collie'>콜리</option>
					<option value='toy_poodle'>토이푸들</option>
					<option value='papillon'>파피용</option>
					<option value='pug'>퍼그</option>
					<option value='pekingese'>페키니즈</option>
					<option value='pomeranian'>포메라니안</option>
					<option value='poodle'>푸들</option>
					<option value='pyrenees'>피레니즈</option>
					<option value='hound'>하운드</option>
					<option value='etc'>기타</option>

					</Input></center></th></tr>
					<tr><th><center>Size</center></th><th><center>
					<Input type="select" name="size" error={errors.name} onChange={this.handleInputChange} value={size_imsi}>
					
					<option value="small">소형견</option>
				        <option value="medium">중형견</option>
        				<option value="latge">대형견</option>

					</Input></center></th></tr>
					</tbody>
					</Table>
					<h2>Desired_mate</h2>
					<Table>
                                        <thead>
                                        <tr><th><center>#</center></th><th><center>Update</center></th></tr>
                                        </thead>
                                        <tbody>
					<tr><th><center>Sex</center></th><th><center>
					<Input type="select" name="desired_mate_sex" error={errors.name} onChange={this.handleInputChange} value={desired_mate_sex_imsi}>
                                        <option value='female'>암컷</option>
                                        <option value='male'>수컷</option>
                                        </Input></center></th></tr>
					<tr><th><center>Breed</center></th><th><center>
                                        <Input type="select"  name="desired_mate_breed" error={errors.name} onChange={this.handleInputChange} value={desired_mate_breed_imsi}>
                                        <option value='mix'>믹스</option>
                                        <option value='dachshund'>닥스훈트</option>
                                        <option value='dalmatian'>달마시안</option>
                                        <option value='retriever'>리트리버</option>
                                        <option value='malamute'>말라뮤트</option>
                                        <option value='maltese'>말티즈</option>
                                        <option value='miniature_pinscher'>미니핀</option>
                                        <option value='bulldog'>불독</option>
                                        <option value='beagle'>비글</option>
                                        <option value='bichon_frise'>비숑프리제</option>
                                        <option value='samoyed'>사모예드</option>
                                        <option value='shar_pei'>샤페이</option>
                                        <option value='shepherd'>세퍼트</option>
                                        <option value='sapsal'>삽살</option>
                                        <option value='sheepdog'>쉽독</option>
                                        <option value='spitz'>스피츠</option>
                                        <option value='siberian_husky'>시베리안 허스키</option>
                                        <option value='shih_tzu'>시츄</option>
                                        <option value='yorkshire_terrier'>요크셔 테리어</option>
                                        <option value='welsh_corgi'>웰시코기</option>
                                        <option value='jindo_dog'>진돗개</option>
                                        <option value='chihuahua'>치와와</option>
                                        <option value='cocker_spaniel'>코카스파니엘</option>
                                        <option value='collie'>콜리</option>
                                        <option value='toy_poodle'>토이푸들</option>
                                        <option value='papillon'>파피용</option>
                                        <option value='pug'>퍼그</option>
                                        <option value='pekingese'>페키니즈</option>
                                        <option value='pomeranian'>포메라니안</option>
                                        <option value='poodle'>푸들</option>
                                        <option value='pyrenees'>피레니즈</option>
                                        <option value='hound'>하운드</option>
                                        <option value='etc'>기타</option>

                                        </Input></center></th></tr>
					
					<tr><th><center>Size</center></th><th><center>
                                        <Input type="select" name="desired_mate_size" error={errors.name} onChange={this.handleInputChange} value={desired_mate_size_imsi}>

                                        <option value="small">소형견</option>
                                        <option value="medium">중형견</option>
                                        <option value="latge">대형견</option>

                                        </Input></center></th></tr>
					</tbody>
					</Table>
					
					<h3>Personality (DesiredMate)</h3>
					
					<Table>
                                        <thead>
                                        <tr><th><center>#</center></th><th><center>Update</center></th></tr>
                                        </thead>
                                        <tbody>
					<tr><th><center>Affinity_with_human</center></th><th><center>
					<Input type="select" name="desired_mate_affinity_with_human" error={errors.name} onChange={this.handleInputChange} value={desired_mate_affinity_with_human_imsi}>
					<option value="상관 없음">0</option>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Affinity_with_dog</center></th><th><center>
					<Input type="select" name="desired_mate_affinity_with_dog" error={errors.name} onChange={this.handleInputChange} value={desired_mate_affinity_with_dog_imsi}>
					<option value="상관 없음">0</option>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Shyness</center></th><th><center>
					<Input type="select" name="desired_mate_shyness" error={errors.name} onChange={this.handleInputChange} value={desired_mate_shyness_imsi}>
					<option value="상관 없음">0</option>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Activity</center></th><th><center>
					<Input type="select" name="desired_mate_activity" error={errors.name} onChange={this.handleInputChange} value={desired_mate_activity_imsi}>
					<option value="상관 없음">0</option>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Loudness</center></th><th><center>
					<Input type="select" name="desired_mate_loudness" error={errors.name} onChange={this.handleInputChange} value={desired_mate_loudness_imsi}>
					<option value="상관 없음">0</option>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Aggression</center></th><th><center>
					<Input type="select" name="desired_mate_aggression" error={errors.name} onChange={this.handleInputChange} value={desired_mate_aggression_imsi}>
					<option value="상관 없음">0</option>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>ETC</center></th><th><center>
					<TextInput name="desired_mate_etc" error={errors.name} onChange={this.handleInputChange}/>
					</center></th></tr>
					</tbody>
					</Table>
					
					<h3>Personality</h3>
					
					<Table>
                                        <thead>
                                        <tr><th><center>#</center></th><th><center>Update</center></th></tr>
                                        </thead>
                                        <tbody>
					<tr><th><center>Affinity_with_human</center></th><th><center>
					<Input type="select" name="affinity_with_human" error={errors.name} onChange={this.handleInputChange} value={affinity_with_human_imsi}>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Affinity_with_dog</center></th><th><center>
					<Input type="select" name="affinity_with_dog" error={errors.name} onChange={this.handleInputChange} value={affinity_with_dog_imsi}>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Shyness</center></th><th><center>
					<Input type="select" name="shyness" error={errors.name} onChange={this.handleInputChange} value={shyness_imsi}>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Activity</center></th><th><center>
					<Input type="select" name="activity" error={errors.name} onChange={this.handleInputChange} value={activity_imsi}>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Loudness</center></th><th><center>
					<Input type="select" name="loudness" error={errors.name} onChange={this.handleInputChange} value={loudness_imsi}>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Aggression</center></th><th><center>
					<Input type="select" name="aggression" error={errors.name} onChange={this.handleInputChange} value={aggression_imsi}>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>ETC</center></th><th><center>
					<TextInput name="etc" error={errors.name} onChange={this.handleInputChange}/>
					</center></th></tr>
					</tbody>
					</Table>
					<h2>Mating Season</h2>
					<Table>
                                        <thead>
                                        <tr><th><center>#</center></th><th><center>Update</center></th></tr>
                                        </thead>
                                        <tbody>
					<tr><th><center>Season Start</center></th><th><center>
					<TextInput name="season_start" error={errors.name} onChange={this.handleInputChange}/></center></th></tr>
					<tr><th><center>Season End</center></th><th><center>
                                        <TextInput name="season_end" error={errors.name} onChange={this.handleInputChange}/></center></th></tr>
                                        </tbody>
					</Table>
					<center><Button type="submit" color="danger" size="lg">
                                                Create Companion
                                        </Button></center>
                                        </CardDeck>
                                </Form>

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
export default AccountCreateCompanion

import React, { Component } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { PageHeader, Alert, Button, ButtonGroup, Dropdown, MenuItem, Jumbotron, InputGroup, Form, FormGroup, FormControl, ControlLabel, Container, Label, Input, Row, Col } from 'reactstrap'
import { options } from './address.js'
import { Link } from 'react-router-dom'

import TextInput from '../../atoms/TextInput'

const Wrapper = styled.div`
font-family: ${font('primary')};
color: ${palette('grayscale', 0)};
`

export default class SignupPage extends Component {
    constructor(props) {
        super(props)

        this.handleFirstLevelChange = this.handleFirstLevelChange.bind(this)
        this.handleSecondLevelChange = this.handleSecondLevelChange.bind(this)
    }

    state = {
        firstLevel: Object.keys(options)[0],
        secondLevel: Object.keys(options)[0][0],

        username: 'vaseline2344',
        password: 'vaselin32',

        //profile
        profile__nickname: 'xxxx',
        profile__postal_code: 0,
        profile__rough_address: '서울',
        profile__detailed_address: '강남구',
        profile__age: 10,
        profile__gender: 'male',
        profile__email: 'xxxxx',

        //companion
        companion__name: 'yyyy',
        companion__sex: 'female',
        companion__birth_year: 2018,
        companion__breed: 'mix',
        companion__size: 'small',

        //desired_mate
        desired_mate__breed: 'mix',
        desired_mate__sex: 'male',
        desired_mate__size: 'small',

        //persoanlity
        personality__affinity_with_human: 0,
        personality__affinity_with_dog: 0,
        personality__shyness: 0,
        personality__activity: 0,
        personality__loudness: 0,
        personality__aggression: 0,
        personality__etc: 'yuu',

        //mating_season
        mating_season__season_start: '2018-06-15',
        mating_season__season_end: '2018-06-25',

        etcinfo: 'ddd'
    }

    handleInputChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    handleFirstLevelChange(event) {
        this.setState({firstLevel: event.target.value});
        this.state.profile__rough_address = event.target.value;
        this.state.profile__detailed_address = options[event.target.value][0];
    }

    handleSecondLevelChange(event) {
        this.setState({secondLevel: event.target.value});
        this.state.profile__second_address = event.target.value;
    }

    onSubmit = () => {
        console.log("==========user==========")
        console.log(this.state.username);
        console.log(this.state.password);

        console.log("==========profile==========")
        console.log("닉네임: " + this.state.profile__nickname);
        console.log(this.state.profile__rough_address);
        console.log(this.state.profile__detailed_address);
        console.log(this.state.profile__age);
        console.log(this.state.profile__gender);
        console.log("이메일: " + this.state.profile__email);

        console.log("==========companion==========")
        console.log("컴패 이름:" + this.state.companion__name);
        console.log(this.state.companion__sex);
        console.log(this.state.companion__birth_year);
        console.log(this.state.companion__breed);

        console.log("==========this.state.companion__desired==========")
        console.log(this.state.desired_mate__breed);
        console.log(this.state.desired_mate__sex);
        console.log(this.state.desired_mate__size);

        console.log("==========this.state.companion__personality==========")
        console.log(this.state.personality__affinity_with_human);
        console.log(this.state.personality__affinity_with_dog);
        console.log(this.state.personality__shyness);
        console.log(this.state.personality__activity);
        console.log(this.state.personality__loudness);
        console.log(this.state.personality__aggression);
        console.log(this.state.personality__etc);

        console.log("==========this.state.companion__mating_season==========")
        console.log(this.state.mating_season__season_start);
        console.log(this.state.mating_season__season_end);

        let post_input = {
            "username": this.state.username,
            "password": this.state.password,
            "companion": {
                "name": this.state.companion__name,
                "sex": this.state.companion__sex,
                "birth_year": this.state.companion__birth_year,
                "breed": this.state.companion__breed,
                "size": this.state.companion__size,
            "desired_mate": {
                "breed": this.state.desired_mate__breed,
                "sex": this.state.desired_mate__sex,
                "size": this.state.desired_mate__size
            },
            "personality": {
                "affinity_with_human": this.state.personality__affinity_with_human,
                "affinity_with_dog": this.state.personality__affinity_with_dog,
                "shyness": this.state.personality__shyness,
                "activity": this.state.personality__activity,
                "loudness": this.state.personality__loudness,
                "aggression": this.state.personality__aggression,
                "etc": this.state.personality__etc
            },
            "mating_season": {
                "season_start": this.state.mating_season__season_start,
                "season_end": this.state.mating_season__season_end
            },
            "media": [],
            "like_sent": [],
            "like_received": [],
            "proposal_sent": [],
            "proposal_received": [],
            "message_sent": [],
            "message_received": []
            },
            "profile": {
                "nickname": this.state.profile__nickname,
                "first_address": this.state.profile__rough_address,
                "second_address": this.state.profile__detailed_address,
                "age": this.state.profile__age,
                "gender": this.state.profile__gender,
                "email": this.state.profile__email
            }
        }
    this.props.onPostSignup(post_input);
    }

    render() {
        const renderOption = item => <option value={item}>{item}</option>

        const firstLevelOptions = Object.keys(options).map(renderOption)
        const secondLevelOptions = options[this.state.firstLevel].map(renderOption)

        return (
            <div>
            <Container>
            <Jumbotron>
            <h1>Sign Up</h1>
            <p>
            회원님의 정보, 반려동물의 정보, 그리고 원하는 짝꿍의 모습을 알려 주세요.<br />
            회원가입을 완료하고 마음에 꼭 드는 강아지 짝꿍을 찾아보세요.
            </p>
            <p>
            <Button>Learn more</Button>
            </p>
            </Jumbotron>

            <Jumbotron>
            <h2>유저 정보</h2>  당신에 대해서 알려주세요.<p/>
            <Form onSubmit={this.onSubmit}>
            <TextInput name="username" placeholder="id" onChange={this.handleInputChange} />
            <TextInput type="password" name="password" placeholder="password" onChange={this.handleInputChange} />
            <TextInput name="profile__nickname" placeholder="nickname" onChange={this.handleInputChange} />
            <TextInput name="profile__email" placeholder="e-mail" onChange={this.handleInputChange} />

            <FormGroup>
                <Label for="age">나이</Label>
                <Input type="select" name="age" id="ageselect" onChange={(node) => { this.state.profile__age = node.target.value }}>
                    <option value='10'>10대</option>
                    <option value='20'>20대</option>
                    <option value='30'>30대</option>
                    <option value='40'>40대</option>
                    <option value='50'>50대</option>
                    <option value='60'>60대 이상</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="gender">성별</Label>
                <Input type="select" name="gender" id="genderselect" onChange={(node) => { this.state.profile__gender = node.target.value }}>
                    <option value="male">남성</option>
                    <option value="female">여성</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="address">거주지</Label>
                <Input type="select" onChange={this.handleFirstLevelChange} value={this.state.firstLevel}>
                {firstLevelOptions}
                </Input>
                <Input type="select" onChange={this.handleSecondLevelChange} value={this.state.secondLevel}>
                {secondLevelOptions}
                </Input>
            </FormGroup>

            <h2>반려동물 정보</h2>  여러분의 반려동물에 대해서 알려주세요.<p/>
            <Label>반려동물 이름</Label>
            <TextInput name="companion__name" placeholder="반려동물 이름" onChange={this.handleInputChange} />

            <FormGroup>
            <Label for="sex">성별</Label>
            <Input type="select" onChange={(node) => { this.state.companion__sex = node.target.value }}>
            <option value="female">암컷</option>
            <option value="male">수컷</option>
            </Input>
            </FormGroup>
            <FormGroup>
            <Label for="breed">품종</Label>
            <Input type="select" onChange={(node) => { this.state.companion__breed = node.target.value }}>
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
            </Input>
            </FormGroup>

            <FormGroup>
            <Label for="size">사이즈</Label>
            <Input type="select" name="size" id="sizeselect" onChange={(node) => { this.state.companion__size = node.target.value }}>
                <option value="small">소형견</option>
                <option value="medium">중형견</option>
                <option value="latge">대형견</option>
            </Input>
            </FormGroup>

            <FormGroup>
            <Label for="companionage">출생년도</Label>
            <Input type="select" name="size" id="companionageselect" onChange={(node) => { this.state.companion__birth_year = node.target.value }}>
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
            </FormGroup>

            <FormGroup>
            <Label for="date">원하는 만남 시간</Label>
            <Row>
            <Col sm="3">
            <Input name="mating_season__season_start" type="date" placeholder="부터" onChange={this.handleInputChange} />
            <Col><Label>부터</Label></Col>
            </Col><Col sm="3">
            <Input name="mating_season__season_end" type="date" placeholder="까지" onChange={this.handleInputChange} />
            까지
            </Col>
            </Row>
            </FormGroup>
            <h2>조금 더 알려주세요!</h2><br />
            <p>사람을 좋아해요</p>
            <ButtonGroup>
                <Button onClick={node => { this.state.personality__affinity_with_human = 1; }}>1</Button>
                <Button onClick={node => { this.state.personality__affinity_with_human = 2; }}>2</Button>
                <Button onClick={node => { this.state.personality__affinity_with_human = 3; }}>3</Button>
                <Button onClick={node => { this.state.personality__affinity_with_human = 4; }}>4</Button>
                <Button onClick={node => { this.state.personality__affinity_with_human = 5; }}>5</Button>
            </ButtonGroup><hr />

            <p>강아지 친구들과 친하게 지내요</p>
            <ButtonGroup>
                <Button onClick={node => { this.state.personality__affinity_with_dog= 1; }}>1</Button>
                <Button onClick={node => { this.state.personality__affinity_with_dog= 2; }}>2</Button>
                <Button onClick={node => { this.state.personality__affinity_with_dog= 3; }}>3</Button>
                <Button onClick={node => { this.state.personality__affinity_with_dog= 4; }}>4</Button>
                <Button onClick={node => { this.state.personality__affinity_with_dog= 5; }}>5</Button>
            </ButtonGroup><hr />

            <p>수줍음이 많아요</p>
            <ButtonGroup>
                <Button onClick={node => { this.state.personality__shyness= 1; }}>1</Button>
                <Button onClick={node => { this.state.personality__shyness= 2; }}>2</Button>
                <Button onClick={node => { this.state.personality__shyness= 3; }}>3</Button>
                <Button onClick={node => { this.state.personality__shyness= 4; }}>4</Button>
                <Button onClick={node => { this.state.personality__shyness= 5; }}>5</Button>
            </ButtonGroup><hr />

            <p>활동적이에요</p>
            <ButtonGroup>
                <Button onClick={node => { this.state.personality__activity = 1; }} >1</Button>
                <Button onClick={node => { this.state.personality__activity = 2; }} >2</Button>
                <Button onClick={node => { this.state.personality__activity = 3; }} >3</Button>
                <Button onClick={node => { this.state.personality__activity = 4; }} >4</Button>
                <Button onClick={node => { this.state.personality__activity = 5; }} >5</Button>
            </ButtonGroup><hr />

            <p>많이 짖어요</p>
            <ButtonGroup>
                <Button onClick={node => { this.state.personality__loudness = 1; }} >1</Button>
                <Button onClick={node => { this.state.personality__loudness = 2; }} >2</Button>
                <Button onClick={node => { this.state.personality__loudness = 3; }} >3</Button>
                <Button onClick={node => { this.state.personality__loudness = 4; }} >4</Button>
                <Button onClick={node => { this.state.personality__loudness = 5; }} >5</Button>
            </ButtonGroup><hr />

            <p>공격적인 편이에요</p>
            <ButtonGroup>
                <Button onClick={node => { this.state.personality__aggression = 1; }} >1</Button>
                <Button onClick={node => { this.state.personality__aggression = 2; }} >2</Button>
                <Button onClick={node => { this.state.personality__aggression = 3; }} >3</Button>
                <Button onClick={node => { this.state.personality__aggression = 4; }} >4</Button>
                <Button onClick={node => { this.state.personality__aggression = 5; }} >5</Button>
            </ButtonGroup><hr />

            <FormGroup>
            <Label>더 알려주고 싶은 것들은요...</Label><br />
                <Input name="personality__etc" type="textarea" onChange={this.handleInputChange} rows="5" />
            </FormGroup>

            <b>이런 짝꿍을 찾고 있어요!</b>
            <FormGroup>
            <Label for="sex">성별</Label>
            <Input type="select" onChange={(node) => { this.state.desired_mate__sex = node.target.value }}>
                <option value="female">남자친구</option>
                <option value="male">여자친구</option>
            </Input>
            </FormGroup>
            <FormGroup>
            <Label for="breed">품종</Label>
            <Input type="select" onChange={(node) => { this.state.desired_mate__breed = node.target.value }}>
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
            </Input>
            </FormGroup>

            <FormGroup>
            <Label for="size">사이즈</Label>
            <Input type="select" name="size" id="sizeselect2" onChange={(node) => { this.state.desired_mate__size = node.target.value }}>
                <option value="small">소형견</option>
                <option value="medium">중형견</option>
                <option value="latge">대형견</option>
            </Input>
            </FormGroup>

            <center><Button type="submit" color="info" onClick={this.onSubmit} tag={Link} to='/upload'>다 했어요!</Button></center>
            </Form>
            </Jumbotron>
            </Container>
            </div>
        )
    }
}

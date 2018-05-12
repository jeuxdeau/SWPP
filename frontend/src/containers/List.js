import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import ListPage from '../components/pages/ListPage'
import { list } from '../store/actions/list'
import { currentCompanionList, listErrors, isAuthenticated } from '../store/reducers'

const List = (props) => {
	return (
		<div className="list-page">
			<ListPage {...props}/>
		</div>
	)
}

const mapStateToProps = (state) => ({
	companion_list: currentCompanionList(state),
	errors: listErrors(state)	
})

const mapDispatchToProps = (dispatch) => ({
	get_companion_list: () => {
		dispatch(list())
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
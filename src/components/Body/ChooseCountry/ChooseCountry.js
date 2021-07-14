import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as actions from '../../../store/actions/index';
import classes from './ChooseCountry.module.css';

const ChooseCountry = props => {
	const [country, setCountry] = useState('')

	const dispatch = useDispatch()

	const httpRequestInitial = (country) => dispatch(actions.httpRequestInitial(country))

	const SubmitHandlerClicked = event => {
		event.preventDefault()
		httpRequestInitial(country)
	}

	return (
		<div className={classes.search}>
			<form 
				className={classes.form}
				onSubmit={(event) => SubmitHandlerClicked(event)}
			>
				<input
					className={classes.searchBar}
					id="countrySearch"
					type="search"
					placeholder="Search a Country"
					spellCheck="false"
					onChange={(event) => setCountry(event.target.value)}
				/>
				<br/>
				<input
					className={classes.submit}
					type="Submit" 
					value="Submit"
				/>
			</form>
		</div>
	)
}

export default ChooseCountry;
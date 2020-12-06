// Generated with util/create-component.js
import React from 'react'
import Alert from './Alert'

const styles = {
	margin: '2em',
	alignItems: 'center',
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
}

export default {
	title: 'Alert',
}

export const Default = () => (
	<div style={styles}>
		<Alert>Alert</Alert>
	</div>
)
export const WithHeader = () => (
	<div style={styles}>
		<Alert header='this is a header'>Alert</Alert>
	</div>
)

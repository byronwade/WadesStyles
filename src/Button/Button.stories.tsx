// Generated with util/create-component.js
import React from 'react'
import Button from './Button'
import 'css.gg/icons/css/alarm.css'

const styles = {
	margin: '2em',
	alignItems: 'center',
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
}

export default {
	title: 'Button',
}

export const Default = () => (
	<div style={styles}>
		<Button theme='primary'>Default</Button>
		<Button>
			<i className='icon gg-alarm'></i>Default
		</Button>
	</div>
)

export const Active = () => (
	<div style={styles}>
		<Button active>Default</Button>
	</div>
)

export const Disabled = () => (
	<div style={styles}>
		<Button disabled>Default</Button>
	</div>
)
export const Loading = () => (
	<div style={styles}>
		<Button loading>Default</Button>
	</div>
)

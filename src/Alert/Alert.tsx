// Generated with util/create-component.js
import React from 'react'
import clsx from 'clsx'

import { AlertProps } from './Alert.types'

import './Alert.scss'

const Alert = ({
	theme,
	active,
	disabled,
	className,
	header,
	children,
	...props
}: AlertProps) => {
	const classes = clsx(className, active && 'active', disabled && 'disabled')
	return (
		<div data-testid='Alert' {...props} className={clsx('alert', classes)}>
			{header && <div className='header'>{header}</div>}
			{children}
		</div>
	)
}

export default Alert

// Generated with util/create-component.js
import React from 'react'
import clsx from 'clsx'

import { CardProps } from './Card.types'

import './Card.scss'

const Card = ({
	theme,
	active,
	disabled,
	className,
	children,
	...props
}: CardProps) => {
	const classes = clsx(className, active && 'active', disabled && 'disabled')
	return (
		<div data-testid='Card' {...props} className={clsx(classes)}>
			{children}
		</div>
	)
}

export default Card

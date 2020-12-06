// Generated with util/create-component.js
import React from 'react'
import clsx from 'clsx'

import { CardHeaderProps } from './CardHeader.types'

import '../Card.scss'

const CardHeader = ({
	theme,
	active,
	disabled,
	className,
	children,
	...props
}: CardHeaderProps) => {
	const classes = clsx(className, active && 'active', disabled && 'disabled')
	return (
		<div data-testid='Card' {...props} className={clsx(classes)}>
			{children}
		</div>
	)
}

export default CardHeader

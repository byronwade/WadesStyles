// Generated with util/create-component.js
import React from 'react'
import clsx from 'clsx'

import { ButtonProps } from './Button.types'

import './Button.scss'

const Button = ({
	theme,
	active,
	loading,
	disabled,
	className,
	children,
	...props
}: ButtonProps) => {
	const classes = clsx(
		className,
		active && 'active',
		disabled && 'disabled',
		loading && 'loading'
	)
	return (
		<button
			data-testid='Button'
			{...props}
			className={clsx('btn', classes)}>
			{children}
		</button>
	)
}

export default Button

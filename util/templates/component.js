module.exports = (componentName) => ({
	content: `// Generated with util/create-component.js
import React from "react";
import clsx from 'clsx'

import { ${componentName}Props } from "./${componentName}.types";

import "./${componentName}.scss";

const ${componentName} = ({
	theme,
	active,
	disabled,
	className,
	children,
	...props
}:${componentName}Props) => {
	const classes = clsx(className, active && 'active', disabled && 'disabled')
	return(
    	<div data-testid="${componentName}" {...props} className={clsx(classes)}>{children}</div>
	)
}

export default ${componentName};

`,
	extension: `.tsx`,
})

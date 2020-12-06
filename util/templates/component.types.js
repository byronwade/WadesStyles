module.exports = (componentName) => ({
	content: `// Generated with util/create-component.js
export interface ${componentName}Props {
	theme?: 'primary' | 'secondary'
	active?
	disabled?
	className?
	children?
}
`,
	extension: `.types.ts`,
})

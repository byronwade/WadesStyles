module.exports = (componentName) => ({
	content: `// Generated with util/create-component.js
@import "../variables.scss";
@import "../typography.scss";

.foo {
  @include font-defaults;

  color: $wade-green;
}
`,
	extension: `.scss`,
})

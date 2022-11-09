module.exports = {
	...require('gts/.prettierrc.json'),
	useTabs: true,
	singleQuote: true,
	trailingComma: 'es5',
	printWidth: 80,
	plugins: ['prettier-plugin-svelte'],
	pluginSearchDirs: ['.'],
	overrides: [{files: '*.svelte', options: {parser: 'svelte'}}],
};

module.exports = {
	root: true,
	extends: ['./node_modules/gts'],
	plugins: ['svelte3'],
	ignorePatterns: [
		'*.go',
		'go.*',
		'*.cjs',
		'*.d.ts',
		'*.css',
		'*.json',
		'**/example.spec.ts',
		'**/demo-todo-app.spec.ts',
		'**/vite-env.d.ts',
	],
	overrides: [{files: ['*.svelte'], processor: 'svelte3/svelte3'}],
	settings: {
		'svelte3/typescript': () => require('typescript'),
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
};

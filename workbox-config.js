module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{ico,png,html,json}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
module.exports = {
	extends: ['next/core-web-vitals', 'eslint-config-prettier', 'prettier'],
	plugins: ['prettier'],
	rules: {
		'arrow-parens': [0, 'as-needed'],
		'linebreak-style': 0,
		'import/no-extraneous-dependencies': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/jsx-props-no-spreading': 'off',
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
	},
	settings: {
		'import/resolver': {
			alias: {
				map: [['@', './src']],
			},
		},
	},
};

require('sinon');
require('babel-register');
module.exports = function(config) {
	config.set({
		browsers: ['PhantomJS'],
		colors: true,
		frameworks: ['mocha', 'sinon', 'chai-sinon'],
		files: [
			'./node_modules/babel-polyfill/dist/polyfill.js',
			'./node_modules/phantomjs-polyfill/bind-polyfill.js',
			'./components/demo/.spec.js',
			'./components/demo/tests/*.spec.js'
		],
		plugins: [
			require('karma-webpack'),
			require('karma-mocha'),
			require('karma-mocha-reporter'),
			require('karma-phantomjs-launcher'),
			require('karma-sourcemap-loader'),
			require('karma-sinon'),
			require('karma-chai-sinon')
		],
		preprocessors: {
			'./components/demo/.spec.js': ['webpack'],
			'./components/demo/tests/*.spec.js': ['webpack', 'sourcemap']
		},
		reporters: ['mocha'],
		webpack: {
			module: {
				loaders: [
					{
						test: /\.js$/,
						exclude: /\/node_modules\//,
						loader: 'babel',
						query: {
							presets: [
								'airbnb',
								'es2015',
								'react'
							]
						}
					}
				]
			},
			externals: {
				'jsdom': 'window',
				'cheerio': 'window',
				'react/addons': true,
				'react/lib/ExecutionEnvironment': true,
				'react/lib/ReactContext': 'reactjs',
				'sinon': true
			}
		},
		webpackServer: {},
		webpackMiddleware: { }
	})
};
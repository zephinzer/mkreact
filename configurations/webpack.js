var path = require('path');

const ENTRY 						= './components/app.js';
const OUTPUT_FILENAME 				= 'master.js';
const OUTPUT_PATH 					= path.join(__dirname, '/../assets');
const OUTPUT_PUBLIC_PATH 			= '/assets';
const MODULE_BABEL_LOADER_PRESETS 	= [
										'es2015',
										'react'
									];

var WebpackConfiguration = {};
/**
 * Where the root of your React App is.
 */
WebpackConfiguration.entry = ENTRY;
/**
 * Applies only when the server is in 'development' mode.
 */
WebpackConfiguration.devMiddleware = {
	lazy					: true,
	noInfo					: false,
	publicPath				: OUTPUT_PUBLIC_PATH,
	quiet					: false,
	reporter				: null,
	serverSideRender		: false,
	stats : {
		colors				: true
	}
};
/**
 * Babel configuration for Webpack
 */
WebpackConfiguration.module = {
	loaders: [
		{
			loader: 'html-loader',
			test: /.html$/
		},
		{
			loader: 'json-loader',
			test: /.json$/
		},
		{
			exclude: /bower_components/,
			loader: 'style-loader!css-loader',
			test: /.css$/,
		},
		{
			exclude: /node_modules/,
			loader: 'babel-loader',
			test: /.jsx?$/,
			query: {
				presets: MODULE_BABEL_LOADER_PRESETS
			}
		}
	]
};
/**
 * Webpack output configuration
 */
WebpackConfiguration.output = {
	filename: OUTPUT_FILENAME,
	path: OUTPUT_PATH,
	publicPath: OUTPUT_PUBLIC_PATH,
};

module.exports = WebpackConfiguration;
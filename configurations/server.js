var ServerConfiguration = {
	environment 	: process.env.NODE_ENV || 'development',
	port 			: process.env.PORT || 4000,
	title			: 'mkReact App'
};

module.exports = ServerConfiguration;
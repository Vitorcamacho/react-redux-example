const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
  	'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
		path.join(__dirname, 'src', 'index.js'),
	],
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/',
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				loader: 'react-hot!babel',
				exclude: /node_modules/,
      },
    ],
	},
	plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
  ],
	// Create Sourcemaps for the bundle
	devtool: 'source-map',
};

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const extendedConfig = {
	publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
};

new WebpackDevServer(webpack(config), extendedConfig)
	.listen(3000, 'localhost', (err, result) => {
		if (err) {
			return console.log(err);
		}
	});

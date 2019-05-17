const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: "bundle.js",
		publicPath: 'build/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					loader: 'css-loader'
				}),
			},
			{
				// regex looks for jpe or jpg
				test: /\.(jpe?g|png|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: { limit: 40000 }
					},
					'image-webpack-loader'
				]
			}
		]
	},
	plugins: [
		// this tells the library to find any files that were used in the rules
		// above. Here it will take the files caught from the rule above and add them
		// to the style.css file it's creating below
		new ExtractTextPlugin('style.css')
	]
}

module.exports = config;
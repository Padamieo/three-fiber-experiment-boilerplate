const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const SOURCE_PATH = path.join(process.cwd(), 'src');
const DIST_PATH = path.join(process.cwd(), 'dist');

module.exports = {
	devtool: 'source-map',
	context: SOURCE_PATH,
	entry: {
		app: './index.ts',
	},
	resolve: {
		modules: [
			SOURCE_PATH,
			'node_modules'
		],
		extensions: ['.js', '.ts', '.tsx'],
		symlinks: false,
		alias: {
			react: path.resolve('./node_modules/react'),
			'react-dom': path.resolve('./node_modules/react-dom'),
		}
	},
	output: {
		path: DIST_PATH,
		filename: 'main.js'
	},
	module: {
		rules: [
		{
			test: /\.html$/,
			loader: 'html-loader',
		},
		{
			test: /\.tsx?$/,
			loader: 'babel-loader',
		},
		{
			test: /\.(png|jpg|gif)$/,
			loader: 'url-loader',
			options: {
			  // inline base64 URLs for <=xk images
			  limit: 2000,
			},
		},{
			test: /\.(glb|gtlf|bin)$/,
			use: [{
				loader: 'url-loader',
				options: {
					name: 'assets/[hash]-[name].[ext]'
				}
			}]
		}]
	},
	plugins: [
		new CleanWebpackPlugin(['dist'], {root: process.cwd()}),
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	]
};

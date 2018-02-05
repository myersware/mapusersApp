const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
		entry: './src/index.js',
		output: { 
			filename: 'app.js', 
			path: path.join(__dirname, "bin"),
			publicPath: "/bin/"
		},
		plugins: [
			      new CleanWebpackPlugin(['bin/*.*']),
			    ],
		devtool: "source-map",
		devServer: {
			contentBase: path.join(__dirname, "src"),
			publicPath: "/bin/",
			port: 8000
		}
}

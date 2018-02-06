const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

var dir_js = path.resolve(__dirname, 'src');

module.exports = {
		entry: './src/index.js',
		output: { 
			filename: 'app.js', 
			path: path.join(__dirname, "bin"),
			publicPath: "/bin/"
		},
	    plugins: [
	    	new CleanWebpackPlugin(['bin/*.*'])
	      ],
	    module: {
	    	rules: [
	    	    {
	    	      test: /\.js$/,
	    	      exclude: /(node_modules)/,
	    	      use: {
	    	        loader: 'babel-loader',
	    	        options: {
	    	          presets: ['@babel/preset-env'],
	    	          plugins: [
	    	        	  'babel-plugin-transform-class-properties'
	    	          ]
	    	        }
	    	      }
	    	    }
	    	  ]
	    },
		devtool: "source-map",
		devServer: {
			contentBase: path.join(__dirname, "src"),
			publicPath: "/bin/",
			port: 8000
		}
}

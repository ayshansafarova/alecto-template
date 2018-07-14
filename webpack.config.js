const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, "dist")
	},
	// devServer: {
	// 	contentBase: path.join(__dirname, "dist"),
	// 	port: 8080
	// },
	module: {
		rules:[
			{
				test: /\.css$/,
				use: [
					{loader: "style-loader"},
					{loader: "css-loader"}
				]
			},
			{
				test: /\.scss$/,
				use: [
					{loader: "style-loader"},
					{loader: "css-loader"},
					{
						loader: "postcss-loader",
						options: {
							plugins: function () {
								return[
									require("precss"),
									require("autoprefixer")
								];
							}
						}
					},
					{loader: "sass-loader"}
				]
			},
			{
				test: /\.png$/,
				use: [
					{loader: "url-loader"}
				]
			},
			{
		        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
		        use: [{
		           	loader: 'url-loader', //url
		           	options: {
		            name: '[name].[ext]',
		            outputPath: 'fonts/',    // where the fonts will go
		            publicPath: '../'       // override the default path
		            }
		        }]
		    }
		    			// {
			//     test: /\.(jpe?g|png|gif|svg)$/i, 
			//     use: [
			//     	{loader: "file-loader?name=/images/[name].[ext]"}
			//     ]
			// },
		]
	}
}
const path = require('path');
const loader = require("style-loader");
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    // mode: "development",
    mode: "production",

	

    entry: './src/index.js',

    output: {
        // publicPath: 'http://domainName.com/',
		publicPath: "",

		// path: './dist',
		path: path.resolve(__dirname, "./dist"),
        filename: "js/bundle.js",
	},

	devServer: {
		static: {
		  directory: path.join(__dirname, ''),
		},
		historyApiFallback: true, // true for index.html upon 404, object for multiple paths
		compress: true,
		port: 8080,
		allowedHosts: 'auto',
	},

    module: {
        rules: [
            {
				test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
				// exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						// ES6+ Support
                        presets: ['@babel/preset-env']
						// presets: ["@babel/env"],
						// plugins: ["transform-class-properties"],
						// plugins: ['@babel/plugin-proposal-class-properties']
					},
				},
			},

            {
				test: /\.css$/,
				use: [
					// 'style-loader', 'css-loader',

					MiniCssExtractPlugin.loader, "css-loader",
				],
			},

			{
				test: /\.scss$/,
				use: [
					// Chain of Loaders Invoke RTL direction
					// 'style-loader', 'css-loader', 'sass-loader',
                    MiniCssExtractPlugin.loader, "css-loader", "sass-loader",
				],
			}
        ],
    },

    plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		}),
        new MiniCssExtractPlugin({
            filename: "css/theme.css",
        }),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
        new HtmlWebpackPlugin({
            filename: 'pdp.html',
            template: 'src/pdp.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'plp.html',
			template: 'src/plp.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'faqs.html',
			template: 'src/faqs.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'blog.html',
			template: 'src/blog.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'contact.html',
			template: 'src/contact.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'aboutus.html',
			template: 'src/aboutus.html'
		}),
		
		
		// new CopyPlugin({ 
		// 	patterns: [
		// 		{ from: 'src/images', to: 'images'  },				
		// 	],
		// })
    ],
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	}
};
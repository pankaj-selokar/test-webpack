const port = process.env.PORT || 8080; // Define the port to be used, using either the environment variable PORT or 8080 as a fallback
const path = require('path'); // Import the 'path' module from Node.js for file path manipulation
const HtmlWebPackPlugin = require('html-webpack-plugin'); // Import the HtmlWebpackPlugin for generating HTML files
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Import the CleanWebpackPlugin for cleaning the output directory
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Import the MiniCssExtractPlugin for extracting CSS into separate files
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); // Import the CssMinimizerPlugin for minifying CSS
const CopyPlugin = require('copy-webpack-plugin'); // Import the CopyPlugin for copying static assets

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'), // Define the output directory for bundled files
        filename: 'main.[contenthash].js', // Define the filename for the main JavaScript bundle with content hash for cache busting
        chunkFilename: '[name].bundle.[contenthash].js', // Define the filename for dynamically imported chunks
        clean: true, // Clean the output directory before each build
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Define a rule for JavaScript and JSX files
                exclude: /node_modules/, // Exclude node_modules from being processed
                use: {
                    loader: "babel-loader" // Use Babel loader for transpiling JavaScript files
                }
            },
            {
                test: /\.html$/, // Define a rule for HTML files
                use: [{
                    loader: 'html-loader' // Use html-loader for processing HTML files
                }]
            },
            {
                test: /\.css$/, // Define a rule for CSS files
                use: [
                    MiniCssExtractPlugin.loader, // Use MiniCssExtractPlugin to extract CSS into separate files
                    'css-loader' // Use css-loader to resolve CSS imports
                ]
            },
            {
                test: /\.(svg|png|jpg)$/, // Define a rule for SVG, PNG, and JPG image files
                use: [{
                    loader:'file-loader', // Use file-loader for handling image files
                    options:{
                        name:'[name].[contenthash].[ext]', // Define the filename pattern for the output images with content hash for cache busting
                        outputPath:'images/' // Define the output directory for images
                    }
                }]               
            }
        ]
    },
    plugins: [  
        new HtmlWebPackPlugin({
            template: './src/index.html', // Define the template HTML file for HtmlWebpackPlugin
            minify:{
                removeAttributeQuotes:true, // Remove attribute quotes in HTML elements
                collapseWhitespace:true, // Collapse whitespace in HTML elements
                removeComments:true, // Remove comments from HTML
            }
        }),
        new CssMinimizerPlugin(), // Use CssMinimizerPlugin to minimize CSS
        new CleanWebpackPlugin(), // Use CleanWebpackPlugin to clean the output directory
        new MiniCssExtractPlugin({filename:'[name].[contenthash].css'}), // Define the filename pattern for extracted CSS files
        new CopyPlugin({
            patterns:[
                {from:'public', to: 'images'}, // Copy files from the 'public' directory to the 'images' directory in the output folder
            ]
        })
    ],
    devServer: {
        host: 'localhost', // Define the host for the development server
        port: port, // Define the port for the development server
        historyApiFallback: true, // Enable history API fallback for SPAs
        open: true, // Automatically open the default browser when the server starts
    },
    optimization: {
        splitChunks: {
            chunks: 'all', // Enable code splitting for all types of chunks
        },
        minimize: true, // Enable minimization of the output bundles
    }
};

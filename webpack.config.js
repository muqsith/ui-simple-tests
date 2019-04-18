const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const customMiddleware = require('./server/lib');

const WEBPACK_MODE = process.env.npm_lifecycle_event;


const config = {
    entry: {
            app: path.resolve(__dirname, 'js', 'app.js'),
            headertest: path.resolve(__dirname, 'js', 'header-test.js'),
            tinymcetest: path.resolve(__dirname, 'js', 'tinymce-test.js'),
            dragdrop: path.resolve(__dirname, 'js', 'dragdrop.js'),
            imageslider: path.resolve(__dirname, 'js', 'image-slider.js'),
            assorted: path.resolve(__dirname, 'js', 'assorted-tests.js'),
            browserfingerprint: path.resolve(__dirname, 'js', 'browser-fingerprint.js'),
            d3test: path.resolve(__dirname, 'js', 'd3test.js'),
            koapp: path.resolve(__dirname, 'js', 'koapp'),
            simplejstests: path.resolve(__dirname, 'js', 'simple-js-tests'),
            mediatest: path.resolve(__dirname, 'js', 'media-test.js')
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].[hash].js'
    },
    devtool: (WEBPACK_MODE === 'build') ? false : 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader?modules=true&localIdentName=[local]', 'postcss-loader']
                })
            },
            {
                test: /\.js[x]?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.ko$/,
                use: 'html-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 8899,
        before: customMiddleware
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'htmls', 'index.html'),
            filename: 'index.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'htmls', 'header-test.html'),
            filename: 'header-test.html',
            chunks: ['headertest']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'htmls', 'tinymce-test.html'),
            filename: 'tinymce-test.html',
            chunks: ['tinymcetest']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'htmls', 'drag-drop.html'),
            filename: 'drag-drop.html',
            inject: 'head',
            chunks: ['dragdrop']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'htmls', 'image-slider.html'),
            filename: 'image-slider.html',
            chunks: ['imageslider']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'htmls', 'assorted-tests.html'),
            filename: 'assorted-tests.html',
            chunks: ['assorted']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'htmls', 'browser-fingerprint.html'),
            filename: 'browser-fingerprint.html',
            chunks: ['browserfingerprint']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'htmls', 'd3test.html'),
            filename: 'd3test.html',
            chunks: ['d3test']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'htmls', 'google-maps.html'),
            filename: 'google-maps.html'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'htmls', 'koapp.html'),
            filename: 'koapp.html',
            chunks: ['koapp']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'htmls', 'media-test.html'),
            filename: 'media-test.html',
            chunks: ['mediatest']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'htmls', 'simple-js-tests.html'),
            filename: 'simple-js-tests.html',
            chunks: ['simplejstests']
        }),
        //new ExtractTextPlugin('main.css'),
        new ExtractTextPlugin('[name]-[hash].min.css'),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'images'),
                to: path.resolve(__dirname, 'public', 'images')
            },
            {
                from: path.resolve(__dirname, 'htmls'),
                to: path.resolve(__dirname, 'public')
            },
            {
                from: path.resolve(__dirname, 'node_modules','tinymce','themes'),
                to: path.resolve(__dirname, 'public', 'themes')
            },
            {
                from: path.resolve(__dirname, 'node_modules','tinymce','plugins'),
                to: path.resolve(__dirname, 'public', 'plugins')
            },
            {
                from: path.resolve(__dirname, 'node_modules','tinymce','skins'),
                to: path.resolve(__dirname, 'public', 'skins')
            },
            {
                from: path.resolve(__dirname, '3rdparty'),
                to: path.resolve(__dirname, 'public', '3rdparty')
            }
        ])
    ]
};

if (WEBPACK_MODE === 'build') {
    config.plugins = [...config.plugins, new UglifyJsPlugin()]
}

module.exports = config;

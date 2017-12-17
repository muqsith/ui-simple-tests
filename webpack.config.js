const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    WEBPACK_MODE = process.env.npm_lifecycle_event
    ;

const config = {
    entry: path.resolve(__dirname, 'js', 'app.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js'
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
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 8899
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'htmls', 'index.html')
        }),
        new ExtractTextPlugin('main.css'),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'images'),
                to: path.resolve(__dirname, 'public', 'images')
            },
            {
                from: path.resolve(__dirname, 'htmls'),
                to: path.resolve(__dirname, 'public')
            }
        ])
    ]
};

if (WEBPACK_MODE === 'build') {
    config.plugins = [...config.plugins, new UglifyJsPlugin()]
}

module.exports = config;
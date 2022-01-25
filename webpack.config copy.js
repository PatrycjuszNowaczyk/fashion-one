const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let path = require('path');

module.export = {
    entry: ['./src/js/app.js', './src/css/style.scss'],
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    // 'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                                // implementation: require.resolve("sass")
                        }
                    }
                ]
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "[name].css"
    })],
    resolve: {
        extensions: ['.js', '.scss'],
        modules: [path.resolve(__dirname, 'src/js')]
    }
}
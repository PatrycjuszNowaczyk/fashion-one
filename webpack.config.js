const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        'js/scripts': './src/js/app.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "css/styles.css"
    })],
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
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        // options: {
                        //     publicPath: "/public/path/to/",
                        // }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                type: "asset/resource",
                generator: {
                    filename: 'img/[name][ext]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'img': path.join(__dirname, 'src/img/')
        }
    }
}
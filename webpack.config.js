const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: ['./src/js/index.js', './src/css/style.css'],
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    },
    optimization: {
      splitChunks: {
          chunks: "all"
      },
        minimizer: [
            new UglifyJsPlugin({
                extractComments: true
            }),
        ],
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "src/css"),
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {}
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            url: false
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            sourceMap: true,
                            plugins: () => [
                                require("cssnano")({
                                    preset: [
                                        "default",
                                        {
                                            discardComments: {
                                                removeAll: true
                                            }
                                        }
                                    ]
                                })
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/main.css"
        }),
        new CopyWebpackPlugin([
            // {
            //     from: "./src/font",
            //     to: "./font"
            // },
            // {
            //     from: "./src/svg",
            //     to: "./svg"
            // },
            {
                from: "./src/img",
                to: "./img"
            },
            {
                from: "./src/json",
                to: "./json"
            }
        ]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/html/index.html',
        })
    ]
};
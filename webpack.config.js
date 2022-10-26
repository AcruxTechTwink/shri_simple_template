const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatoscopePlugin = require('@statoscope/webpack-plugin').default;

const config = {
    mode: 'production',
    target: 'web',
    performance: {
        hints: false,
    },
    optimization: {
        splitChunks: {
            minSize: 10000,
            maxSize: 250000,
        },
    },
    entry: {
        main: './src/index.js',
        about: './src/pages/About.js',
        home: './src/pages/Home.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new StatoscopePlugin({
            saveReportTo: './report-[name]-[hash].html',
            saveStatsTo: './stats-[name]-[hash].json',
            saveOnlyStats: false,
            open: false,
            name: "shri_simple_template"
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    module: {
        rules: [                                       
            {
                test: /\.js?$/,                       
                exclude: /(node_modules)/,             
                loader: 'babel-loader',                
                options: {
                    presets: [
                       ['@babel/preset-react', {"runtime": "automatic"}]
                    ], 
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            { 
                test: /\.(html)$/, 
                use: ['html-loader'] 
            },
        ],
    },
    // @TODO optimizations
    // @TODO lodash treeshaking
    // @TODO chunk for lodash
    // @TODO chunk for runtime
    // @TODO fallback for crypto
};

module.exports = config;

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if(process.env.NODE_ENV == 'test') {
    require('dotenv').config({path: '.env.test'})
} else if (process.env.NODE_ENV == 'development') {
    require('dotenv').config({path: '.env.development'})
}

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production'
    const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' }); 

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        target: ['web', 'es5'],
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            url: false
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            }]
        },
        plugins: [
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTHDOMAIN': JSON.stringify(process.env.FIREBASE_AUTHDOMAIN),
                'process.env.FIREBASE_DATABASEURL': JSON.stringify(process.env.FIREBASE_DATABASEURL),
                'process.env.FIREBASE_PROJECTID': JSON.stringify(process.env.FIREBASE_PROJECTID),
                'process.env.FIREBASE_STORAGEBUCKET': JSON.stringify(process.env.FIREBASE_STORAGEBUCKET),
                'process.env.FIREBASE_MESSAGINGSENDERID': JSON.stringify(process.env.FIREBASE_MESSAGINGSENDERID),
                'process.env.FIREBASE_APPID': JSON.stringify(process.env.FIREBASE_APPID),
                'process.env.FIREBASE_MEASUREMENTID': JSON.stringify(process.env.FIREBASE_MEASUREMENTID)
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            static: {
                directory: path.join(__dirname, 'public'),
              },
              devMiddleware: {
                index: true,
                publicPath: '/dist/',
              },    
            compress: true,
            historyApiFallback:true,
          },
          resolve: {
            extensions: ['.ts', '.js'],
          }
    }
}

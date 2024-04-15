const path = require('path');
const Htmlwebpackplugins = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    module:{
        rules: [{
            test: /\.css$/i,
            use:['style-loader','css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(otf|ttf)$/i,
                type: 'asset/resource'
            },
            {
              test: /\.(?:js\mjs\cjs)$/,
              exclude: /node_modules/,
              use:{
                loader: 'babel-loader',
                options:{
                  presets:[
                    ['babel/preset-env',{targets:"defaults"}]
                  ]
                }
              }
            }
        ]
      },
      devtool: 'inline-source-map',
      devServer: {
        static: './dist',
      },
      plugins:[
        new Htmlwebpackplugins ({
            title:'Todo List',
            template:'./src/index.html'
        })
      ],
      
    };
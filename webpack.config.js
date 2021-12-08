const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';
// criado variavel para identificar o ambiente se seria producao ou desenvolvimento

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  // source map no webpack serve no console eu ver exatamente o meu codigo original.
  entry: path.resolve(__dirname, 'src', 'index.jsx' ),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve:{
    extensions: ['.js', '.jsx'],
  },
  devServer:{
    static: path.resolve(__dirname, 'public'),
    hot: true,
  },
  plugins: [
    isDevelopment &&  new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
   ].filter(Boolean),
  module:{
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins:[
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        }, 
        //integracao do babel com webpack, yarn add babel-loader
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'], 
      }
    ],
  }
};
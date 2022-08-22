const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
// const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js[name].js',
    clean:true
  },
  module: {
    rules:[
      {
        test: /\.vue$/,
        use:['vue-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader:'babel-loader'
      },
      {
        test: /\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html',
      title:'芜湖起飞'
    }),
    new VueLoaderPlugin(),
    // new CleanWebpackPlugin()
  ],
  devServer: {
    // contentBase: path.join(__dirname, './dist'), 
    static: {
      directory:path.join(__dirname,'./dist')
    },
    //压缩
    compress: true,
    hot: true,
    open:true,
    port: 8080,
  }
  
}
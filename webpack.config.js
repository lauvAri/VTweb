const path = require('path');

module.exports = {
  entry: './src/audioToText.js', // 指定入口文件的位置
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist') // 指定输出文件的位置
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' // 如果你安装了 Babel，则在这里指定它
        }
      }
    ]
  }
};
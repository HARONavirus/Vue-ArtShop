const path = require('path');

module.exports = {
  mode: 'development', // режим разработки
  entry: './src/main.js', // точка входа
  output: {
    path: path.resolve(__dirname, 'dist'), // папка для сборки
    filename: 'bundle.js' // имя выходного файла
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader' // обработчик .vue файлов
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader' // обработчик .css файлов
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' // обработчик .js файлов
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/images' // папка для размещения изображений
        }
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '.js', '.json']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // корневая папка для сервера
    compress: true,
    port: 8080 // порт для сервера
  }
};
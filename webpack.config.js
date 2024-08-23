const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/pages/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
    open: true,
  },
  resolve: {
    alias: {
      '~swiper': path.resolve(__dirname, 'node_modules/swiper'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1, sourceMap: true },
          },
          { loader: 'resolve-url-loader', options: { sourceMap: true } },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require('sass'),
              sassOptions: {
                sourceMap: true,
                outputStyle: 'compressed',
              },
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|svg|ico|jpe?g|gif|webmanifest)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: '[name].[ext]',
              outputPath: 'img',
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: '[name].[ext]',
              outputPath: 'fonts',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['main'],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/franchise.html',
      filename: 'franchise.html',
      chunks: ['main'],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/policy.html',
      filename: 'policy.html',
      chunks: ['main'],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/terms-of-use.html',
      filename: 'terms-of-use.html',
      chunks: ['main'],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/filial.html',
      filename: 'filial.html',
      chunks: ['main'],
      minify: false,
    }),

    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
  stats: {
    children: true,

    warnings: true,

    errors: true,
  },
};

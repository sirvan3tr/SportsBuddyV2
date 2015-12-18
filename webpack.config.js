var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
        jquery: "../node_modules/jquery/dist/jquery.js"
    }
  },
  watch: true,
  module: {
    loaders: [
      { test: require.resolve("jquery"), loader: "imports?jQuery=jquery" },
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' },
      { test: /\.scss$/, loader: "style!css!sass?outputStyle=expanded" },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass') },

      // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
      // loads bootstrap's css.
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        title: "Shared Todo App",
        templateContent: "<!DOCTYPE html><html><head><script src=\"https://code.jquery.com/jquery-2.1.4.min.js\"></script><meta http-equiv=\"Content-type\" content=\"text/html; charset=utf-8\"/><title>{%= o.htmlWebpackPlugin.options.title %}</title></head><body><div class=\"container\" id=\"container\"></div></body></html>",
        inject: "body"
      }),
      new ExtractTextPlugin('public/main.css', {
          allChunks: true
      }),
      new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
      })
  ],
  externals: {
    "jquery": "jQuery"
  }
};


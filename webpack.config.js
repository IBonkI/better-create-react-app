const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  // defaults to ./src
  // Here the application starts executing
  // and webpack starts bundling
    entry: './app/index.js',

  // options related to how webpack emits results
    output: {
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
        path: path.resolve(__dirname, 'dist'),
    // the filename template for entry chunks
        filename: 'index_bundle.js'
    },

// configuration regarding modules
module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
    ],
  },

    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
}
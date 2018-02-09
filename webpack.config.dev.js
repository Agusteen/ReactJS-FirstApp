//Dependencies
import webpack from 'webpack';
import path from 'path';

//Paths
const PATHS = {
  index: path.join(__dirname, 'src/index'),
  build: path.join(__dirname, '/dist'),
  src: path.join(__dirname, '/src')
};

//Webpack Configuration
export default {
  devtool: 'cheap-modulse-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    PATHS.index
  ],
  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['babel-loader'],
      include: PATHS.src
    },
    {
      test: /(\.css)$/,
      loaders: ['style-loader', 'css-loader']
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
    }
  ]
  }
};

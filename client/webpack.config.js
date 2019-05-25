const Path = require('path');
const webpack = require('webpack');
const Rimraf = require('rimraf');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  LoaderOptionsPlugin,
  DefinePlugin,
  HotModuleReplacementPlugin,
} = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = () => {
  const env = process.env || {};
  const IS_BUILD = env.WEBPACK_SERVE ? true : false;
  const MODE = IS_BUILD ? 'development' : 'production';
  const PORT = env.port || 27000;
  const CHUNK_TYPE = !IS_BUILD ? 'hash' : 'hash';
  const BUILD_PATH = Path.resolve(__dirname, 'build');
  const URL_LOADER_LIMIT = env.urlloaderlimit || 65536;
  const BASE_URL = env.baseurl || '';
  const ANALYZE = env.analyze || false;
  // call dotenv and it will return an Object with a parsed key
  const myenv = dotenv.config().parsed;

  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(myenv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});
  console.log(`Settings:`);
  console.log(`- Mode: ${MODE}`);

  if (IS_BUILD) {
    console.log(`- Build path: ${BUILD_PATH}`);
  } else {
    console.log(`- Port: ${PORT}`);
  }

  console.log(`- Url loader limit: ${URL_LOADER_LIMIT} bytes`);
  console.log(`- Base url: "${BASE_URL}"`);
  console.log(``);

  if (IS_BUILD) {
    Rimraf.sync(BUILD_PATH);
  }

  function createStyleSheetLoader(modules) {
    let rules = [
      modules
        ? {
            loader: 'css-loader',
            query: {
              modules: true,
              minimize: false,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          }
        : {
            loader: 'css-loader',
          },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: 'resolve-url-loader',
      },
      {
        loader: 'sass-loader',
        query: {
          sourceMap: true,
        },
      },
    ];

    return {
      test: /(\.css$|\.scss$)/,
      include: [Path.resolve(__dirname, modules ? 'src' : 'node_modules')],
      use: IS_BUILD
        ? ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: rules,
          })
        : [
            {
              loader: 'style-loader',
            },
            ...rules,
          ],
    };
  }

  return {
    mode: MODE,
    devtool: !IS_BUILD ? 'none' : 'source-map',
    performance: {
      // uncomment if you need warnings
      hints: false, // IS_PROD && IS_BUILD ? 'warning' : false
    },
    entry: {
      app: ['@babel/polyfill', './src/client/index.jsx'],
    },
    output: {
      path: BUILD_PATH,
      filename: `content/[name].[${CHUNK_TYPE}].js`,
      publicPath: IS_BUILD ? '/' + BASE_URL : '/',
    },
    resolve: {
      extensions: [
        '.mjs',
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
        '.css',
        '.scss',
        '.hbs',
        '.json',
      ],
      alias: {
        '~': Path.resolve(__dirname, 'src'),
      },
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
          },
        },
      },
    },
    serve: {
      hot: true,
      compress: true,
      port: PORT,
      historyApiFallback: true,
      watchOptions: {
        ignored: /node_modules/,
      },
      contentBase: [Path.resolve(__dirname, 'public')],
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      !IS_BUILD &&
        new UglifyJsPlugin({
          parallel: true,
          sourceMap: true,
        }),
      ANALYZE &&
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
        }),
      IS_BUILD &&
        new CopyWebpackPlugin([
          {
            from: 'public/*.ico',
            to: BUILD_PATH,
          },
        ]),
      !IS_BUILD && new HotModuleReplacementPlugin(),
      new DefinePlugin({
        'process.env': {
          ENV: JSON.stringify(MODE),
          NODE_ENV: JSON.stringify(MODE),
          BASE_URL: !IS_BUILD ? JSON.stringify(BASE_URL) : 'null',
        },
      }),
      new LoaderOptionsPlugin({
        options: {
          eslint: {
            emitErrors: !IS_BUILD,
            failOnHint: false,
          },
          context: '/',
        },
      }),
      new ExtractTextPlugin({
        filename: `content/[name].[${CHUNK_TYPE}].css`,
        disable: false,
        allChunks: true,
      }),
      new HtmlWebpackPlugin({
        template: Path.resolve(__dirname, 'public/index.hbs'),
        templateParameters: {
          PUBLIC_URL: IS_BUILD && BASE_URL ? '/' + BASE_URL : '',
        },
        inject: 'body',
        baseUrl: '/',
      }),
    ].filter(v => !!v),
    module: {
      rules: [
        createStyleSheetLoader(true),
        createStyleSheetLoader(false),
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            cacheDirectory: true,
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          loader: 'source-map-loader',
          exclude: [/node_modules/, /build/, /__test__/],
        },
        {
          test: /(\.txt$|\.md|gql)/,
          use: 'raw-loader',
        },
        {
          test: /\.json$/,
          loader: 'json-loader',
        },
        {
          test: /\.hbs$/,
          loader: 'handlebars-loader',
        },
        {
          test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)$/,
          loader: 'url-loader',
          query: {
            limit: URL_LOADER_LIMIT,
          },
        },
      ],
    },
  };
};

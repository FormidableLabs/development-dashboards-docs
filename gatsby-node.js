exports.modifyWebpackConfig = ({ config }) => {
  // Do not transform SVG into data-uris
  config.loader('url-loader', {
    test: /\.(jpg|jpeg|png|gif|mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
    loader: 'url',
    query: {
      limit: 10000,
      name: 'static/[name].[hash:8].[ext]'
    }
  });

  // Instead load <svg> elements directly into the DOM
  config.loader('raw-loader', {
    test: /\.(svg)(\?.*)?$/,
    loader: 'raw'
  });
};

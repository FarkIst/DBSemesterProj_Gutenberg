require('es6-promise').polyfill();
require('isomorphic-fetch');

const getTitles = city_name => {
  console.log('starting fetch call');
  let url = process.env.API + 'BooksByCity';
  let options = {
    // your default options
    credentials: 'same-origin',
    redirect: 'error',
    queryParams: {
      name: city_name,
    },
    ...options,
  };

  if (options.queryParams) {
    url +=
      (url.indexOf('?') === -1 ? '?' : '&') + queryParams(options.queryParams);
    delete options.queryParams;
  }
  var params = {
    name: city_name,
  };
  return fetch(url, options);
};

function queryParams(params) {
  return Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
}

export { getTitles };

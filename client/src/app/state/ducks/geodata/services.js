require('es6-promise').polyfill();
require('isomorphic-fetch');

const getBooks = (lat, lng) => {
  let url = process.env.API + 'BookByGeo';
  let options = {
    // your default options
    credentials: 'same-origin',
    redirect: 'error',
    queryParams: {
      latitude: lat,
      longitude: lng,
    },
    ...options,
  };

  if (options.queryParams) {
    url +=
      (url.indexOf('?') === -1 ? '?' : '&') + queryParams(options.queryParams);
    delete options.queryParams;
  }
  return fetch(url, options);
};

function queryParams(params) {
  return Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
}

export { getBooks };

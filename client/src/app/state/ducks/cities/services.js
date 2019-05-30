require('es6-promise').polyfill();
require('isomorphic-fetch');

const getCities = title => {
  let url = process.env.API + 'CitiesByBook';
  let options = {
    // your default options
    credentials: 'same-origin',
    redirect: 'error',
    queryParams: {
      title,
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

export { getCities };

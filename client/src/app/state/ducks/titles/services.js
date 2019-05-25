require('es6-promise').polyfill();
require('isomorphic-fetch');

const getTitles = () => {
  fetch(process.env.API + 'CitiesByBook`').then(function(response) {
    if (response.status >= 400) {
      throw new Error('Bad request');
    }
    return response.json();
  });
};

export { getTitles };

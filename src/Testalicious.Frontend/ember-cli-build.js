'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const merge = require('broccoli-merge-trees');
const fontelloToLess = require('./tasks/fontello-to-less');

module.exports = function(defaults) {
  const app = new EmberApp(defaults, {
    'ember-fetch': {
      preferNative: true
    },
    babel: {
      plugins: [
        '@babel/plugin-proposal-numeric-separator',
        '@babel/plugin-transform-literals',
        '@babel/plugin-proposal-optional-chaining'
      ]
    },
    'ember-cli-babel': {
      includePolyfill: true,
      includeExternalHelpers: true
    },
    fingerprint: {
      extensions: ['js', 'css', 'png', 'jpg', 'gif', 'map', 'svg', 'eot', 'ttf', 'woff', 'woff2']
    }
  });

  fontelloToLess('./app/styles/fontello-icon-definitions.less');

  return merge([app.toTree()]);
};

/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'jedrula-app',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    fastboot: {
      hostWhitelist: [/^jedrula.ddns.net:\d+$/, /^192.168.1.100:\d+$/, /^88.156.95.104:\d+$/, /^192.168.1.102:\d+$/, /^192.168.0.185:\d+$/, /^78.88.255.144:\d+$/,  /^78.88.253.196:\d+$/, /^localhost:\d+$/],
    }
  };

  if (environment === 'development') {
    ENV.APP.API_SERVER_URL = 'http://localhost:4000';

    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'lan') {
    // ENV.APP.API_SERVER_URL = 'https://77599829.ngrok.io';
    // TODO do https!
    ENV.APP.API_SERVER_URL = 'http://192.168.0.155:4000'
  }

  if (environment === 'production') {
    // ENV.APP.API_SERVER_URL = 'https://77599829.ngrok.io';
    // TODO do https!
    ENV.APP.API_SERVER_URL = 'http://jedrula.ddns.net:4000';
    // ENV.APP.API_SERVER_URL = 'http://88.156.95.104:4000'
  }

  ENV['ember-simple-auth'] = {
    authorizer: 'authorizer:token',
    routeAfterAuthentication: 'blog',
  };

  ENV['ember-simple-auth-token'] = {
      serverTokenEndpoint: `${ENV.APP.API_SERVER_URL}/tokens`, // TODO spin a new server for auth only, share secret
    };

  return ENV;
};

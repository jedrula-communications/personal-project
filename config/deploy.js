/* eslint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {}
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'lan') {
    ENV.build.environment = 'lan';
    ENV.rsync2 = {
      username: 'pi',
      host: '192.168.1.102',
      releasesPath: '/home/pi/www/jedrula-app'
    }
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV.rsync2 = {
      username: 'pi',
      host: '192.168.1.102',
      releasesPath: '/home/pi/www/jedrula-app'
    }
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};

/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    'revision-data': {
      type: 'git-commit'
    }
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

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV.pipeline = {
      activateOnDeploy: true
    }

    const accessKeyId = 'AKIAJQIG3MZR4L67CCUA';
    const secretAccessKey = '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';
    const bucket = "jedrek";
    const region =  "us-west-2";

    ENV['s3-index'] = {
      accessKeyId,
      secretAccessKey,
      bucket,
      region,
      allowOverwrite: true
    },
    ENV['s3'] = {
      accessKeyId,
      secretAccessKey,
      bucket,
      region,
    }
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};

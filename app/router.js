import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('blog', function() {});
  this.route('portfolio', { path: '/' });

  this.route('post', {
    path: 'post/:post_id'
  }, function() {
    this.route('edit');
  });

  this.route('tag', {
    path: 'tag/:tag_id'
  }, function() {
    this.route('edit');
  });
  this.route('create-post');
  this.route('login');
  this.route('register');
  this.route('tags');
  this.route('skills');
  this.route('education');
  this.route('tutoring');
  this.route('contact');
});

export default Router;

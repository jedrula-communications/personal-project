import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('blog', { path: '' }, function() {});
  this.route('portfolio');

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
});

export default Router;

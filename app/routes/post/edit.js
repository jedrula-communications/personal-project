import Ember from 'ember';

const { RSVP: { hash }} = Ember;

export default Ember.Route.extend({
  model() {
    return hash({
      post: this.modelFor('post'),
      categories: this.get('store').findAll('tag'),
    });
  },
  actions: {
    put(post, data) {
      return post.save(data).then(() => this.transitionTo('post', post));
    },
  }
});

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
      // TODO dry this map function or simply pass records up
      data.categories = data.categories.map((categoryId) => {
        return this.get('store').peekRecord('tag', categoryId);
      });
      post.setProperties(data);
      post.save().then(() => this.transitionTo('post', post));
    },
  }
});

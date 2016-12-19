import Ember from 'ember';

const { RSVP: { hash }, inject: { service }} = Ember;

export default Ember.Route.extend({
  sessionAccount: service(),
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
      // TODO this is probably something we do not want! it overrides author with every edit!
      data.author = this.get('sessionAccount.currentUserRecord');
      post.setProperties(data);
      post.save().then(() => this.transitionTo('post', post));
    },
  }
});

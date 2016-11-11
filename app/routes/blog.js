import Ember from 'ember';

const {RSVP: { hash }, inject: { service }} = Ember;

export default Ember.Route.extend({
  categories: service(),
  model() {
    // TODO call with query param?
    return hash({
      posts: this.get('store').findAll('post'),
      categories: this.get('categories').fetch(),
    });
  },
});

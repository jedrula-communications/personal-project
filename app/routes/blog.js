import Ember from 'ember';

const {RSVP: { hash }} = Ember;

export default Ember.Route.extend({
  queryParams: {
    categories: {
      refreshModel: true,
    },
    public: {
      refreshModel: true,
    },
  },
  model(queryParams) {
    return hash({
      // TODO this should work better now its using something like an OR, it should use AND
      posts: this.get('store').query('post', { filter: queryParams }),
      availableCategories: this.get('store').findAll('tag'),
    });
  },
});

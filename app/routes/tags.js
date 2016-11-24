import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('tag');
  },
  actions: {
    create(title) {
      this.get('store')
        .createRecord('tag', { title })
        .save()
        .then(() => this.transitionTo('tags'));
    }
  }
});

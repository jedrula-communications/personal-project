import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    // TODO handle error
    put(tag, title) {
      tag.setProperties({ title });
      tag.save()
         .then(() => this.transitionTo('tags'));
    },
  }
});

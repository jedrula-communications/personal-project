import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    persist(form) {
      return this.get('store').createRecord('post', form).save();
    }
  }
});

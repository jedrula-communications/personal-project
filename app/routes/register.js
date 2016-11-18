import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    register(identification, password) {
      const credentials = {
          identification,
          password,
      };
      this.get('store').createRecord('user', credentials).save();
    }
  }
});

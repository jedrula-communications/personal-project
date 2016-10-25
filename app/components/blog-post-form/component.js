import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit() {
      console.log('lets submit', arguments)
    }
  }
});

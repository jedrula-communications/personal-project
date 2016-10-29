import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit() {
      const form = this.getProperties('body', 'title');
      this.get('save')(form);
    }
  }
});

import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  category: null,
  actions: {
    submit() {
      const form = this.getProperties('title', 'body', 'category');
      this.get('save')(form);
    }
  }
});

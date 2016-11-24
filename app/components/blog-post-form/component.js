import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  categories: null,
  actions: {
    submit() {
      const form = this.getProperties('title', 'body', 'categories');
      this.get('save')(form);
    }
  }
});

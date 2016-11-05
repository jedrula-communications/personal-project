import Ember from 'ember';

const { A, Component } = Ember;

export default Component.extend({
  categories: ['css', 'heroku', 'ember', 'node', 'productivity', 'misc'],
  category: null,
  actions: {
    submit() {
      const formProperties = { title: '', body: '', category: '' };
      const form = this.getProperties(Object.keys(formProperties));
      this.get('save')(form).then(this.setProperties.bind(this, formProperties));
    }
  }
});

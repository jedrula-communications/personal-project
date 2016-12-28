import Ember from 'ember';

const { A, Component } = Ember;

export default Component.extend({
  formCategories: A(),
  actions: {
    submit() {
      const form = this.getProperties('title', 'gist', 'body', 'formCategories');
      this.get('save')({
        title: form.title,
        body: form.body,
        categories: form.formCategories,
        gist: form.gist,
      });
    },
    removeItem(item) {
      this.get('formCategories').removeObject(item.get('id'));
    },
    addItem(item) {
      this.get('formCategories').addObject(item.get('id'));
    },
  },
});

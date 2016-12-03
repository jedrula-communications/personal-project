import Ember from 'ember';
const { Route } = Ember;

export default Route.extend({
  model() {
    return this.get('store').findAll('tag');
  },
  actions: {
    persist(form) {
      // TODO add some sanity to all that mutability and categories/tags hell
      form.categories = form.categories.map((categoryId) => {
        return this.get('store').peekRecord('tag', categoryId);
      })
      const newPost = this.get('store').createRecord('post', form);
      return newPost.save()
        .then(() => {
            this.transitionTo('post', newPost);
        });
    },
  }
});

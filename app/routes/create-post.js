import Ember from 'ember';
const { Route, inject: { service } } = Ember;

export default Route.extend({
  sessionAccount: service(),
  model() {
    return this.get('store').findAll('tag');
  },
  actions: {
    persist(form) {
      // TODO add some sanity to all that mutability and categories/tags hell
      form.categories = form.categories.map((categoryId) => {
        return this.get('store').peekRecord('tag', categoryId);
      });
      form.author = this.get('sessionAccount.currentUserRecord');
      const newPost = this.get('store').createRecord('post', form);
      return newPost.save()
        .then(() => {
            this.transitionTo('post', newPost);
        });
    },
  }
});

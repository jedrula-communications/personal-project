import Ember from 'ember';
const { Route } = Ember;

export default Route.extend({
  model() {
    return this.get('store').findAll('tag');
  },
  actions: {
    persist(form) {
      // FIXME rollback if unsuccesful!
      const newPost = this.get('store').createRecord('post', form);
      return newPost.save()
        .then(() => {
            this.transitionTo('post', newPost);
        });
    },
  }
});

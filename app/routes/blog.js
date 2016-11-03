import Ember from 'ember';

const { computed } = Ember;

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('post');
  },

  actions: {
    persist(form) {
      return this.get('store').createRecord('post', form).save();
    },
    remove(post) {
      return post.destroyRecord();
    }
  }
});

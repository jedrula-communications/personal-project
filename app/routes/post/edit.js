import Ember from 'ember';

const { inject: { service }, RSVP: { hash }} = Ember; 

export default Ember.Route.extend({
  categories: service(),
  model() {
    return hash({
      post: this.modelFor('post'),
      categories: this.get('categories').fetch(),
    });
  },
  actions: {
    put(post, data) {
      return post.save(data).then(() => {
          this.transitionTo('post', post);
      });
    },
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        remove(post) {
         return post.destroyRecord();
        }
    }
});

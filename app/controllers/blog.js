import Ember from 'ember';
import sessionControllerMixin from '../mixins/session-mixin';

const { computed } = Ember;

export default Ember.Controller.extend(sessionControllerMixin, {
  queryParams: ['category'],
  posts: computed.alias('model.posts'),
  categories: computed.alias('model.categories'),
  category: null,

  filteredPosts: computed('category', 'posts', function() {
    const category = this.get('category');
    const posts = this.get('posts');
    return category ? posts.filterBy('category', category) : posts;
  }),
});

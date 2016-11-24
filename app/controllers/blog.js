import Ember from 'ember';
import sessionControllerMixin from '../mixins/session-mixin';

const { A, computed, Controller } = Ember;

export default Controller.extend(sessionControllerMixin, {
  posts: computed.alias('model.posts'),

  availableCategories: computed.alias('model.availableCategories', 'categories', function() {
    return this.get('model.availableCategories').map((category) => {
      const selected = this.get('categories').indexOf(category.get('id')) !== -1;
      return {
        category,
        selected,
      };
    })
  }),
  categories: [],

  filteredPosts: computed('categories', 'posts', function() {
    const categories = this.get('categories');
    const posts = this.get('posts');
    return posts.filter((post) => {
      const postCategories = post.hasMany('categories').ids();
      return categories.every(function(category) {
        return postCategories.indexOf(category) !== -1;
      });
    })
  }),

  actions: {
    clickedCategory(id) {
      const categories = this.get('categories');
      if (categories.indexOf(id) === -1) {
        categories.pushObject(id);
      } else {
        categories.removeObject(id);
      }
      this.transitionToRoute({ queryParams: { categories: ['x'] } });
    },
  }
});

import Ember from 'ember';
import sessionControllerMixin from '../mixins/session-mixin';

const { A, computed, Controller } = Ember;

export default Controller.extend(sessionControllerMixin, {
  posts: computed.alias('model.posts'),

  availableCategoryRecords: computed.alias('model.availableCategories'),
  categories: A(),
  selectedCategories: computed('categories', function() {
    return this.get('availableCategoryRecords').filter((record) => {
      return this.get('categories').indexOf(record.get('id')) !== -1;
    })
  }),

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
    changeCategories(selected) {
      console.log('selected', selected)
      this.set('categories', selected.mapBy('id'));
      // this.transitionToRoute({ queryParams: { categories } });
    },
  }
});

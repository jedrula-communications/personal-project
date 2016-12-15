import Ember from 'ember';
import sessionControllerMixin from '../mixins/session-mixin';

const { A, computed, Controller } = Ember;

export default Controller.extend(sessionControllerMixin, {
  posts: computed.alias('model.posts'),

  availableCategoryRecords: computed.alias('model.availableCategories'),
  categories: A(),

  filteredPosts: computed('categories', 'posts', function() {
    const categories = this.get('categories');
    const posts = this.get('posts');
    return posts.filter((post) => {
      const postCategories = post.hasMany('categories').ids();
      return categories.every(function(category) {
        return postCategories.indexOf(category) !== -1;
      });
    });
  }),

  actions: {
    removeItem(item) {
      this.get('categories').removeObject(item.get('id'));
    },
    addItem(item) {
      this.get('categories').addObject(item.get('id'));
    },
    changeCategories(selected) {
      console.warn('use ember paper chips: http://miguelcobain.github.io/ember-paper/release-1/#/components/chips');
      console.log('selected', selected);
      this.set('categories', selected.mapBy('id'));
      // this.transitionToRoute({ queryParams: { categories } });
    },
  }
});

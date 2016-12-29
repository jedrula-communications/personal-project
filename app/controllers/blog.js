import Ember from 'ember';
import sessionControllerMixin from '../mixins/session-mixin';

const { A, computed, Controller } = Ember;

export default Controller.extend(sessionControllerMixin, {
  posts: computed.alias('model.posts'),

  availableCategoryRecords: computed.alias('model.availableCategories'),
  categories: A(),

  // TODO finish hide public and hide private if you need that
  filteredPosts: computed('onlyPrivate', 'categories', 'posts', function() {
    const onlyPrivate = this.get('onlyPrivate');
    const categories = this.get('categories');
    const posts = this.get('posts');
    return posts.filter((post) => {
      if(onlyPrivate && post.get('public')) {
        return false;
      }
      return this._postMatchesCategories(post, categories);
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
  },

  _postMatchesCategories(post, categories) {
      const postCategories = post.hasMany('categories').ids();
      return categories.every(category => postCategories.indexOf(category) !== -1);
  },
});

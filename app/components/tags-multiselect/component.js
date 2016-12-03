import Ember from 'ember';

const { computed, Component } = Ember;

export default Component.extend({
  remainingCategories: computed('availableCategoryRecords', 'selectedCategories', function() {
    return this.get('availableCategoryRecords');
  }),
  selectedCategories: computed('categories.@each', function() {
    return this.get('availableCategoryRecords').filter((record) => {
      // debugger;
      return this.get('categories') && this.get('categories').indexOf(record.get('id')) !== -1;
    });
  }),
});

import Ember from 'ember';

const { computed, Component } = Ember;

const publicRoutes = [
  { route: 'blog' },
  { route: 'education' },
  { route: 'portfolio' },
  { route: 'skills' },
];

const privateRoutes = [
  { route: 'tags' }
];

const allRoutes = publicRoutes.concat(privateRoutes);

export default Component.extend({
  defaultCategory: null,
  routes: computed('isAuthenticated', function() {
    return this.get('isAuthenticated') ? allRoutes: publicRoutes;
  }),
});

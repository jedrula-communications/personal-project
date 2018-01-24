import Ember from 'ember';

const { computed, Component } = Ember;

const publicRoutes = [
  { route: 'blog' },
  { route: 'education' },
  { route: 'portfolio' },
  { route: 'tutoring' },
  { route: 'skills' },
  { route: 'contact' },
];

const privateRoutes = [
  { route: 'tags' },
  { route: 'blog', name: 'public', public: true},
];

const allRoutes = publicRoutes.concat(privateRoutes);

export default Component.extend({
  defaultCategory: null,
  routes: computed('isAuthenticated', function() {
    const ret = this.get('isAuthenticated') ? allRoutes: publicRoutes;
    return ret.map(routeObj => Object.assign({}, { name: routeObj.route }, routeObj));
  }),
});

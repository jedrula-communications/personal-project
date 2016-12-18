import Ember from 'ember';

const { inject: { service } } = Ember;

export default Ember.Route.extend({
  sessionAccount: service(),
  actions: {
    login(identification, password) {
      const credentials = {
          identification,
          password,
      };
      return this.get('sessionAccount')
        .login(credentials)
        .then(() => {
          this.transitionTo('blog');
        });
      // TODO push payload user ?
    }
  }
});

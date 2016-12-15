import Ember from 'ember';

const { inject: { service } } = Ember;

export default Ember.Route.extend({
  session: service(),
  actions: {
    login(identification, password) {
      const credentials = {
          identification,
          password,
      };
      const authenticator = 'authenticator:token';
      return this.get('session')
        .authenticate(authenticator, credentials)
        .then(() => {
          this.transitionTo('blog');
        });
      // TODO push payload user ?
    }
  }
});

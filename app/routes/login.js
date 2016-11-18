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
      this.get('session').authenticate(authenticator, credentials);
      // TODO push payload user ?
    }
  }
});

import Ember from 'ember';

const { inject: { service }, Route } = Ember;

export default Route.extend({
  sessionAccount: service(),
  actions: {
    register(identification, password) {
      const credentials = {
          identification,
          password,
      };
      return this.get('store')
        .createRecord('user', credentials)
        .save()
        .then(() => this.get('sessionAccount').login(credentials))
        .then(() => {
          this.transitionTo('blog');
        });
    }
  }
});

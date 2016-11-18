import Ember from 'ember';

const { inject: { service }, Route } = Ember;

export default Route.extend({
  session: service(),

  actions: {
    remove(post) {
      // TODO I thought we could use this.transitionTo.bind(this,'blog') but it does not work
      return post.destroyRecord().then(() => this.transitionTo('blog'));
    },
    invalidateSession() {
      this.get('session').invalidate();
    }
  },
});

import Ember from 'ember';

const { inject: { service }, Route } = Ember;

export default Route.extend({
  session: service(),
  sessionAccount: service(),

  beforeModel() {
    return this.get('sessionAccount')._findCurrentUserRecord();
  },

  actions: {
    // TODO do we really wnat these actions in application route ?
    remove(post) {
      // TODO I thought we could use this.transitionTo.bind(this,'blog') but it does not work
      return post.destroyRecord().then(() => this.transitionTo('blog'));
    },
    togglePublic(post) {
      post.toggleProperty('public');
      return post.save();
    },
    invalidateSession() {
      this.get('session').invalidate();
    }
  },
});

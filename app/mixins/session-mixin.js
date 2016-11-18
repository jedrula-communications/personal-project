import Ember from 'ember';
const { computed, inject: { service }, Mixin } = Ember;

export default Mixin.create({
  sessionAccount: service(),
  isAuthenticated: computed.alias('sessionAccount.session.isAuthenticated'),
  token: computed.alias('sessionAccount.token'),
  isAdmin: computed.alias('token.admin'),
});

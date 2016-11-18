import Ember from 'ember';

const { inject: { service }, Service } = Ember;

export default Service.extend({
  session: service(),

  token: Ember.computed('session.data.authenticated', function() {
    const encoded = this.get('session.data.authenticated.token');
    if(encoded) {
      const token =  this.getTokenData(encoded);
      return token;
    }
  }),

  //TODO this is copypasta from jwt from ember-simple-auth-token
  //https://github.com/jpadilla/ember-simple-auth-token/blob/c17ccf8b4ac95c348180e74279bde161a02636e5/addon/authenticators/jwt.js
  //could probably import it somehow
  /**
    Returns the decoded token with accessible returned values.
    @method getTokenData
    @return {object} An object with properties for the session.
  */
  getTokenData(token) {
    const payload = token.split('.')[1];
    const tokenData = decodeURIComponent(window.escape(atob(payload)));

    try {
      return JSON.parse(tokenData);
    } catch (e) {
      return tokenData;
    }
  },
});

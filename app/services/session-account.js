import Ember from 'ember';
import jwtDecode from 'jwt-decode';

const { computed, inject: { service }, Service } = Ember;

export default Service.extend({
  session: service(),
  store: service(),

  token: computed('session.data.authenticated', function() {
    const encoded = this.get('session.data.authenticated.token');
    if(encoded) {
      const token =  this.getTokenData(encoded);
      return token;
    }
  }),

  // currentUserId: 'b98dd97d-ef5d-454e-8bc5-90858d9b8003',
  currentUserId: computed.reads('token.id'),

  currentUserRecord: computed('currentUserId', function() {
    const id = this.get('currentUserId');
    return this.get('store').peekRecord('user', id);
  }),

  login(credentials) {
    const authenticator = 'authenticator:token';
    return this.get('session')
      .authenticate(authenticator, credentials)
      .then(() => {
        // TODO return user object in jwt and use push payload ?
        this._findCurrentUserRecord()
      });
  },

  _findCurrentUserRecord() {
    const id = this.get('currentUserId');
    return id && this.get('store').findRecord('user', id);
  },

  //TODO this is copypasta from jwt from ember-simple-auth-token
  //https://github.com/jpadilla/ember-simple-auth-token/blob/c17ccf8b4ac95c348180e74279bde161a02636e5/addon/authenticators/jwt.js
  //could probably import it somehow
  /**
    Returns the decoded token with accessible returned values.
    @method getTokenData
    @return {object} An object with properties for the session.
  */
  getTokenData(token) {
    // const decoded = jwtDecode(token);
    // console.log('decoded', decoded);
    // const payload = token.split('.')[1];
    // const tokenData = decodeURIComponent(window.escape(atob(payload)));

    // try {
    //   return JSON.parse(tokenData);
    // } catch (e) {
    //   return tokenData;
    // }
    return jwtDecode(token)
  },
});

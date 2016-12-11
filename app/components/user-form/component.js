import Ember from 'ember';

export default Ember.Component.extend({
    password: null,
    actions: {
      submitted(identification, password) {
        this.get('submitAction')(identification, password).catch(() => {
          this.set('error', true);
        })
      }
    }
});

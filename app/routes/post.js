import Ember from 'ember';

const { RSVP: { hash }, inject: { service } } = Ember;

export default Ember.Route.extend({
    categories: service(),
    model(params) {
        return this.get('store').findRecord('post', params.post_id);
    }
});

import Ember from 'ember';
const {RSVP: { hash }, inject: { service }} = Ember;

export default Ember.Route.extend({
    categories: service(),
    model() {
        return this.get('categories').fetch();
    },
    actions: {
        persist(form) {
            const newPost = this.get('store').createRecord('post', form);
            return newPost.save()
                    .then(() => {
                        this.transitionTo('post', newPost);
                    })
        },
    }
});
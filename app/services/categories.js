import Ember from 'ember';

export default Ember.Service.extend({
    fetch() {
        return ['css', 'heroku', 'ember', 'node', 'productivity', 'misc'];
    }
});

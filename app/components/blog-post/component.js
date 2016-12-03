import Ember from 'ember';
import { trim } from 'jedrula-app/helpers/trim';
const { Component, computed } = Ember;

export default Component.extend({
  trimmedHtml: computed('post.body', function() {
    return trim([this.get('post.body')]);
  }),
  html: computed('listView', 'post.body', function() {
    return this.get('listView') ? this.get('trimmedHtml') : this.get('post.body');
  }),
});

import Ember from 'ember';
import SessionMixinMixin from 'jedrula-app/mixins/session-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | session mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let SessionMixinObject = Ember.Object.extend(SessionMixinMixin);
  let subject = SessionMixinObject.create();
  assert.ok(subject);
});

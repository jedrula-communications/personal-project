import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('responsibilities-list', 'Integration | Component | responsibilities list', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{responsibilities-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#responsibilities-list}}
      template block text
    {{/responsibilities-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

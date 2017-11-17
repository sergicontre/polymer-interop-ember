import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('polymer-element', 'Integration | Component | polymer element', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{polymer-element}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#polymer-element}}
      template block text
    {{/polymer-element}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | emberjs-slider', function(hooks) {
  setupRenderingTest(hooks);

  test('should display a slider', async function(assert) {
    await render(hbs`{{emberjs-slider min=1 max=10 startValue=5}}`);
    assert.equal(this.$('#emberjs-slider-range')[0].value, 5);
  });
});

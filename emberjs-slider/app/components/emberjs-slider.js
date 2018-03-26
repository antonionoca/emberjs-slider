import Component from '@ember/component';

export default Component.extend({
  min: 0,
  max: 10,
  startValue: 5,
  actions: {
    onInput() {
      console.log('onInput');
    }
  }
});

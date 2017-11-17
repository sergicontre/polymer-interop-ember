import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        handlerEvent() {
          let model = this.get('model');
          this.set('model.counter' , model.counter + 1);
        }
      }
});

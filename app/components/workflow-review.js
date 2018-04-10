import Component from '@ember/component';

export default Component.extend({
  didRender() {
    // // TODO:  add validation step here that checks the model each rerender
    //this.set('isValidated', false)

  },
  actions: {
    next() {
      this.sendAction('next')
    },
    back() {
      this.sendAction('back')
    },
    checkValidate(){
      this.sendAction('validate')
    }
  }
});

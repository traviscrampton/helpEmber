import Ember from 'ember';

export default Ember.Component.extend({
  pairShow: true,
  anotherPair: false,
  showFifteenMinutes: false,
  showForm: false,
  submittedTicket: false,

  actions: {
    showAnotherPair() {
      this.set('pairShow', false),
      this.set('anotherPair', true)
    },
    showFifteenMinutes() {
      this.set('anotherPair', false),
      this.set('showFifteenMinutes', true)
    },
    showForm() {
      this.set('showFifteenMinutes', false),
      this.set('showForm', true)
    },
    save() {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        timeAdded: new Date()
      };
      debugger;
      this.sendAction('save', params);
      this.set('showForm', false);
      this.set('submittedTicket', true);
    }
  }
});

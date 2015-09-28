import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('ticket');
  },
  actions: {
    destroyTicket(ticket){
      debugger;
      ticket.destroyRecord();
      this.transitionTo('teacher')
    }
  }

});

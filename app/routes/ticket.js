import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('ticket', params.ticket_id);
  },

  actions: {
    save(params) {
      var newTicket = this.store.createRecord('ticket', params);
      newTicket.save();
    },

    delete(model){
      model.destroyRecord();
      this.transitionTo('closed');
    },
  }

});

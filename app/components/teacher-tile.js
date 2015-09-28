import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  destroy(ticket){
    if(confirm("Are You sure that you want to destroy this ticket?")){
      debugger;
      this.sendAction('destroyTicket', ticket);
    }

   }

  }
});

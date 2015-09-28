import Ember from 'ember';

export function formatDate(params) {
  var time = params[0];
  return moment(time).format('h:mm:ss a');
}

export default Ember.Helper.helper(formatDate);

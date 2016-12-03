import Ember from 'ember';

export function trim(params/*, hash*/) {
  const text = params[0];
  return text.split("\n").splice(0,1);
}

export default Ember.Helper.helper(trim);

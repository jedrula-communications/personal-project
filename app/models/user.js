import DS from 'ember-data';
const { attr, Model } = DS;

export default Model.extend({
  identification: attr('String'),
  password: attr('String'), // TODO hide
});

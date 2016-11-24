import DS from 'ember-data';
const { attr, hasMany, Model } = DS;

export default Model.extend({
  title: attr('String'),
  body: attr('String'),
  categories: hasMany('tag'),
});

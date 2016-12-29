import DS from 'ember-data';
const { attr, belongsTo, hasMany, Model } = DS;

export default Model.extend({
  author: belongsTo('user'),
  title: attr('String'),
  body: attr('String'),
  gist: attr('String'),
  categories: hasMany('tag'),
  public: attr('boolean'),
  date: attr('date'),
});

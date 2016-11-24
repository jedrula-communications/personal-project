import DS from 'ember-data';
const { attr, belongsTo, hasMany, Model } = DS;

export default Model.extend({
  title: attr('string'),
  // children: hasMany('tag', { inverse: 'parent' }),
  // parent: belongsTo('tag', { inverse: 'children' }),
});

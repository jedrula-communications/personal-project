// courtesy of https://github.com/cybercase/showdown-target-blank/blob/master/src/target_blank.js
export function initialize() {
  showdown.extension("targetblank", function() {
    return [
         {
            type:   'output',
            regex: '<a(.*?)>',
            replace: function (match, content) {
               return content.indexOf('mailto:') !== -1 ? '<a' + content + '>' : '<a target="_blank"' + content + '>';
            }
         }
      ];
  });
}

export default {
  name: 'register-showdown-extensions',
  initialize
};

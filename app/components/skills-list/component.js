import Ember from 'ember';

const { Component, computed } = Ember;

const skillUrlsMap = {
  meya: 'https://www.meya.ai/',
  ember: 'http://emberjs.com/',
  nuxt: 'https://nuxtjs.org/',
  ror: 'http://rubyonrails.org/',
  git: 'https://git-scm.com/',
  github: 'https://github.com/',
  aws: 'https://aws.amazon.com/',
  php: 'https://www.php.net/',
  scss: 'http://sass-lang.com/',
  express: 'http://expressjs.com/',
  firebase: 'https://firebase.google.com/',
  nodejs: 'https://nodejs.org/en/',
  pug: 'https://pugjs.org/',
  heroku: 'https://www.heroku.com/',
  mongodb: 'https://www.mongodb.com/',
  cloudinary: 'http://cloudinary.com/',
  raspberrypi: 'https://www.raspberrypi.org/',
  jenkins: 'https://jenkins.io/',
  java: 'http://www.oracle.com/technetwork/java/',
  jquery: 'https://jquery.com/',
  gulp: 'http://gulpjs.com/',
  babel: 'https://babeljs.io/',
  knockoutjs: 'https://babeljs.io/',
  // TODO svg not working with _blank, maybe some problem with name
  svg: 'https://www.w3.org/Graphics/SVG/',
  socketio: 'http://socket.io/',
  javascript: 'https://www.javascript.com/',
  tacton: 'http://www.tacton.com/',
  vue: 'https://vuejs.org/',
};

export default Component.extend({
  skillObjects: computed('skills', function() {
    return this.get('skills').map(skill => {
      return {
        skill,
        svgPath: `svg/${skill}`,
        href: this._getSkillUrl(skill), // TODO make dynamic
      };
    });
  }),
  _getSkillUrl(skill) {
    const url = skillUrlsMap[skill];
    if(!url) {
      throw new Error(`${skill} missing from skillUrlsMap`);
    }
    return url;
  },
});

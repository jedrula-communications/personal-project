import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      positions: [
        {
          type: 'part-time',
          // TODO use remote in hbs
          remote: true,
          from: 2017,
          to: 'now',
          company: 'Impact DataSource',
          icon: 'toptal.png',
          link: {
            what: 'Impact Dashboard Demo',
            href: 'https://dashboard.impactdatasource.com/demo',
          },
          references: 'todo (Josh?)',
          what: 'Simple tool that determines the impact of a business to a community',
          responsibilities: [
            'Ember migration - rewriting/migrating tests',
            'Reviewing work of junior Ember devs',
            'Fixing Ember deprecations',
            'Optimizing node.js slower parts',
            'Upgrading node.js with some node modules',
          ],
          technologies: [
            'ember',
            'nodejs',
            'mongodb',
            'git',
            'github',
          ],
        },
        {
          type: 'part-time',
          // TODO use remote in hbs
          remote: true,
          from: 2017,
          to: 'now',
          company: 'radium',
          icon: 'radium.png',
          link: {
            what: 'radium crm',
            href: 'https://www.radiumcrm.com/',
          },
          references: 'todo (Sami?)',
          what: 'Customer relationship management tool which syncs with your Gmail account and simplifies dealing with your customers and business contacts.',
          responsibilities: [
            'Migrating Ember.js from a legacy version to 1.13 and then 2+',
            'Simplifing codebase, bringing in best Ember practices',
            'Optimizing slow parts of Ember app',
          ],
          technologies: [
            'ember',
            'ror',
            'git',
            'github',
          ],
        },
        {
          type: 'part-time',
          // TODO use remote in hbs
          remote: true,
          from: 2016,
          to: 2017,
          company: 'airhelp',
          icon: 'airhelp.jpg',
          link: {
            what: 'airhelp app',
            href: 'https://app.airhelp.com/claims/new/trip-details',
          },
          references: 'todo (Rafal?)',
          what: 'Web application to help air passengers get compensation from airlines for cancelled, delayed and overbooked flights.',
          responsibilities: [
            'Full stack web development',
            'Managing deployment with Teamcity',
            'Mentoring junior Ember developers',
            `Bringing Ember best practices into the company's workflow`
          ],
          technologies: [
            'ember',
            'ror',
            'git',
            'github',
            'aws',
            'scss',
          ],
        },
        {
          type: 'part-time',
          remote: true,
          from: 2016,
          to: 2016,
          // TODO resize toptal icon
          company: 'carlinnashville',
          icon: 'toptal.png',
          link: {
            what: 'custom CMS for creating music album pages',
            href: 'http://listen.carlinnashville.com/heartsbeatloud',
          },
          references: 'katrinatsang@carlinnashville.com',
          what: `CMS that allows the administrator to quickly generate page that promotes chosen music album / artist.
                The CMS allows to upload album cover, adjust the color theme, manage playable audio files and their order`,
          responsibilities: [
            'Full stack development of custom CMS',
            'Integration with AWS S3 for hosting music',
            'Responsive design',
            'Hosting on heroku',
          ],
          technologies: [
            'express',
            'nodejs',
            'pug',
            'aws',
            'github',
            'git',
            'heroku',
            'mongodb',
            'scss',
          ],
        },
        {
          type: 'part-time',
          remote: true,
          from: 2016,
          to: 2016,
          company: 'oncircuit',
          icon: 'toptal.png',
          link: {
            what: 'page for amateur racing enthusiasts',
            href: 'http://www.oncircuit.co.uk',
          },
          references: 'steveupr@gmail.com',
          what: 'Web application for racing enthusiasts with features like renting cars, picking races from calendars, managing profiles. Seperate panels for race managers, photographers, master admins.',
          responsibilities: [
            'Full stack web development',
            'Coordinating the project directly with the end client',
          ],
          technologies: [
            'cloudinary',
            'express',
            'nodejs',
            'pug',
            'github',
            'git',
            'mongodb',
            // TOOD add
            //'github issues'
          ],
        },
        {
          type: 'side project',
          remote: true,
          from: 2015,
          to: 2015,
          company: 'Communications (own project)',
          icon: 'communications.svg',
          what: `Hobby project remote controlled car using nodejs installed on Raspberry PI to listen for control requests and controlling the DC motors`,
          link: {
            what: 'Remote controlled raspberry PI car',
            // TODO add something better here
            href: 'https://github.com/jedrula-raspberrycar/remoteraspberrycar',
          },
          responsibilities: [
            'Building the physical car',
            'Express.js backend for listenting to remote control requests',
            'Controlling DC motors with nodejs gpio module',
            'Ember.js frontend for client remote control panel',
          ],
          technologies: [
            'ember',
            'express',
            'nodejs',
            // TODO add
            'raspberrypi',
          ],
          video: {
            src: "https://www.youtube.com/embed/1f9zhUSN12Y",
            backgroundImage: "https://img.youtube.com/vi/1f9zhUSN12Y/0.jpg",
          },
        },
        {
          type: 'side project',
          remote: true,
          from: 2015,
          to: 2015,
          company: 'Communications (own project)',
          icon: 'communications.svg',
          what: `
            Single page application for travellers.<br>
            This was really a training ground where I got to know Ember.js.
          `,
          link: {
            what: 'Flyoffers page',
            href: 'http://flyoffers.herokuapp.com/posts',
          },
          responsibilities: [
            'Prototyping',
            'Full stack development',
            'Development of web scraping services looking for flight deals',
            'hosting the application on heroku',
          ],
          technologies: [
            'cloudinary',
            'ember',
            'express',
            //'Openshift',
            'github',
            'heroku',
            'mongodb',
            'scss',
          ],
        },
        {
          type: 'full time',
          remote: false,
          from: 2013,
          to: 2015,
          company: 'Kelvion',
          icon: 'kelvion.png',
          references: 'Abhishek.Mukherjee@kelvion.com',
          what: `Heat exchangers configurator`,
          link: {
            what: 'Kelvion Select configurator',
            href: 'http://rtselect.kelvion.com/loginKelvion',
          },
          responsibilities: [
            'full stack development using extensible javascript and java custom framework',
            'team pilot and coordinating the work of the Polish team',
            'recruiting and tutoring newcomers',
            'continous deployment  with Jenkins',
            '3rd party integration with Zanata i18n service.',
            'modeling heat exchangers using tacton'
          ],
          technologies: [
            'javascript',
            'tacton',
            'jenkins',
            'java',
            'jquery',
            'nodejs',
            'gulp',
            'babel',
            // TODO
            // zanata
          ],
        },
        {
          type: 'full time',
          from: 2009,
          to: 2013,
          company: 'vazco',
          icon: 'vazco.png',
          references: 'michal.zacher@vazco.eu', // TODO finish
          what: `customized social networks from which the biggest was velocitychess.com`,
          link: {
            what: 'online chess gaming app',
            href: 'http://www.velocitychess.com',
          },
          responsibilities: [
            'Full stack web development',
            'consulting',
            'migrating PHP/mysql applications to nodejs/mongoDb',
            'managing services on EC2 AWS',
            'direct communication with clients from all over the world'
          ],
          technologies: [
            'javascript',
            'knockoutjs',
            'jquery',
            'svg',
            'nodejs',
            'socketio',
            'mongodb',
          ],
          video: {
            src: "https://www.youtube.com/embed/U1uoj0JpRaU",
          },
        },
      ],
      techSkills: {
        dbs: ['mongoDb', 'MySql'],
        languages: ['javascript', 'php', 'ruby'],
        frameworks: ['ember', 'express']
      },
    };
  }
});

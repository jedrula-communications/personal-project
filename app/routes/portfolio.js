import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      education: [
        {
          from: 2004,
          to: 2010,
          what: 'Master of Information Technology (Information Systems profile). <br> University of Technology in Wrocław',
          whatMore: 'Specialization: Information Systems.',
          link: {
            what: 'university official page',
            href: 'http://pwr.edu.pl/en/',
          }
        },
        {
          from: 2007,
          to: 2008,
          what: 'Website design at Kent Institute of Business and Technology',
          link: {
            what: 'Kent institute official page',
            href: 'http://kent.edu.au/',
          }
        }
      ],
      positions: [
        {
          type: 'part-time',
          from: 2016,
          to: 'current position',
          company: 'airhelp',
          link: {
            what: 'airhelp app page',
            href: 'https://app.airhelp.com/claims/new/trip-details',
          },
          references: 'todo (Rafal?)',
          what: 'Web application to help air passengers get compensation from airlines when their flight has been cancelled, delayed or overbooked. ',
          // responsibilities?
          technologies: ['ember', 'ember-cli', 'ember-data', 'Ruby on Rails', 'git', 'github', 'teamcity'],
        },
        {
          type: 'part-time',
          from: 2016,
          to: 2016,
          company: 'toptal',
          link: {
            what: 'custom CMS for creating music album pages',
            href: 'http://listen.carlinnashville.com/blairealise/code',
          },
          references: 'katrinatsang@carlinnashville.com',
          what: `CMS that allows the administrator to quickly generate page that promotes chosen music album / artist.
                The CMS allows to upload album cover, adjust the color theme, manage playable audio files and their order`,
          // responsibilities?
          technologies: ['express', 'node', 'jade', 'AWS S3', 'github', 'git', 'heroku'],
        },
        {
          type: 'part-time',
          from: 2016,
          to: 2016,
          company: 'toptal',
          link: {
            what: 'page for amatour racing enthusiasts',
            href: 'http://www.oncircuit.co.uk',
          },
          references: 'steveupr@gmail.com',
          what: 'Web application for racing enthusiasts. Features like renting cars, picking races from calendars, managing profiles. Seperate panels for race managers, photographers, master admins.',
          // responsibilities?
          technologies: ['express', 'node', 'jade', 'github', 'git', 'github issues'],
        },
        {
          type: 'side project',
          from: 2015,
          to: 2015,
          company: 'Communications (own project)',
          what: `
            Single page web application for travellers,<br>
            this was really a training ground where I got to know Ember.js.
          `,
          link: {
            what: 'Flyoffers page',
            href: 'http://flyoffers.herokuapp.com/posts',
          },
          responsibilities: 'Programming and managing the hosting of the application',
          tasks: 'everything ;)',
          technologies: ['cloudinary','ember', 'ember-cli', 'ember-data', 'Express.js', 'Openshift', 'github', 'heroku'],
        },
        {
          type: 'full time',
          from: 2013,
          to: 2015,
          company: 'Kelvion',
          references: 'Abhishek.Mukherjee@kelvion.com',
          // TODO add more decrtiption
          what: `
            Heat exchangers configurator
          `,
          link: {
            what: 'Kueba Select configurator',
            href: 'https://select.hx.gea.com/login',
          },
          responsibilities: 'Full stack development, team pilot',
          // tasks: 'everything ;)',
          technologies: ['javascript','Tacton', 'Jenkins', 'Java', 'node', 'gulp', 'babel'],
        },
        // TODO add more
      ],
      techSkills: {
        dbs: ['mongoDb', 'MySql'],
        languages: ['javascript', 'php', 'ruby'],
        frameworks: ['ember', 'express']
      },
    };
  }
});

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
      techSkills: {
        dbs: ['mongoDb', 'MySql'],
        languages: ['javascript', 'php', 'ruby'],
        frameworks: ['Ember.js', 'express.js']
      },
      projects: [
        {
          type: 'part-time',
          from: 2016,
          to: '-',
          company: 'airhelp',
          link: 'www.airhelp.com',
          references: 'todo (Rafal?)',
          what: 'Web application to help air passengers get compensation from airlines when their flight has been cancelled, delayed or overbooked. ',
          // responsibilities?
          technologies: ['Ember.js', 'ember-cli', 'ember-data', 'Ruby on Rails', 'git', 'github', 'teamcity'],
        },
        {
          type: 'side project',
          from: 2015,
          to: 2015,
          company: 'Communications (own project)',
          what: 'single page web application for travellers',
          link: 'todo',
          responsibilities: 'Programming and managing the hosting of the application',
          tasks: 'everything ;)',
          technologies: ['Ember.js', 'ember-cli', 'ember-data', 'Express.js', 'Openshift', 'github', 'heroku'],
        },
        // TODO
      ],

    }
  }
});

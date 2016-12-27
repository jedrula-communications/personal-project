import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
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
    ];
  }
});

import Ember from 'ember';

let results = [
  { id: 1, name: 'Bagel' },
  { id: 2, name: 'Baguette' },
  { id: 3, name: 'Ciabatta' },
  { id: 4, name: 'Cornbread' },
  { id: 5, name: 'English muffin' },
  { id: 6, name: 'Flatbread' },
  { id: 7, name: 'Focaccia' },
  { id: 8, name: 'Multigrain bread' },
  { id: 9, name: 'Naan' },
  { id: 10, name: 'Pancake' },
  { id: 11, name: 'Panettone' },
  { id: 12, name: 'Pretzel' }
];

let delay = function() {
  return Math.floor(Math.random() * 1000) + 200;
};

export default Ember.Controller.extend({
  actions: {
    findResults(query) {
      return new Ember.RSVP.Promise((resolve) => {
        Ember.run.later(() => {
          resolve(results.filter((result) => {
            return result.name.toLowerCase().indexOf(query) !== -1;
          }));
        }, delay());
      });
    },

    selectABread(bread) {
      this.set('selectedBread', bread);
    }
  }
});

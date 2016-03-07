import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    searched(results, query, sb) {
      this.set('results', results);
      this.set('lastQuery', query);
      sb.open();
    },
    reveal(e, sb) {
      sb.search(this.get('lastQuery'));
    },
    close(e, sb) {
      sb.close();
    }
  }
});

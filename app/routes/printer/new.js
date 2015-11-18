import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function() {
        console.log(this.get('session').fetch());
    }
});

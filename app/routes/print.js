import Ember from 'ember';

// TODO: handle undefined model
export default Ember.Route.extend({
    model: function(printer) {
        return printer;
    },
    actions: {
        printBerkas: function() {
            this.transitionTo('terimakasih');
        }
    }
});

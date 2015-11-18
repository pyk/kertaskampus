// app/routes/application.js
import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function() {
        return this.get("session").fetch().catch(function() {});
    },

    actions: {
        login: function(provider) {
            var self = this;
            self.get("session").open("firebase", { provider: provider}).then(function(data) {
                // let assume that it's okey to run save record multiple times
                // find user is exists
                // var currentMhs = self.store.find('mahasiswa', 
                //     {filter: {facebookID: data.currentUser.id}}).then(function(mhs) {
                //         console.log(mhs);
                //     }, function(error) {
                //         console.log(error);
                //     });
                // insert new user
                // var mhs = self.store.createRecord('mahasiswa', {
                //     nama: data.currentUser.displayName
                // });
                // mhs.save();
                console.log(data.currentUser);
            }, function(error) {
                // handle error
                console.log(error);
            });
        },
        logout: function() {
            this.get("session").close();
        }
    }
});
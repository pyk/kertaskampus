import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        // get current user cuy
        // return this.store.query('printer', {filter: {user: u}});
        return [
            {id: 1, nama: "Printer 1", warna: "warna-1", booked: 12, bookedMax: 20, harga: 100},
            {id: 2, nama: "Printer 2", warna: "warna-2", booked: 20, bookedMax: 20, harga: 90},
            {id: 3, nama: "Printer 3", warna: "warna-3", booked: 15, bookedMax: 15, harga: 100},
            {id: 4, nama: "Printer 4", warna: "warna-4", booked: 16, bookedMax: 20, harga: 120},
            {id: 5, nama: "Printer 5", warna: "warna-5", booked: 9, bookedMax: 20, harga: 100},
            {id: 6, nama: "Printer 6", warna: "warna-6", booked: 6, bookedMax: 10, harga: 150},
            {id: 7, nama: "Printer 7", warna: "warna-7", booked: 7, bookedMax: 10, harga: 90},
            {id: 8, nama: "Printer 8", warna: "warna-8", booked: 18, bookedMax: 20, harga: 100}
        ]
    },

    actions: {
        slotPenuh: function(printer) {
            return printer.bookedMax == printer.booked; 
        },
        tambahPrinter: function() {
            // redirect ke /printer/sewakan

        }
    }
});

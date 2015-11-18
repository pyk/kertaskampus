import DS from 'ember-data';

export default DS.Model.extend({
    nama: DS.attr('string'),
    booked: DS.attr('number'),
    bookedMax: DS.attr('number'),
    harga: DS.attr('number')
});

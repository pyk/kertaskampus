import DS from 'ember-data';

export default DS.Model.extend({
    nama: DS.attr('string')
    // facebookID: DS.attr('number'),
    // facebookAvatarUrl: DS.attr('string')
    // nim: DS.attr('number'),
    // universitas: DS.attr('string'),
    // fakultas: DS.attr('string'),
    // jurusan: DS.attr('string'),
    // printers: DS.hasMany('printer'),
    // booking: DS.belongsTo('booking')
});

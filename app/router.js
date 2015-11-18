import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('printer', {path: '/'}, function() {
    this.route('new', {path: 'printer/new'});
  });
  this.route('print', {path: '/print/:printer_id'});
  this.route('terimakasih');
});

export default Router;

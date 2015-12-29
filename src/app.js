/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');

var main = new UI.Card({
  title: 'New Year in: ',
  subtitle: countdownToNewYear(2016).days + ' ' + countdownToNewYear(2016).hours + ' ' + countdownToNewYear(2016).minutes + ' ' + countdownToNewYear(2016).seconds,
  subtitleColor: 'indigo', // Named colors
  bodyColor: '#9a0036' // Hex colors
});

function countdownToNewYear(year){
  var today = new Date();
  var t = Date.parse(year) - new Date();
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': ('0' + days).slice(-2),
    'hours': ('0' + hours).slice(-2),
    'minutes': ('0' + minutes).slice(-2),
    'seconds': ('0' + seconds).slice(-2)
  };
}

main.show();
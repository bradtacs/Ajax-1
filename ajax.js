$(document).ready(function () {

  /* Number 1 and two */

  $('#step12').on('click', function() {
    console.log('Before .ajax');

    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'text',
    });
  });
  console.log('After .ajax');

  /* Number 3 */

  $('#step3456').on('click', function() {
    console.log('Before .ajax');

    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text',

    }).done(function(data) {
      $('#step3456').append(data);
      console.log('Got: ' + data)
    }).fail(function(jqXHR, textStatus) {
      console.log('.ajax FAILED with ' + jqXHR.status + ' ' + jqXHR.statusText);
      console.log(jqXHR);
    }).always(function() {
      console.log('.ajax request finished');
    });

    console.log('After .ajax');
  });
  /* Number 4 */

  $('#step7').on('click', function() {
    console.log('Before .ajax');

    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      dataType: 'text',

    }).done(function(data) {
      $('#step7').append(data);
      console.log('Got: ' + data)
    }).fail(function(jqXHR, textStatus) {
      console.log('.ajax FAILED with ' + jqXHR.status + ' ' + jqXHR.statusText);
      console.log(jqXHR);
    }).always(function() {
      console.log('.ajax request finished');
    });

    console.log('After .ajax');
  });
  /* Number 5 */

  $('#step8').on('click', function() {
    console.log('Before .ajax');

    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text',

    }).done(function(data) {
      $('#step8').append(data);
      console.log('Got: ' + data)
    }).fail(function(jqXHR, textStatus) {
      console.log('.ajax FAILED with ' + jqXHR.status + ' ' + jqXHR.statusText);
      console.log(jqXHR);
    }).always(function() {
      console.log('.ajax request finished');
    });

    console.log('After .ajax');
  });

  /* Number 6 */

  $('#step8').on('click', function() {
    console.log('Before .ajax');

    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text',

    }).done(function(data) {
      $('#step8').append(data);
      console.log('Got: ' + data)
    }).fail(function(jqXHR, textStatus) {
      console.log('.ajax FAILED with ' + jqXHR.status + ' ' + jqXHR.statusText);
      console.log(jqXHR);
    }).always(function() {
      console.log('.ajax request finished');
    });

    console.log('After .ajax');
  });

  /* Number  */

  $('#step9').on('click', function() {
    console.log('Before .ajax');

    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      dataType: 'text',

    }).done(function(data) {
      $('#step9').append(data);
      console.log('Got: ' + data)
    }).fail(function(jqXHR, textStatus) {
      console.log('.ajax FAILED with ' + jqXHR.status + ' ' + jqXHR.statusText);
      console.log(jqXHR);
    }).always(function() {
      console.log('.ajax request finished');
    });

    console.log('After .ajax');
  });
});

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
        url:'http://first-ajax-api.herokuapp.com/',
        method: 'GET',
        dataType: 'text',

      }).done(function(data) {
        console.log('.ajax done')
        $('body').append(data);
      }).fail(function(jqXHR, textStatus) {
        console.log('.ajax FAILED with ' + jqXHR.status + ' ' + jqXHR.statusText);
        console.log(jqXHR);
      }).always(function() {
        console.log('.ajax request finished');
      });

      console.log('After .ajax');
    });

});

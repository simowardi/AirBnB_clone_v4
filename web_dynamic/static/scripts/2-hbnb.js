$('document').ready(function () {
    const url = 'http://' + window.location.hostname + ':5001/api/v1/status/';
    $.get(url, function (response) {
      if (response.status === 'OK') {
        $('DIV#api_status').addClass('available');
      } else {
        $('DIV#api_status').removeClass('available');
      }
    });

    let amenity = {};
    $('INPUT[type="checkbox"]').change(function () {
      if ($(this).is(':checked')) {
        amenity[$(this).attr('data-id')] = $(this).attr('data-name');
      } else {
        delete amenity[$(this).attr('data-id')];
      }
      if (Object.values(amenity).length === 0) {
        $('.amenities H4').html('&nbsp;');
      } else {
        $('.amenities H4').text(Object.values(amenity).join(', '));
      }
    });
  });

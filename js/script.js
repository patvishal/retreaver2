function loadData() {

    var $body = $('body');
    var $greeting = $('#greeting');


    // Google Streetview request
    var streetStr = $('#street').val(); 
    var cityStr = $('#city').val();
    var address = streetStr + ', ' + cityStr;

    $greeting.text('So, you want to live at ' + address + '?');

    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + ''; 
    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');

    return false;
};

$('#form-container').submit(loadData);


function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    var $street = $('#street').val();
    var $city = $('#city').val();
    var loc = $street + ', ' + $city;
    $greeting.text('You want to live where? ' + loc + '?');
    var streetview = 'https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + loc;
    $body.append('<img class="bgimg" src="' + streetview + '">');

    console.log(loc);
    $.getJSON("");

    return false;
};

$('#form-container').submit(loadData);

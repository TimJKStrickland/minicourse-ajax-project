
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
        var basenytAPI = "http://api.nytimes.com/svc/search/v2/articlesearch.json?" 
        + $city + "&sort=newest&api-key=73b0691cd7fa3f9c7f3e54f2d0dc8440:8:73866494";
        $.getJSON(basenytAPI, function(data){
            $nytElem.text("NYT articles about " + $city);
            articles = data.response.docs;
            for(var i=0; i<articles.length; i++){
                var article = articles[i];
                $nytElem.append('<li class="article">' +
                    '<a href="' + article.web_url + '">' +
                     article.headline.main + '</a><p>' + article.snippet + '</p></li>');   
            }  
        });

    return false;
};

$('#form-container').submit(loadData);

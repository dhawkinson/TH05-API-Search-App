(function () {          // invoking the module pattern
    // use strict
    'use strict';

    /**
     * Created by theHawk on 4/16/17.
     *
     *  globals
     **************************************************************/
    const wrapOpen        = '<div class="album-wrap"><img class="album-art" src=';
    const notFoundOpen    = "<li class='no-albums desc'><i class='material-icons icon-help'>help_outline</i>No albums found that match: ";

    /**
     *      event handlers
     **************************************************************/

    $("form").submit(function(e) {
        e.preventDefault;                                               //     prevent default behavior
        let sourceAPI = "https://api.spotify.com/v1/search";            //     Spotify API endpoint
        let albumName = $("input")[0].value;
        let pos       = albumName.indexOf(" ");
        while ( !(pos === -1) ) {
            albumName = albumName.substring(0, pos)+"+"+albumName.substring(pos+1,albumName.length); //     replace spaces with +s
            pos       = albumName.indexOf(" ");
        }
        let query = "?q=" + albumName + "&type=album";                   //     album name & search type

        //  json GET request
        $.getJSON(sourceAPI+query, function() {
            //      build up the list Items
            $(".desc").hide();                                           //     hide the search placeholder
            let listHTML;                                                //     initialize the list
            //     iterate for the results
            $.each(response.albums.items, function(i,album){
                listHTML += '<li><a href="' + $album.external_urls.spotify + '" target="_blank" id=' + $i;
                listHTML += '<div class="album-wrap"><img class="album-art" src="' + $album.images[0].url + '"></div>';
                listHTML += '<span class="album-title">' + $album.name + '</span>';
                listHTML += '<span class="album-artist">' + $album.artists[0].name + '</span></a></li>';
            });
            //  append and show results
            $("#albums").append(listHTML);                               //     insert the results
            $("#albums").show();                                         //     display the results
        });
    });
}());                   // closing module pattern

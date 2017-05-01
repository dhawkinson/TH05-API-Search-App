(function () {          // invoking the module pattern
    // use strict
    'use strict';

    /**
     * Created by theHawk on 4/16/17.
     *
     **************************************************************/

    /**
     *      event handlers
     **************************************************************/

    const cloneSearch = document.getElementsByClassName("desc");
    /**
    *   submit the album search
    ***************************************************************/
    $("form").submit(function(e) {
        e.preventDefault();                                               //    prevent default behavior
        const apiEndpoint = "https://api.spotify.com/v1/search";          //    spotify API base
        let albumName = $("input")[0].value;
        let pos       = albumName.indexOf(" ");
        while ( !(pos === -1) ) {
            albumName = albumName.substring(0, pos)+"+"+albumName.substring(pos+1,albumName.length); //     replace spaces with +s
            pos       = albumName.indexOf(" ");
        }
        //     album name & search type
        let qParts = {
            query  : albumName,
            type   : "album"
        };

        //  json GET request

        $.getJSON(apiEndpoint,qParts, function(response) {
            //      build up the list Items
            $("#albums").empty();                                        //     empty the the ul
            let listHTML = "";                                           //     initialize the list
            let albumList = response;
            //     iterate for the results
            $.each(response.albums.items, function(i,album){
                //listHTML += '<li class="album"><a href="#top" id="' + response.albums.items[i].href[i] +'">';
                listHTML += '<li class="album-details"><a href="#top" id="' +album.external_urls.spotify+'">';
                listHTML += '<div class="album-wrap"><img class="album-art" src="' + album.images[0].url + '"></div>';
                listHTML += '<span class="album-title">' + album.name + '</span>';
                listHTML += '<span class="album-artist">' + album.artists[0].name + '</span></a></li>';
            });
            //      notify of "no results"
            if ( listHTML === "" ) {
                listHTML += "<li class='no-albums'><i class='material-icons icon-help'>help_outline</i>No albums found that match: " + albumName + "</li>";
            }
            //  append and show results
            $("#albums").append(listHTML);                               //     insert the results
            $("#albums").show();                                         //     display the results
            $("input")[0].value = "";                                    //     clear the album name
        });
    });

    /**
     *      click for album details
     *******************************************************************/

    $("img.album-art").click(function(e) {
        e.preventDefault;
        let album = this.parent.parent.parent;
        let albumHref = album.attr("id");

        //  json GET request

        /*$.getJSON(albumHref, function(response) {
            //      build up the list Items
            $("#albums").empty();                                        //     empty the the ul
            let listTracks = "";                                         //     initialize the list
        });

        let detailsHTML = something

        $(".main-content").hide();*/
    });

}());                   // closing module pattern

/************************************************

    NOTES: For extra credit

    Click Event on Album Image
        link to details using spotify ID
        prevent default
        return Album details

        Set Up Display
            create div - #albumDisplay (a wrapper)
                create div - #albumBackground
                    full width
                    100 px height
                    dark background
                    get image - overlay background
                </div>

 album.external_urls.spotify

 */

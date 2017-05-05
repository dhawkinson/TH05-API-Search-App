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
            $.each(response.albums.items, function (i,album) {
                //  build li items - using interpolation (${}) via a template string (`...`)
                listHTML +=
                `
                <li class="album-details">
                    <a href="#top" id=${album.id}>
                        <div class="album-wrap">
                            <img class="album-art" src="${album.images[0].url}">
                        </div>
                        <span class="album-title">${album.name}</span>
                        <span class="album-artist">${album.artists[0].name}</span>
                    </a>
                </li>
                `;
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
     *      NOTE TO SELF:
     *
     *          When the following block of code was originally written it failed using both of the following constructs:
     *              $("li.album-details").click(function() {
     *              $("li.album-details a").click(function() {
     *          The <li>s had not yet been loaded, therefore the elements were not available
     *          I then learned about event-delegation, whose structure is:
     *              $("#albums").on("click", "a", function() {
     *              ( the target is moved out of the selector & becomes the second parameter of the .on() )
     *
     *          Don't forget how many hours you spun your wheels on that one until you got the help you needed.
     *
     *          It was at least 20 hours.
     *
     *          For details see:    https://learn.jquery.com/events/event-delegation/
     *
     *      click for album details
     *******************************************************************/

    $("#albums").on("click", "a", function() {
        let album = $(this);                                  //  set the album content
        let albumApi  = "https://api.spotify.com/v1/albums/"; //  set the album API
        let endPoint = album[0].id;                           //  set the album end point (id)

        //  json GET request

        $.getJSON(albumApi+endPoint, function(record) {
            //      build up the track items display
            let artists    = record.artists[0].name              //  the artist name
            let year       = `${record.release_date}`;
            year           = "("+year.substring(0,4)+")";
            let name       = `${record.name}`;
            // build up the tracks display
            let tracksHTML = "";
            $.each(record.tracks.items, function (i,track) {
                //  build li items - using interpolation (${}) via a template string (`...`)
                tracksHTML +=
                    `
                    <li class="track">${track.name}</li>
                    `;
            });
            // build up the page
            let div       = document.createElement("div");
            div.id        = "track-content";
            div.innerHTML = `
                            <div class="master-container">
                                <div class="banner-container">
                                    <div class="flex-item1">
                                        <a class="return" href="#top">< search results</a>
                                        <img class="album-cover" src="${record.images[0].url}" alt="${record.name}">
                                    </div>
                                    <div class="flex-item2">
                                        <h2 class="name">${name} ${year}</h2>
                                        <h3 class="artist">${artists}</h3>
                                    </div>
                                </div>
                                <div class="tracks-container">
                                    <div class="flex-item3"></div>
                                    <div class="flex-item4">
                                        <h3>track list:</h3>
                                        <ol class="track-list">${tracksHTML}</ol>
                                    </div>
                                </div>
                            </div>
                            `;
            $(".wrapper").append(div);
            $(".main-content").hide();
            $(".track-content").show();

        });
    });

    //  return to search results
    $(".wrapper").on("click", "a.return", function() {
        $("#track-content").remove();
        $(".main-content").show();

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

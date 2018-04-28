# TH05-API-Search-App
Full Stack Java Script Project 05 - Treehouse TechDegree

## Use a Public API to Build a Search App

In this project, you'll build a "Album Search" app using the Spotify API.

We'll give you basic HTML, CSS, and a JavaScript file to get you started. You'll need to program the search form to return album data in JSON format based on the form submission. You'll use the API data to dynamically create HTML displaying an album's title, artist, and album art image.

<h2>Project Instructions</h2>

To complete this project, follow the instructions below. If you get stuck, ask a question in the community.

Request data from the Spotify API to display album information
    Go to https://developer.spotify.com/ to start using the API documentation.
    Use Spotify's 'search by album' endpoint to return albums found to match the query parameter
    The data should return in JSON format
    
Display search results on the page
    The data should load inside the #albums 
    For each album returned, render an \<li> displaying these items inside:
    <ul>
        <li>Album title</li>
        <li>Album art image</li>
        <li>Render an "img" that displays the 640px x 640px album art image via the src attribute</li>
        <li>Make sure you use the exact class names provided in the CSS</li>
    </ul>

Let users know when search returns no album data
    If the search returns no album data, display the text "No albums found that match: 'title'."
    
## Extra Credit

To get an "exceeds" rating, you can expand on the project in the following ways:

Link an album to its Spotify page
        Wrap the album art image In an "a" tag that links an album to its spotify.com listing
        For example: Luck Of The Draw
Create an album description page
        Use the “albums” endpoint and the album id to get details for an album if clicked
        Load or link to a description page displaying a album's title, year, album art, tracklist, and artist
        You'll need to write the CSS for this new page
        See the 'description-page.png' mockup in the 'examples' folder of the project files

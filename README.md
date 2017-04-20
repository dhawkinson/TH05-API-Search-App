# fsjsProject05
<h2>Use a Public API to Build a Search App</h2>

In this project, you'll build a "Album Search" app using the Spotify API.

You'll need to use your knowledge of basic JavaScript, jQuery, and AJAX including loading JSON data from a server using a GET HTTP request.

We'll give you basic HTML, CSS, and a JavaScript file to get you started. You'll need to program the search form to return album data in JSON format based on the form submission. You'll use the API data to dynamically create HTML displaying an album's title, artist, and album art image.

<h2>Project Instructions</h2>

To complete this project, follow the instructions below. If you get stuck, ask a question in the community.

<h3>Request data from the Spotify API to display album information</h3>
Go to https://developer.spotify.com/ to start using the API documentation.
Use Spotify's 'search by album' endpoint to return albums found to match the name passed to the value of the “q” parameter, or query parameter
The data should return in JSON format
<h3>Display search results on the page</h3>
The data should load inside the #albums \<ul>.
Please see the comments in index.html for samples of the HTML you'll need to dynamically create with JavaScript
For each album returned, render an \<li> displaying these items inside:
<ul>
    <li>Album title</li>
    <li>Album art image</li>
    <li>Render an "img" that displays the 640px x 640px album art image via the src attribute</li>
    <li>Make sure you use the exact class names provided in the CSS</li>
</ul>

<h3>Let users know when search returns no album data</h3>
If the search returns no album data, display the text "No albums found that match: 'title'."
See a sample of the code you'll need to display in the index.html comments
<h2>Extra Credit</h2>

<strong>To get an "exceeds" rating, you can expand on the project in the following ways:</strong>

<ul>
    <li>Link an album to its Spotify page</li>
        <ul>
            <li>Wrap the album art image -- or everything in the "li" In an "a" tag that links an album to its spotify.com listing</li>
            <li>For example: Luck Of The Draw</li>
        </ul>
    <li>Create an album description page</li>
        <ul>
            <li>Use the “albums” endpoint and the album id to get details for an album if clicked</li>
            <li>Load or link to a description page displaying a album's title, year, album art, tracklist, and artist</li>
            <li>You'll need to write the CSS for this new page</li>
            <li>See the 'description-page.png' mockup in the 'examples' folder of the project files</li>
        </ul>
</ul>
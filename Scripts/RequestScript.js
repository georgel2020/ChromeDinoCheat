// Request Script: Send request to chromedino.com to upload score (only use in chromedino.com)
var xhr = new XMLHttpRequest();
xhr.open('GET', '/inc/set.php?name=' + 'Username' + '&score=' + 199999, false); // Change 'Username' to your name and change '199999' to your score (a value more than 199999 will be considered to hack the game)
xhr.send();

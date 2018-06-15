$(document).ready(function(){

$(document).on("click", ".scrape-new", function() {
    // Grab the articles as a json
$.getJSON("/articles", function(result) {
    // For each one
    for (var i = 0; i < result.length; i++) {
    
      $("#articles").append("<p result-id='" + result[i]._id + "'>" + result[i].title + "<br />" + result[i].link + "</p>");
    }
  });
  });
  
  // When you click the savenote button
  $(document).on("click", ".btn.save", function() {
    $.getJSON("/saved", function(result) {
        // For each one
        for (var i = 0; i < result.length; i++) {
          // Display the apropos information on the page
          $("#articles").append("<p result-id='" + result[i]._id + "'>" + result[i].title + "<br />" + result[i].link + "</p>");
        }
      });
  });
});

$(document).ready(function() {

  $('#searchButton').on('click', function() {
    var searchTerm = $('#searchBox').val();
    console.log(searchTerm);
    var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + '&format=json&callback=?';
    $.ajax({
      url: url,
      type: 'GET',
      contentType: "application/json; charset=utf-8",
      async: false,
      dataType: 'json',
      success: function(data, status, jqXHR) {
        console.log(data);
        $('#output').html('');
        for (var i = 0; i < data[1].length; i++) {
          $("#output").prepend("<div><div class='well'><a href=" + data[3][i] + "><h2>" + data[1][i] + "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
        };
      }
    })
  }); //searchbutton watcher
  $('#randomButton').on('click', function() {
    window.open('https://en.wikipedia.org/wiki/Special:Random', '_blank');
  }); //randonButton watcher


}) // ready

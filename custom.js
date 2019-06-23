$(function() {
  // Setup drop down menu
  $('.dropdown-toggle').dropdown();

  // Fix input element click problem
  $('.dropdown input, .dropdown label, .dropdown').click(function(e) {
    e.stopPropagation();
  });
});

$(function() {
  $("#peopleBtn").click(function() {
    $("#genreSelector").collapse('hide');
  });
  $("#genreBtn").click(function() {
    $("#peopleSelector").collapse('hide');
  });
  $('#peopleSelector').on('hidden.bs.collapse', function () {
    $("#peopleBtn").removeClass("active");
  });
  $('#genreSelector').on('hidden.bs.collapse', function () {
    $("#genreBtn").removeClass("active");
  })
});

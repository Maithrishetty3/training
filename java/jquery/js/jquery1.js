$(document).ready(function () {
  $("#button_size").click(function () {
    $("#box").show();
    $(".circle").show();
  });
  $("#hide_circle").click(function () {
    // $("#box").show();
    $(".circle").hide();
  });
  $("#change_color").click(function () {
    $(".circle").css({ 'background-color': 'red' });
  });
  $(".toggle_box").click(function () {
    $(".maithri").toggle();
  });
});
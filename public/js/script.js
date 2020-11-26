$(document).ready(function() {
  responsive();
  $(window).resize(function() {
    responsive();
  });

  setInterval(responsive, 100);
  function responsive() {
    var header_height = $(".navbar").outerHeight();
    var sidebar_width = $("#sidebar").outerWidth();
    let temp = $("#sidebar").css("margin-left");
    if ($("#sidebar").css("margin-left") == "0px") {
      $("#sub-content").css({
        "margin-top": header_height,
        "margin-left": sidebar_width
      });
    } else {
      $("#sub-content").css({
        "margin-top": header_height,
        "margin-left": "0",
        width: "auto"
      });
    }
    $(".mapContainer").each(function() {
      this.css({
        height: "400px"
      });
    });
  }
});

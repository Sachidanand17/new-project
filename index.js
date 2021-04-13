var className = ["a", "b", "c", "d", "e", "f", "g", "h"]

for (var i = 0; i < 8; i++) {
  $("." + className[i]).hover(function () {
        $(this).toggleClass("animate__bounceIn");
  })
}

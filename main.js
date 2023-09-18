function main() {
  // Get all elements with the class "div"
  var elements = document.getElementsByClassName("div");

  // Loop through the elements and attach a click event listener to each
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function() {
      alert("This is an alert");
    });
  }
}

main();

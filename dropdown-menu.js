var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {

  dropdown[i].addEventListener("mouseenter", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });

  dropdown[i].nextElementSibling.addEventListener("mouseleave", function() {
    this.previousElementSibling.classList.toggle("active");
    this.style.display = "none";
  });
}
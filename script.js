let showMore = false;
const experience = document.getElementById("experience");
const showBtn = document.getElementById("show-btn");

showBtn.addEventListener("click", function () {
  if (showMore === false) {
    showMore = true;
    experience.classList.remove("exp-hide");
    //change text on showBtn to "Show less"
    showBtn.innerHTML = "Visa mindre";
  } else {
    showMore = false;
    experience.classList.add("exp-hide");
    showBtn.innerHTML = "Visa mer";
  }
});

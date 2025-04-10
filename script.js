let showMore = false;
const experience = document.getElementById("experience");
const showBtn = document.getElementById("show-btn");

showBtn.addEventListener("click", function () {
  if (showMore === false) {
    showMore = true;
    experience.classList.remove("exp-hide");
    //chang text on showBtn to "Show less"
    showBtn.innerHTML = "Visa mindre";
  } else {
    showMore = false;
    experience.classList.add("exp-hide");
  }
});

let showMore = false;
const experience = document.getElementById("experience");
const showBtn = document.getElementById("show-btn");

document.addEventListener("click", function () {
  event.preventDefault();

  if (showMore === false) {
    showMore = true;
    experience.classList.remove("exp-hide");
    //showBtn
  } else {
    showMore = false;
    experience.classList.add("exp-hide");
  }
});

const clickableTitle = document.querySelector("h1");

clickableTitle.addEventListener("mouseover", () => {
  clickableTitle.style.cursor = "pointer";
  clickableTitle.style.color = "#6d6d6de0";
});

clickableTitle.addEventListener("mouseleave", () => {
    clickableTitle.style.color = "#f0f0f2";
})

clickableTitle.addEventListener("click", () => {
  window.location.assign("./index.html");
});

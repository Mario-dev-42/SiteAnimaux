const buttons = document.querySelectorAll("#buttonFiche");
// console.log(buttons);

const params = new URLSearchParams(window.location.search);
buttons.forEach(function (value, key) {
  value.addEventListener("click", function () {
    params.append("animal", value.dataset.index);
    window.location = "ficheAnimal.html?" + params.toString();
  });
});

// const params = new URLSearchParams(window.location.search);
// console.log(params.toString());
// console.log(value.dataset.index);

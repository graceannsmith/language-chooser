
function findLanguage(answer) {
  let result = "";
  if (answer === "SUDOKU") {
    result = "You should learn javaScript!";
  } else if (answer === "CROSSWORD") {
    result = "You should learn C#!";
  } else {
    result = "You should learn Python!";
  }
  return result;
}
window.onload = function () {
  let form = document.querySelector("form");
  form.onsubmit = function (event) {
    let selected = document.querySelector("input:checked").value;
    findLanguage(selected);
    let resultText = findLanguage(selected);
    form.reset();
    document.querySelector("h2").innerText = resultText;
    event.preventDefault();
  }
};

//Business
let result = "";

function findLanguage(answer) {
  if (answer === "SUDOKU") {
    result = "You should learn javaScript!";
  } else if (answer === "CROSSWORD") {
    result = "You should learn C#!";
  } else {
    result = "You should learn Python!";
  }
  return result;
}



//User
window.onload = function () {
  let form = document.querySelector("form");
  let output = document.querySelector("h2#output");



  form.onsubmit = function (event) {
    let selected = document.querySelector("input:checked").value;

    findLanguage(selected);

    form.reset();
    document.querySelector("h2").innerText = result;
    event.preventDefault();
  }
};




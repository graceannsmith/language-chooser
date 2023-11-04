//Business


let result = "";
function findLanguage(answer) {
  if (answer === "Sudoku") {
    result = "You should learn Python!";
  } else if (answer === "Crossword") {
    "You should learn HTML!";
  } else {
    result = "You should learn javaScript!";
  }

  return result;
}



//User

function handleLanguage(event) {
  event.preventDefault();
  // the code to get and process form values will go here!
}

window.addEventListener("load", function () {
  const form = document.getElementById("calculator");
  form.addEventListener("submit", handleCalculation);
});


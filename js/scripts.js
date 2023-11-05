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
window.onload = function () {

  const choiceOne = document.querySelector('label[for="sudoku"]');
  const choiceTwo = document.querySelector('label[for="crossword"]');
  const choiceThree = document.querySelector('label[for="wordsearch"]');
  // Select the form element
  const form = document.querySelector('#formOne');

  // Select the input element within the form
  const inputElement = form.querySelector('#myInput');

  // Select the button to trigger the action
  const submitButton = document.querySelector('#submitButton');

  // Add an event listener to the button to get the value
  submitButton.addEventListener('click', function () {
    // Get the value of the input element
    const value = inputElement.value;

    // Do something with the value
    console.log('The value of the input element is: ' + value);
  });



};

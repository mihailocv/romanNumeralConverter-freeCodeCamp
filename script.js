const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputText = document.getElementById("output");
const decimalAndRoman = [
  {
    decimal: 1000,
    roman: "M",
  },
  {
    decimal: 900,
    roman: "CM",
  },
  {
    decimal: 500,
    roman: "D",
  },
  {
    decimal: 400,
    roman: "CD",
  },
  {
    decimal: 100,
    roman: "C",
  },
  {
    decimal: 90,
    roman: "XC",
  },
  {
    decimal: 50,
    roman: "L",
  },
  {
    decimal: 40,
    roman: "XL",
  },
  {
    decimal: 10,
    roman: "X",
  },
  {
    decimal: 9,
    roman: "IX",
  },
  {
    decimal: 5,
    roman: "V",
  },
  {
    decimal: 4,
    roman: "IV",
  },
  {
    decimal: 1,
    roman: "I",
  },
];
Object.freeze(decimalAndRoman);

/**
 * Converts a given number to its Roman numeral representation.
 * @param {number} number - The number to convert to Roman numeral.
 * @returns {string} The Roman numeral representation of the given number.
 */
const convertToRoman = (number) => {
  let romanNumber = "";

  for (let i = 0; i < decimalAndRoman.length; i++) {
    while (number >= decimalAndRoman[i].decimal) {
      romanNumber += decimalAndRoman[i].roman;
      number -= decimalAndRoman[i].decimal;
    }
  }

  return romanNumber;
};

/**
 * Handles the submission of the conversion form.
 * Parses the input number and validates it.
 * Displays appropriate error messages for invalid input.
 * Converts valid input numbers to Roman numerals and displays the result.
 */
const handleConvertSubmit = () => {
  const numberInt = parseInt(numberInput.value, 10);
  outputText.classList.replace("border-danger", "border-primary");
  outputText.classList.remove("text-danger");
  numberInput.value = "";

  if (isNaN(numberInt)) {
    outputText.textContent = "Please enter a valid number";
    outputText.classList.replace("border-primary", "border-danger");
    outputText.classList.add("text-danger");
    return;
  } else if (numberInt < 1) {
    outputText.textContent = "Please enter a number greater than or equal to 1";
    outputText.classList.replace("border-primary", "border-danger");
    outputText.classList.add("text-danger");
    return;
  } else if (numberInt > 3999) {
    outputText.textContent = "Please enter a number less than or equal to 3999";
    outputText.classList.replace("border-primary", "border-danger");
    outputText.classList.add("text-danger");
    return;
  }

  outputText.textContent = convertToRoman(numberInt);
};

convertBtn.addEventListener("click", handleConvertSubmit);
numberInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    handleConvertSubmit();
  }
});

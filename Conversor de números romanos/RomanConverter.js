const RomanConverter = {
  romanToArabic: function (romanNumeral) {
    if (!romanNumeral) {
      return ''; // Retorna uma string vazia se o número romano estiver vazio
    }

    const romanToArabic = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };

    let result = 0;
    let previousValue = 0;

    for (let i = romanNumeral.length - 1; i >= 0; i--) {
      const currentValue = romanToArabic[romanNumeral[i]];

      if (currentValue < previousValue) {
        result -= currentValue;
      } else {
        result += currentValue;
        previousValue = currentValue;
      }
    }

    return result;
  },

  arabicToRoman: function (arabicNumeral) {
    if (!arabicNumeral) {
      return ''; // Retorna uma string vazia se o número arábico estiver vazio
    }

    const arabicToRoman = {
      1: "I",
      4: "IV",
      5: "V",
      9: "IX",
      10: "X",
      40: "XL",
      50: "L",
      90: "XC",
      100: "C",
      400: "CD",
      500: "D",
      900: "CM",
      1000: "M"
    };

    let result = "";

    for (const [value, symbol] of Object.entries(arabicToRoman).reverse()) {
      const intValue = parseInt(value);

      while (arabicNumeral >= intValue) {
        result += symbol;
        arabicNumeral -= intValue;
      }
    }

    return result;
  }
};

function convertRomanToArabic() {
  const romanNumeral = document.getElementById('romanNumeralInput').value;
  const resultContainer1 = document.getElementById('resultContainer');
  const resultContainer2 = document.getElementById('resultContainer2');

  resultContainer1.innerHTML = '';
  resultContainer2.innerHTML = '';

  if (romanNumeral) {
    const arabicResult = RomanConverter.romanToArabic(romanNumeral);
    resultContainer1.innerHTML = `Número Romano convertido para Arábico: ${arabicResult}<br>`;
  }
}

function convertArabicToRoman() {
  const arabicNumeral = document.getElementById('arabicNumeralInput').value;
  const resultContainer = document.getElementById('resultContainer');
  const resultContainer2 = document.getElementById('resultContainer2');

  resultContainer.innerHTML = '';
  resultContainer2.innerHTML = '';

  if (arabicNumeral) {
    const romanResult = RomanConverter.arabicToRoman(arabicNumeral);
    resultContainer.innerHTML = `Número Arábico convertido para Romano: ${romanResult}<br>`;
  }
}

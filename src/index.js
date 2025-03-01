module.exports = function toReadable (number) {
    let numeral = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
    };
  
    let count = {
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
    };
  
    let dozens = {
      2: 'twenty',
      3: 'thirty',
      4: 'forty',
      5: 'fifty',
      6: 'sixty',
      7: 'seventy',
      8: 'eighty',
      9: 'ninety',
    };
  
    let hundreds = {
      1: 'one hundred',
      2: 'two hundred',
      3: 'three hundred',
      4: 'four hundred',
      5: 'five hundred',
      6: 'six hundred',
      7: 'seven hundred',
      8: 'eight hundred',
      9: 'nine hundred',
    }
  
    if (number < 10) {
      return numeral[number];
  
    } else if (number < 20) {
      return count[number];
  
    } else if (number < 100) {
          if (number % 10 === 0) {
              return dozens[number / 10];
          } else {
              return dozens[Math.floor(number / 10)] + ' ' + numeral[number % 10];
          }
    } else {
          if (number % 100 === 0) {
              return hundreds[(number / 100)];
          } else {
              return hundreds[Math.floor(number / 100)] + ' ' + toReadable(number % 100);
          }
    }
  }
  
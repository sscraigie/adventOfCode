import { inputs } from "./input";

/**
 * Part One
 */
const partOne = (input: string[]) => {
  let firstNu;
  let total = 0;

  input.forEach((string) => {
    let count = 1;
    let value = string.replace(/[a-zA-Z]/g, "");
    let twoDigit = value[0] + value.charAt(value.length - 1);
    let number = parseInt(twoDigit);
    total = total + number;
  });
  return total;
};

/**
 * Part Two
 */
const partTwo = (input: string[]) => {
  const spellings3 = ["one", "two", "six"];
  const spellings4 = ["four", "five", "nine"];
  const spellings5 = ["three", "seven", "eight"];

  let total = 0;

  input.forEach((string) => {
    let newString = "";
    for (let index = 0; index < string.length; index++) {
      if (/[0-9]/.test(string[index])) {
        newString = newString + string[index];
      }

      //Check 3 letters
      let substring3 = string.substring(index, index + 3);
      let substring4 = string.substring(index, index + 4);
      let substring5 = string.substring(index, index + 5);
      if (spellings3.includes(substring3)) {
        if (substring3 === "one") newString = newString + "1";
        else if (substring3 === "two") newString = newString + "2";
        else newString = newString + "6";
      }

      //Check 4 letters
      else if (spellings4.includes(substring4)) {
        if (substring4 === "four") newString = newString + "4";
        else if (substring4 === "five") newString = newString + "5";
        else newString = newString + "9";
      }
      //Check 5 letters
      else if (spellings5.includes(substring5)) {
        if (substring5 === "three") newString = newString + "3";
        else if (substring5 === "seven") newString = newString + "7";
        else newString = newString + "8";
      }
    }

    let twoDigit = newString[0] + newString.charAt(newString.length - 1);
    let number = parseInt(twoDigit);
    total = total + number;
  });
  return total;
};

console.log(partOne(inputs));
console.log(partTwo(inputs));

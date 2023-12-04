import { inputs } from "./input";

/**
 * Part One
 */
const partOne = (input: string[]) => {
  type validColor = "red" | "green" | "blue";
  const bag = {
    red: 12,
    green: 13,
    blue: 14,
  };

  let total = 0;
  input.forEach((line) => {
    let validGame = true;
    //Parse Lines
    let gameNumber = parseInt(line.match(/(?<=Game )([0-9]*)/)![0]);
    let rounds = line.match(/(?<=: |; |, )([0-9]* [a-z]*)/g);
    //Check if rounds === null
    if (rounds === null) throw new Error("Rounds can not be null");

    //For each round, check if it could be a valid game
    for (let index = 0; index < rounds.length; index++) {
      let [value, color]: string[] = rounds[index].split(" ");
      if (!Object.keys(bag).includes(color)) {
        validGame = false;
        break;
      }
      if (parseInt(value) > bag[color as validColor]) {
        validGame = false;
        break;
      }
    }

    //Add gameNumber to total if it's a valid game
    if (validGame) total = total + gameNumber;
  });
  return total;
};

/**
 * Part Two
 */

const partTwo = (input: string[]) => {
  let total = 0;

  input.forEach((line) => {
    console.log(line);

    let minCubs: any = {};
    //Parse Lines
    let rounds = line.match(/(?<=: |; |, )([0-9]* [a-z]*)/g);
    console.log(rounds);
    //Check if rounds === null
    if (rounds === null) throw new Error("Rounds can not be null");

    //For each round, check if it could be a valid game
    for (let index = 0; index < rounds.length; index++) {
      let [valueString, color]: string[] = rounds[index].split(" ");
      let value = parseInt(valueString);

      console.log(color, ": ", minCubs[color], "", value);
      // minCubs[color] = Math.max(minCubs, value);
      if (minCubs[color] < value || minCubs[color] === undefined) {
        minCubs[color] = value;
      }
      console.log(minCubs[color]);
    }
    console.log(minCubs);
    const keys = Object.keys(minCubs);
    let result = minCubs[keys[0]];
    for (let index = 1; index < keys.length; index++) {
      result = result * minCubs[keys[index]];
    }
    console.log(result);
    total = total + result;
  });
  return total;
};

console.log(partOne(inputs));
console.log(partTwo(inputs));

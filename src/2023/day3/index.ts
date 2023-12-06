import { inputs } from "./input";
const example = [
  "467..114..",
  "...*......",
  "..35..633.",
  "......#...",
  "617*......",
  ".....+.58.",
  "..592.....",
  "......755.",
  "...$.*....",
  ".664.598..",
];

/**
 * Part One
 */
const partOne = (input: string[]) => {
  let total = 0;
  for (let index1 = 0; index1 < input.length; index1++) {
    let line = input[index1];
    let canAddNumbers = true;
    for (let index2 = 0; index2 < input[index1].length; index2++) {
      if (/[0-9]/.test(line[index2])) {
        if (!canAddNumbers) continue;
        let charsAround = "";
        let indexPairs = [
          [index1, index2 - 1],
          [index1, index2 + 1],
          [index1 - 1, index2 - 1],
          [index1 - 1, index2],
          [index1 - 1, index2 + 1],
          [index1 + 1, index2 - 1],
          [index1 + 1, index2],
          [index1 + 1, index2 + 1],
        ];
        //Get Characters around
        indexPairs.forEach((i) => {
          try {
            if (input[i[0]][i[1]] != undefined) {
              charsAround = charsAround + input[i[0]][i[1]];
            }
          } catch {}
        });

        //If it includes a special character, get the number
        if (/[^0-9.]/.test(charsAround)) {
          let expandLeft = true;
          let expandRight = true;
          let leftIndex = index2 - 1;
          let rightIndex = index2 + 1;
          let number = line[index2];

          //expand left if then next character isn't special
          while (expandLeft) {
            if (/[0-9]/.test(line[leftIndex])) {
              number = line[leftIndex] + number;
              leftIndex--;
            } else {
              expandLeft = false;
            }
          }
          //expand left if then next character isn't special
          while (expandRight) {
            if (/[0-9]/.test(line[rightIndex])) {
              number = number + line[rightIndex];
              rightIndex++;
            } else {
              expandRight = false;
            }
          }
          //Add number to total
          total = total + parseInt(number);
          canAddNumbers = false;
        }
      } else if (!canAddNumbers) {
        //This prevents us from adding duplicate numbers
        canAddNumbers = true;
      }
    }
  }

  return total;
};

/**
 * Part Two
 */

const partTwo = (input: string[]) => {
    //TODO: 
//   let total = 0;
//   for (let index1 = 0; index1 < input.length; index1++) {
//     let line = input[index1];
//     let canAddNumbers = true;
//     for (let index2 = 0; index2 < input[index1].length; index2++) {
//       if (/[0-9]/.test(line[index2])) {
//         if (!canAddNumbers) continue;
//         let charsAround = "";
//         let indexPairs = [
//           [index1, index2 - 1],
//           [index1, index2 + 1],
//           [index1 - 1, index2 - 1],
//           [index1 - 1, index2],
//           [index1 - 1, index2 + 1],
//           [index1 + 1, index2 - 1],
//           [index1 + 1, index2],
//           [index1 + 1, index2 + 1],
//         ];
//         //Get Characters around
//         indexPairs.forEach((i) => {
//           try {
//             if (input[i[0]][i[1]] != undefined) {
//               charsAround = charsAround + input[i[0]][i[1]];
//             }
//           } catch {}
//         });

//         //If it includes a special character, get the number
//         if (/[^0-9.]/.test(charsAround)) {
//           let expandLeft = true;
//           let expandRight = true;
//           let leftIndex = index2 - 1;
//           let rightIndex = index2 + 1;
//           let number = line[index2];

//           //expand left if then next character isn't special
//           while (expandLeft) {
//             if (/[0-9]/.test(line[leftIndex])) {
//               number = line[leftIndex] + number;
//               leftIndex--;
//             } else {
//               expandLeft = false;
//             }
//           }
//           //expand left if then next character isn't special
//           while (expandRight) {
//             if (/[0-9]/.test(line[rightIndex])) {
//               number = number + line[rightIndex];
//               rightIndex++;
//             } else {
//               expandRight = false;
//             }
//           }
//           //Add number to total
//           console.log({ number });
//           total = total + parseInt(number);
//           canAddNumbers = false;
//         }
//       } else if (!canAddNumbers) {
//         //This prevents us from adding duplicate numbers
//         canAddNumbers = true;
//       }
//     }
  }

  return total;
};

console.log(partOne(inputs));
console.log(partTwo(inputs));
// console.log(partOne(example));

//600585 high
//299354 low

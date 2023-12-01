const getElfFood = async () => {
  const response = await fetch("https://adventofcode.com/2022/day/1/input", {
    headers: {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "max-age=0",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "sec-gpc": "1",
      "upgrade-insecure-requests": "1",
    },
    referrer: "https://adventofcode.com/2022/day/1",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: null,
    method: "GET",
    mode: "cors",
    credentials: "include",
  });
  console.log(response);
  return response;
};

getElfFood();

//console.log(getElfFood());

// const calculateMostCalories = () => {
//   let elfCaloryDict = [];

//   let currentElf = 1;
//   let currentCalories = 0;
//   let elfWithMostCalories;
//   let mostCalories;

//   for (let index = 0; index < elfsFood.length; index++) {
//     if (index === null) {
//       console.log("END OF ELF");
//       elfCaloryDict.push({ currentElf: currentCalories });
//       console.log({ currentElf: currentCalories });
//       if (currentCalories > mostCalories) {
//         //console.log("");
//         elfWithMostCalories = currentElf;
//         mostCalories = currentCalories;
//       }
//       //console.log("Elf #", currentElf);
//       console.log(currentCalories);
//       currentElf++;
//       currentCalories = 0;
//     } else {
//       //console.log(currentCalories);
//       currentCalories += index;
//     }
//   }

//   console.log("Most Calories:", mostCalories);
//   console.log(elfCaloryDict);
// };

// calculateMostCalories();

const myFunction = (input) => {
  //let sprite = ["#","#","#",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".,.,.,.,.,.,.,.]
  let row = "";

  //let importantCycle = [20, 60, 100, 140, 180, 220];

  let importantCycle = [40, 80, 120, 160, 200, 240];

  let cycle = 0;
  let count = 1;

  input.forEach((input) => {
    if (input === "noop") {
      cycle += 1;

      if (cycle == count || cycle == count + 1 || cycle == count - 1) {
        row += "#";
        if (importantCycle.includes(cycle)) {
          //console.log(cycle, ": ", count);
          console.log(row);
          row = "";
          cycle = 0;
        }
      } else {
        row += ".";
        if (importantCycle.includes(cycle)) {
          //console.log(cycle, ": ", count);
          console.log(row);
          row = "";
          cycle = 0;
        }
      }
    } else {
      cycle += 1;

      if (cycle == count || cycle == count + 1 || cycle == count - 1) {
        row += "#";
        if (importantCycle.includes(cycle)) {
          //console.log(cycle, ": ", count);
          console.log(row);
          row = "";
          cycle = 0;
        }
      } else {
        row += ".";
        if (importantCycle.includes(cycle)) {
          //console.log(cycle, ": ", count);
          console.log(row);
          row = "";
          cycle = 0;
        }
      }

      const splitStirng = input.split(" ");
      const x = Number(splitStirng[1]);
      count += x;

      cycle += 1;

      if (cycle == count || cycle == count + 1 || cycle == count - 1)
        if (importantCycle.includes(cycle)) {
          //console.log(cycle, ": ", count);
          console.log(row);
          row = "";
        }
    }
  });
};

const input = [
  "noop",
  "noop",
  "noop",
  "noop",
  "addx 5",
  "addx 5",
  "noop",
  "addx 3",
  "noop",
  "addx 2",
  "addx 1",
  "noop",
  "noop",
  "noop",
  "addx 4",
  "addx -4",
  "addx 7",
  "addx 7",
  "noop",
  "addx -2",
  "addx 5",
  "addx -23",
  "addx 26",
  "addx -38",
  "noop",
  "noop",
  "noop",
  "addx 3",
  "addx 2",
  "addx 5",
  "addx 2",
  "addx 9",
  "addx -8",
  "addx 2",
  "addx 16",
  "addx -9",
  "addx 3",
  "addx -2",
  "addx 2",
  "noop",
  "addx 7",
  "addx -2",
  "addx 5",
  "addx 2",
  "addx 3",
  "noop",
  "addx -40",
  "addx 5",
  "noop",
  "addx 2",
  "addx -6",
  "addx 11",
  "addx -1",
  "addx 3",
  "addx 3",
  "noop",
  "noop",
  "noop",
  "addx 5",
  "addx -2",
  "noop",
  "addx 7",
  "addx 8",
  "addx -2",
  "addx -3",
  "addx 5",
  "addx 2",
  "addx -10",
  "addx -26",
  "addx 1",
  "noop",
  "addx 8",
  "addx -5",
  "addx 4",
  "addx 3",
  "addx -3",
  "addx 4",
  "addx 2",
  "addx -9",
  "addx 16",
  "addx 2",
  "noop",
  "addx 3",
  "addx 3",
  "addx 2",
  "addx -2",
  "addx 5",
  "addx 2",
  "addx 2",
  "noop",
  "addx -38",
  "addx 34",
  "addx -28",
  "addx -2",
  "addx 5",
  "addx 2",
  "addx 3",
  "addx -2",
  "addx 2",
  "addx 7",
  "noop",
  "noop",
  "addx -4",
  "addx 5",
  "addx 2",
  "addx 15",
  "addx -8",
  "addx 3",
  "noop",
  "addx 2",
  "addx -8",
  "addx 9",
  "addx -38",
  "addx 26",
  "noop",
  "addx -18",
  "noop",
  "noop",
  "addx 4",
  "addx 4",
  "addx -3",
  "addx 2",
  "addx 20",
  "addx -12",
  "noop",
  "noop",
  "noop",
  "addx 4",
  "addx 1",
  "noop",
  "addx 5",
  "noop",
  "noop",
  "addx 5",
  "noop",
  "noop",
  "noop",
  "noop",
  "noop",
  "noop",
  "noop",
];

myFunction(input);

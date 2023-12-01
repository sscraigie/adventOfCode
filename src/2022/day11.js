const myFunction = () => {
  // let monkey0 = input[0]["monkey0"]["items"];
  // let monkey1 = input[1]["monkey1"]["items"];
  // let monkey2 = input[2]["monkey2"]["items"];
  // let monkey3 = input[3]["monkey3"]["items"];
  // let monkey4 = input[4]["monkey4"]["items"];
  // let monkey5 = input[5]["monkey5"]["items"];
  // let monkey6 = input[6]["monkey6"]["items"];
  // let monkey7 = input[7]["monkey7"]["items"];

  // const monkeyArray = [monkey0,monkey1,monkey2,monkey3,monkey4,monkey5,monkey6,monkey7]

  const input = [
    {
      name: "monkey0",
      items: [54, 98, 50, 94, 69, 62, 53, 85],
      operation: "* 13",
      test: " % 3",
      true: "monkey2",
      false: "monkey1",
      count: 8,
    },
    {
      name: "monkey1",
      items: [71, 55, 82],
      operation: "+ 2",
      test: " % 13",
      true: "monkey7",
      false: "monkey2",
      count: 3,
    },
    {
      name: "monkey2",
      items: [77, 73, 86, 72, 87],
      operation: "+ 8",
      test: " % 19",
      true: "monkey4",
      false: "monkey7",
      count: 5,
    },
    {
      name: "monkey3",
      items: [97, 91],
      operation: "+ 1",
      test: " % 17",
      true: "monkey6",
      false: "monkey5",
      count: 2,
    },
    {
      name: "monkey4",
      items: [78, 97, 51, 85, 66, 63, 62],
      operation: "* 17",
      test: " % 5",
      true: "monkey6",
      false: "monkey3",
      count: 7,
    },
    {
      name: "monkey5",
      items: [88],
      operation: "+ 3",
      test: " % 7",
      true: "monkey1",
      false: "monkey0",
      count: 1,
    },
    {
      name: "monkey6",
      items: [87, 57, 63, 86, 87, 53],
      operation: " ^ 2",
      test: " % 11",
      true: "monkey5",
      false: "monkey0",
      count: 6,
    },
    {
      name: "monkey7",
      items: [73, 59, 82, 65],
      operation: "+ 6",
      test: " % 2",
      true: "monkey4",
      false: "monkey3",
      count: 4,
    },
  ];

  for (let index = 0; index < 20; index++) {
    console.log("Index", index);
    input.forEach((monkey) => {
      console.log(monkey.name);
      monkey.items.forEach((item) => {
        monkey.items.pop(item);
        let operation = item + monkey.operation;
        //console.log(operation)
        const splitOp = operation.split(" ");
        let newValue = eval(operation);
        if (splitOp[1] === "^") {
          console.warn("found one", operation);
          newValue = item * item;
        }
        let test = newValue + monkey.test;

        //console.log("running test");
        let monkeyName;
        if (eval(test) === 0) {
          monkeyName = monkey.true;
          console.log(operation, test, eval(test) === 0);
        } else {
          monkeyName = monkey.false;
          console.log(operation, test, eval(test) === 0);
        }

        //console.log("finding monkey");
        let monkeyPass = input.filter((monkey) => monkey.name === monkeyName);
        //console.log("monkeyPass", monkeyPass);
        monkeyPass[0].count++;
        // //console.log(monkeyPass);
        // //console.log(item);
        ////console.log(monkeyPass[0].items);

        //monkeyPass.items.push(item);
        console.log(monkeyPass[0].items);
        monkeyPass[0].items.push(item);
        console.log(monkeyPass[0].items);

        // if (index < 1) {
        //   //console.log(newValue);
        // }
      });
    });
  }
  //console.log("Finished!");
  input.forEach((monkey) => {
    console.log(monkey.name, monkey.count);
  });
};
//10,918 low
//11556 low

myFunction();

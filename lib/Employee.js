
const questions = [
    {
      type: "input",
      message: "Enter a title",
      name: "title",
    },
    {
      type: "input",
      message: "Enter a descripton",
      name: "description",
    },
    {
      type: "list",
      message: "Choose a License",
      name: "license",
      choices: ["MIT", "Mozilla-Public", "Eclipse-Public", "Apache", "none"],
    },
    {
      type: "input",
      message: "Enter usage information",
      name: "usage",
    },
    {
      type: "input",
      message: " Enter contribution guidelines",
      name: "contribution",
    },
    {
      type: "input",
      message: " Enter test instructions",
      name: "test",
    },
  ];
const inq = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const pageRender =require("./src/CardRenders");
const internArr= [];
const managerArr = [];
const engineerArr =[];




function addManager() {
  const questionsManager = [
    {
      type: "input",
      message: "Enter manager name",
      name: "name",
    },
    {
      type: "input",
      message: "Enter an Id number",
      name: "id",
    },
    {
      type: "input",
      message: "Enter office number",
      name: "officenumber",
    },
    {
      type: "input",
      message: " Enter employee email",
      name: "email",
    },
  ];
  inq.prompt(questionsManager).then((answers) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officenumber);
    managerArr.push(manager);
    newEmployee();
  });
}
function newEmployee() {
  const newQuestions = [
    {
      type: "list",
      message: " Did you want to add a another employee?",
      name: "new",
      choices: ["yes", "no"],
    },
  ];
  inq.prompt(newQuestions).then((answers) => {
      console.log(answers.new)
    if (answers.new === "yes") {
      return specifyEmployee();
    } else {
      pageRender(internArr,managerArr,engineerArr)
      console.log("You are finished making your team");
    }
  });
}
function specifyEmployee() {
  const employeeRole = [
    {
      type: "list",
      message: "What type of employee did you want to add?",
      name: "role",
      choices: ["engineer", "intern"],
    },
  ];
  inq.prompt(employeeRole).then((answers) => {
      console.log(answers.role)
    if (answers.role === "engineer") {
      return engineerQuestions();
    } else {
      return internQuestions();
    }
  });
}
function engineerQuestions() {
  const Questions = [
    {
        type: "input",
        message: "Enter name",
        name: "name",
      },
      {
        type: "input",
        message: "Enter  Id number",
        name: "id",
      },
      {
        type: "input",
        message: " Enter employee email",
        name: "email",
        // validate: function (email){ 
        //     if(!email=== /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i){
        //     return "Please enter correct email."
        //     }
        // }
      },
    {
      type: "input",
      message: "Enter github username",
      name: "github",
    },
  ];
  inq.prompt(Questions).then((answers) => {
    const engineer = new Engineer(answers.name, answers.id,answers.email,answers.github);
    engineerArr.push(engineer);
    newEmployee();

})
}
function internQuestions() {
  const Questions = [
    {
        type: "input",
        message: "Enter name",
        name: "name",
      },
      {
        type: "input",
        message: "Enter  Id number",
        name: "id",
      },
      {
        type: "input",
        message: " Enter employee email",
        name: "email",
        // validate: function (email){
        //     email.match(/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i)
        // }
      },
    {
      type: "input",
      message: "Enter intern's school",
      name: "school",
    },
  ];
  inq.prompt(Questions).then((answers) => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    internArr.push(intern);
    newEmployee();})
}

addManager()

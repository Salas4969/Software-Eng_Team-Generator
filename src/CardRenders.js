const fs = require("fs");
//create manager card render
function createManagerCard(data){
let manOutput=``
for(var i=0; i<data.length; i++) 
manOutput+= `
<div>
        Manager:
        ${data[i].name}
            <ul>
                <li>Id:${data[i].id}</li>
                <li>Email:<a href="mailto:${data[i].email}">${data[i].email}</a></li>
                <li>Office Number:${data[i].officenumber}</li>
            </ul>
    </div>
` 
return manOutput}

function createEngineerCard(data){
    let engOutput=``
    for(var i=0; i<data.length; i++) 
    engOutput+= `
    <div>
            Engineer:
            ${data[i].name}
                <ul>
                    <li>Id:${data[i].id}</li>
                    <li>Email:<a href="mailto:${data[i].email}">${data[i].email}</a></li>
                    <li>Github:<a href="https://www.github.com/${data[i].github}" target="_blank">${data[i].github}</a></li>
                </ul>
        </div>
    `
return engOutput}

function createInternCard(data){
    let intOutput=``
    for(var i=0; i<data.length; i++) 
    intOutput+= `
        <div>
                Intern:
                ${data[i].name}
                    <ul>
                        <li>Id:${data[i].id}</li>
                        <li>Email:<a href="mailto:${data[i].email}">${data[i].email}</a></li>
                        <li>School:${data[i].school}</li>
                    </ul>
            </div>
        `
    return intOutput}

function pageRender(internArr,managerArr,engineerArr){
    fs.writeFile("./dist/index.html",
    `
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>Team-Page</title>
    </head>
    <body>
    ${createManagerCard(managerArr)}

    ${createEngineerCard(engineerArr)}

    ${createInternCard(internArr)}
    </body>
    </html>
    `,function (error){
        if (error){
            return console.log(error)
        }
    })}
    module.exports = pageRender
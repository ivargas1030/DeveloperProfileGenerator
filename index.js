const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generateHTML = require("./generateHTML");
const pdf = require("html-pdf");
const options = {format: 'Letter'};
/*const questions = [
  
];

function writeToFile(fileName, data) {
 
}

function init() {

init()};
*/

//const writeFileAsync = axios.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What is your Github user name?"
    },
    {
      type: "list",
      name: "color",
      choices: ["pink", "red", "blue", "green"],
      message: "Pick a color",
    },
  ]);
  }

  axios.get(queryURL).then(function(info) {
    let gitHub = info.data;

    avatarURL = gitHub.avatar_url;
    gitName = gitHub.name;
    gitLocation = gitHub.location;
    gitBlog = gitHub.blog;
    gitBio = gitHub.bio;
    gitRepositories = gitHub.public_repos;
    gitFollowers = gitHub.followers;
    gitUsersFollowing = gitHub.following;


/*function generateHTML(answers) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
}

*/

promptUser()
  .then(function(answers) {
    const html = generateHTML(answers);

    return writeFileAsync("index.html", html);
  })
  .then(function() {
    console.log("Successfully wrote to index.html");
  })
  .catch(function(err) {
    console.log(err);
  });


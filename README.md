# README.md Generator: Node.js and Express
# Description
# The what, why, and how:

#### Every good project needs a quality README with information about the app - what the app is for, how to use the app, how to install, so that other developers are more likely to use and contribute to the success of the project.

####  This is a command-line application that runs with Node.js that dynamically generates a README.md file based on input about your project. Check out the ExampleREADME.md in this repo as an example.

- Table of Contents
- Installation
- Usage
-  Methodology
- ERD
######  ==========================================================================================================

## Installation
### To generate your own README, git clone the repo down to your local so you have the Node project on your local.
* git clone <https://github.com/AlekyaOntela11/Assignment-3.git>
* npm init
* npm install 
* npm install nodemon -save-dev
* npm install express dotenv 

#### run this command *** npx nodemon index.js *** 
####  Run npm install in order to install the following npm package dependencies as specified in the package.json
####  The application will start by running node index.js in the command line.

######  ==========================================================================================================

#### Answer the prompts in your command line to generate the README.

#### The README has some automatically generated badges for your repo courtesy of shields.io and will include your profile picture & email from GitHub.

######  ==========================================================================================================


## Usage
### Gif demo of README-generator

#### When you run node index.js, the application uses the inquirer package to prompt you in the command line with a series of questions about your GitHub and about your project.

#### The application then takes your responses and uses axios to fetch your GitHub profile from the GitHub API, including your GitHub profile picture (avatar) and email. From there, the application will generate markdown and a table of contents for the README conditionally based on your responses to the Inquirer prompts (so, if you don't answer the optional questions, such as Installation, an Installation section will not be included in your README). The README will also include badges for your GitHub repo.

######  ==========================================================================================================

## Methodology
#### The application utilizes modularization by separating the GitHub API call and generation of the markdown into separate modules: index.js, inside the server/models  and routes folder.

#### The application also utilizes, as much as possible, syntax and paradigms introduced in express and beyond, including:
* Arrow functions,
* const, let,
* await 

### git clone 

[![ER digram of the code](/Public/Images/ERD.png)]

See the section on *[Alekya Ontela](https://github.com/AlekyaOntela11/Assignment-3.git)*.


var readlineSync = require("readline-sync");
const chalk = require("chalk");
var rankholders = [{Name : "Joy",
                    Score : 5}] // Scoreboard
var friends = ["Joy"]; //Friends List
var score = 0;

var name = readlineSync.question("What is your name my friend? "); //Players Name

//Just to sort rankholders based on their score
function compare(a, b){
  //Checking Score
  if (a.Score > b.Score){
    return -11;
  }
  else if(a.Score < b.Score){
    return 1;
  }
  else{
    return
  }
}

//Fucntion to display scoreboard
function scoreboard(rankholders){
  rankholders.sort(compare); //Sort the score board
  console.log("Scoreboard\n");

  for(var x = 0; x < rankholders.length; x++){
    console.log(rankholders[x].Name,"     ", rankholders[x].Score, "\n");
  }
  console.log("Now send me the screenshot!!!") // To update scoreboard and friend list/array
}

//QnA begins from here
function askyourfriend(qsn, options, ans, iteration){

  console.log(chalk.bgGreen.bold.black("Question No ", iteration, "\n"))
  console.log(chalk.bgWhite.bold.red(qsn));  // Question
  var index = readlineSync.keyInSelect(options, "What do you think? ") //User Answer

  if(index == -1){ //Cancel Feature
    console.log(chalk.bgWhite.bold.blue("Dude got no chill!! \n"))
  }
  
  //Validating user's answer
  else if(options[index] === ans){
    console.log(chalk.bold.blue("You are right ", name));
    score++;
    console.log(chalk.bgWhite.bold.blue("Score : ", score));
  }

  //If the answer isn't correct
  else{
    console.log(chalk.bold.red("Com'on ", name, "I thought you'd know me!! \n"));
    console.log(chalk.bgWhite.bold.red("Score : ", score, "\n"))
  }
}

//Driver Code

function main(){
  
  // One can not play this came again n again
  if(friends.includes(name)){
    console.log(chalk.bgBlack.bold.yellow("Sorry! ",name, ". You can't play it twice."))
    return; //Returning nothing, pass the control back to function call
  }
  
  console.log("Joy and Neogcamp welcome you to\n ", chalk.bgYellow.bold.white("Kon Janta h Joy ko Sahi? \n"));

  // Top-Secret
  var myself = [
    {
      question : "Am I a Cat person or a Dog person? ",
      options : ["Cat", "Dog"],
      answer : "Cat"
    },
    {
      question : "What is my favourite color? ",
      options : ["Blue", "Black", "Red", "Yellow"],
      answer : "Blue"
    },
    {
      question : "What is the name of my first school? ",
      options : ["Gyan Deep", "Bal Gopal", "Dhanuka"],
      answer : "Bal Gopal"
    },
    {
      question : "Was my highschool coed or just boys? ",
      options : ["Coed", "Boys"],
      answer : "Boys",
    },
    {
      question : "What would I like to eat most of the time? ",
      options : ["Momos",
                  "Maggi",
                  "Pizza",
                  "Burger"],
      answer : "Momos"
    }
  ];

  //Iterating over each QnA and passing it to the function "askyourfriend"
  for (var x = 1; x <= myself.length; x ++){
    askyourfriend(myself[x -1].question, myself[x -1].options, myself[x-1].answer, x)
  }

  //Clear all the previous code
  console.clear();

  //After successfull QnA session, Now append the user's name into the list
  friends.push(name);

  // Along with his/her name ans score
  rankholders.push({Name : name,
                    Score  : score});
  scoreboard(rankholders) //It's Display time
}

// Exectuion begins from here
main()
/* // THIS IS EXERCISE ONE
var questionOne = "Pick a number";
var answerOne = prompt(questionOne);
var total = 0;
for (var num = 1; num <= answerOne; num++) {
	total += num;
}
alert("The total is " + total); 
*/
/* //THIS IS EXERCISE TWO
var game = " Enter a word "
var questionTwo = " Do you want to play? y or n ";
var totalWords = 'Your answers were...';
do{ 
var answerTwo = prompt(questionTwo);
	if(answerTwo == "y") { 
var gameAnswer = prompt(game); 
totalWords =+ gameAnswer ;
}
} while (answerTwo == "y");
alert (totalWords);
*/
/* //THIS IS EXERCISE THREE
var  questionThree= "Would you like to print your name? y or n";
var printName= " Hello. My name is " ;
var nameQuestion = "What is your name?";
var x = "!";
var i = " ";
do {
	var answerThree = prompt(questionThree);
	if(answerThree == "y");
		var nameGame = prompt(nameQuestion); 
	    var nameGameAnswer = alert(printName + nameGame + i);
	    i = i + x 
	} while (answerThree== "y")
*/
//THIS IS EXERCISE FOUR
do {
var questionFour = "What time of day is it? morning/noon/evening ";
	var answerFour = prompt(questionFour);
	var answerForm = answerFour.toUpperCase();
	var time = [ "MORNING", "NOON", "EVENING"]
if(answerForm == "MORNING") {
	alert("Since it is " + answerFour.toLowerCase()  + "," + "you should eat eggs and toast.")
}
else if(answerForm == "NOON") {
	alert ("Since it is " + answerFour.toLowerCase()  + "," + "you should eat a salad.")
}
else if( answerForm == "EVENING") {
	alert ("Since it is " + answerFour.toLowerCase() + "," + "you should eat chicken and rice.")
} 
} while (answerForm = time )












//Objects created for each player
var lukeSkywalker = {
	name: "Luke Skywalker",
	health: 100,
	attack: 10,
	constant: 10,
	counter: 5,
};

var obiWan = {
	name: "Obi Wan Kenobi",
	health: 120,
	attack: 18,
	constant: 18,
	counter: 10,
	wins: 0,
};

var darthSidious = {
	name: "Darth Sidious",
	health: 150,
	attack: 15,
	constant: 15,
	counter: 20,
};

var darthMaul = {
	name: "Darth Maul",
	health: 180,
	attack: 20,
	constant: 20,
	counter: 10,
};

//Begin document.ready function
$(document).ready(function(){

//Begin fighter click function	
$('.chooseCharacter').on('click', character);
$('.chooseCharacter').click(function(){
	$('.chooseCharacter').off('click', character);
});	//End fighter click function
	
//Begin opponent click function
$('.enemySection').on('click', defender);
$('.enemySection').click(function(){
}); //End opponent click function

//Activate attack function via the attack button
$('#fight').click(attack);

}); //End document.ready function

//Function to append yourCharacter and enemies available to their respective sections
function character(){
	$('.enemySection').append($('.chooseCharacter'));
	$('.yourSection').append(this);
} //End function to append yourCharacter and enemies available to their respective sections

//Function to append opponent to respective section
function defender(event){
	$('.defense').append($(event.target).parents('.chooseCharacter'));	
} //End function to append opponent to respective section


//Begin function to select and track fighters and opponents
function attack(){

//Statements used to attach text from fighter div to respective objects
var fighter = $('.yourSection div span:first').text();
if(fighter == "lukeSkywalker"){
	fighter = lukeSkywalker;
	$('#score1').html(fighter.health);
}
if(fighter == "obiWan"){
	fighter = obiWan;
	$('#score2').html(fighter.health);
}
if(fighter == "darthSidious"){
	fighter = darthSidious;
	$('#score3').html(fighter.health);
}
if(fighter == "darthMaul"){
	fighter = darthMaul;
	$('#score4').html(fighter.health);
}

//Statements used to attach text from opponent div to respective objects
var opponent = $('.defense div span:first').text();
if(opponent == "lukeSkywalker"){
	opponent = lukeSkywalker;
	$('#score1').html(opponent.health);
}
if(opponent == "obiWan"){
	opponent = obiWan;
	$('#score2').html(opponent.health);
}
if(opponent == "darthSidious"){
	opponent = darthSidious;
	$('#score3').html(opponent.health);
}
if(opponent == "darthMaul"){
	opponent = darthMaul;
	$('#score4').html(opponent.health);
}

//jQuery used to get and manipulate display for current attacks and counter attacks
$('#caption1').html('You attacked ' + opponent.name + ' for ' + fighter.attack + ' damages' + 
	'<br>' + opponent.name + ' attacked you back for ' + opponent.counter + ' damages');
$('#caption2').empty();


	
//Begin logic statements to determ if opponett or fighter wins game 
if(fighter.health >= 0 && opponent.health <= 0){
	fighter.wins++
	console.log(fighter.wins);
	$('#caption2').html('You have defeated ' + opponent.name + ' you can choose to fight another enemy');
	$('.defense div').empty();
	$('#caption1').empty();
	console.log('You win');
}
else if(opponent.health >= 0 && fighter.health <= 0){
	$('#caption2').html('You have been defeated game over');
	$('#caption1').empty();
	$('#billboard').append('<button id="startOver">Reset</button>');
	$('#startOver').click(reset);	
	console.log('The force wins');
	
}
else if(fighter.wins == 3){
	$('#caption1').html('You win game over!!!');
	$('#billboard').append('<button id="startOver">Reset</button>');
	$('#startOver').click(reset);
	console.log('you win all');
}//End logic statements to determ if opponett or fighter wins game

//Statements to update players health and display current attack and counter attack numbers
opponent.health -= fighter.attack;
fighter.health -= opponent.counter;
fighter.attack += fighter.constant;

}//End function to select and track fighters and opponents

//Begin function to reset game after fighter loss or if game is won
function reset(){
	location.reload();
}// End function to reset game after fighter loss or if game is won


function disable(){
	$('#caption2').html('You have been defeated game over');
}

function no(){
	$('#billboard').append('No');
}


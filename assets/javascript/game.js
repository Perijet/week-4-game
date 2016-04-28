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
	attack: 8,
	constant: 8,
	counter: 10,
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
	counter: 25,
};

$(document).ready(function(){	
$('.chooseCharacter').on('click', character);
$('.chooseCharacter').click(function(){
	$('.chooseCharacter').off('click', character);
});	
	
$('.enemySection').on('click', defender);
$('.enemySection').click(function(){
});

$('.fight').click(attack);

});

function character(){
	$('.enemySection').append($('.chooseCharacter'));
	$('.yourSection').append(this);
}

function defender(event){
	$('.defense').append($(event.target).parents('.chooseCharacter'));	
}

function attack(){
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

if (opponent == "darthMaul"){
	console.log('wtf');
}

	console.log(fighter.health);
	console.log(opponent.health);
	console.log(fighter);
	console.log(opponent);


opponent.health -= fighter.attack;
fighter.health -= opponent.attack;
fighter.attack += fighter.constant;



$('#caption1').html('You attacked ' + opponent.name + ' for ' + fighter.attack + ' damages' + 
	'<br>' + opponent.name + ' attacked you back for ' + opponent.attack + ' damages');
//$('#caption2').html(opponent.name + ' attacked you back for ' + opponent.attack + ' damages');

if(fighter.health >= 0 && opponent.health <= 0){
	$('#caption2').html('You have defeated ' + opponent.name + ' you can choose to fight another enemy');
	$('.defense div').empty();
	$('#caption1').empty();
	
	console.log('You win');
}
else if(opponent.health >= 0 && fighter.health <= 0){
	$('#caption2').html('You have been defeated game over');
	$('#caption1').empty();
	console.log('The force wins');
}


else if($.isEmptyObject('.enemySection')){
	$('#caption1').html('You win game over!!!');
	$('#billboard').append('<button id="startOver">Reset</button>');
	$('#startOver').click(reset);
	console.log('you win all');
	
}



}

function reset(){
	location.reload();
}
function disable(){
	$('#caption2').html('You have been defeated game over');
}


var lukeSkywalker = {
	health: 100,
	attack: 5,
	counter: 0,
}

var obiWan = {
	health: 120,
	attack: 8,
	counter: 0,
}

var darthSidious = {
	health: 150,
	attack: 20,
	counter: 0,
}

var darthMaul = {
	health: 180,
	attack: 25,
	counter: 0,
}

$(document).ready(function(){	
$('.chooseCharacter').on('click', character);
$('.chooseCharacter').click(function(){
	$('.chooseCharacter').off('click', character);
});	
	
$('.enemySection').on('click', defender);
$('.enemySection').click(function(){
});

});

function character(){
	$('.enemySection').append($('.chooseCharacter'));
	$('.yourSection').append(this);
}

function defender(event){
	$('.defense').append($(event.target).parents('.chooseCharacter'));
	
}

function attack(){

}




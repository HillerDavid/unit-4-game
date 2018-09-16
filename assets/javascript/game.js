//New character constructor
function newCharacter (name, image, hp, attack, counterAttack) {
    this.name = name
    this.image = image
    this.hp = hp
    this.attack = attack
    this.counterAttack = counterAttack
}
//Create new character objects
var character1 = newCharacter("Midoriya", "../images/midoriya-select.png", 130, 15, 24)
var character2 = newCharacter("Bakugo", "../images/bakugo-select.png", 150, 20, 18)
//variables for display
//Character select on click
//Clone character object into user character
//Move other character objects to bench
//Hide Character Selection
//Opponent select on click from bench
//Clone selection to opponent character
//
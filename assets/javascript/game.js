jQuery.fn.invisible = function () {
    this.css("visibility", "hidden")
}

jQuery.fn.visible = function () {
    this.css("visibility", "visible")
}

// New character constructor
function character(name, image, hp, attack, counterAttack) {
    this.name = name
    this.image = image
    this.hp = hp
    this.attack = attack
    this.counterAttack = counterAttack
}

// Create new character objects
var character1 = new character("Midoriya", "assets/images/midoriya-select.png", 130, 15, 24)
var character2 = new character("Bakugo", "assets/images/bakugo-select.png", 150, 20, 18)
var character3 = new character("Asui", "assets/images/asui-select.png", 180, 12, 14)
var character4 = new character("Todoroki", "assets/images/todoroki-select.png", 160, 17, 21)

// Put characters into array
var characterArray = [character1, character2, character3, character4]

// Variables for character select display
var characterName1 = $("#character1-name")
var characterThumbnail1 = $("#character1-thumbnail")
var characterHP1 = $("#character1-hp")
var characterName2 = $("#character2-name")
var characterThumbnail2 = $("#character2-thumbnail")
var characterHP2 = $("#character2-hp")
var characterName3 = $("#character3-name")
var characterThumbnail3 = $("#character3-thumbnail")
var characterHP3 = $("#character3-hp")
var characterName4 = $("#character4-name")
var characterThumbnail4 = $("#character4-thumbnail")
var characterHP4 = $("#character4-hp")

function loadCharacterSelect() {
    characterName1.text(character1.name)
    characterThumbnail1.attr("src", character1.image)
    characterHP1.text(character1.hp)
    characterName2.text(character2.name)
    characterThumbnail2.attr("src", character2.image)
    characterHP2.text(character2.hp)
    characterName3.text(character3.name)
    characterThumbnail3.attr("src", character3.image)
    characterHP3.text(character3.hp)
    characterName4.text(character4.name)
    characterThumbnail4.attr("src", character4.image)
    characterHP4.text(character4.hp)
}

// function to move user character to combat area and 
function moveToCombatArea(userCard) {
    console.log(userCard)
    $("#character-select-title").hide()
    $("#character-select-row").hide()
    userCard.removeClass("col-3").addClass("col-5")
    userCard.clone().prependTo("#combat-area-row")
    $("#combat-area-title").show()
    $("#versus-icon").show()
}

function moveToBench(opponentCard1, opponentCard2, opponentCard3) {
    opponentCard1.removeClass("col-3").addClass("col-4")
    opponentCard2.removeClass("col-3").addClass("col-4")
    opponentCard3.removeClass("col-3").addClass("col-4")
    opponentCard1.clone().appendTo("#opponent-bench")
    opponentCard2.clone().appendTo("#opponent-bench")
    opponentCard3.clone().appendTo("#opponent-bench")
}
function reset() {
    loadCharacterSelect()
}

function start() {
    reset()
}
reset()


//Reset game button
$("#reset-button").click(function () {
    reset()
})

// Character select on click
$("#character1-card").click(function () {
    moveToCombatArea($("#character1-card"))
    moveToBench($("#character2-card"), $("#character3-card"), $("#character4-card"))
})
$("#character2-card").click(function () {
    moveToCombatArea($("#character2-card"))
    moveToBench($("#character1-card"), $("#character3-card"), $("#character4-card"))
})
$("#character3-card").click(function () {
    moveToCombatArea($("#character3-card"))
    moveToBench($("#character2-card"), $("#character1-card"), $("#character4-card"))
})
$("#character4-card").click(function () {
    moveToCombatArea($("#character4-card"))
    moveToBench($("#character2-card"), $("#character3-card"), $("#character1-card"))
})
// Clone character object into user character
// Move other character objects to bench
// Hide Character Selection
// Opponent select on click from bench
// Clone selection to opponent character
//
function reset() {

    window.game = {

        // Create new character objects
        characterArray: [
            {
                name: "Midoriya",
                image: "assets/images/midoriya-select.png",
                hp: 130,
                attack: 15,
                counterAttack: 24
            },
            {
                name: "Bakugo",
                image: "assets/images/bakugo-select.png",
                hp: 150,
                attack: 20,
                counterAttack: 18
            },
            {
                name: "Asui",
                image: "assets/images/asui-select.png",
                hp: 180,
                attack: 12,
                counterAttack: 14
            },
            {
                name: "Todoroki",
                image: "assets/images/todoroki-select.png",
                hp: 160,
                attack: 17,
                counterAttack: 21
            }
        ]
    }
}

$(document).ready(function () {

    reset()
    

    function generateCharacterSelect() {
        game.characterArray.forEach(function (i) {
            var objectIndex = game.characterArray.indexOf(i)
            $("#character-select-row").append("<div class='card col-3 text-center' id='character" + objectIndex + "'>")
            $("#character" + objectIndex).append("<div class='card-header'>").text(i.name)
            $("#character" + objectIndex).append("<img class='card-img-top' src='" + i.image + "'>")
            $("#character" + objectIndex).append("<div class='card-body'>HP: <span id='character" + objectIndex + "-hp'>" + i.hp + "</span>")
        })
    }
    generateCharacterSelect()

    $("#character-select-box").show()

    // function to move user character to combat area and 
    function moveToCombatArea(playerChoice) {
        $("#character-select-box").hide()
        playerChoice.removeClass("col-3").addClass("col-5")
        playerChoice.clone().prependTo("#combat-area-row")
        $("#combat-area-box").show()
    }

    function moveToBench(opponentCard1, opponentCard2, opponentCard3) {
        opponentCard1.removeClass("col-3").addClass("col-4")
        opponentCard2.removeClass("col-3").addClass("col-4")
        opponentCard3.removeClass("col-3").addClass("col-4")
        opponentCard1.clone().appendTo("#opponent-bench")
        opponentCard2.clone().appendTo("#opponent-bench")
        opponentCard3.clone().appendTo("#opponent-bench")
        $("#combat-text").show()
        $("#opponent-bench").show()
    }

    // Character select on click
    $("#character0").click(function () {
        moveToCombatArea($("#character0"))
        moveToBench($("#character1"), $("#character2"), $("#character3"))
    })
    $("#character1").click(function () {
        moveToCombatArea($("#character1"))
        moveToBench($("#character2"), $("#character3"), $("#character0"))
    })
    $("#character2").click(function () {
        moveToCombatArea($("#character2"))
        moveToBench($("#character3"), $("#character0"), $("#character1"))
    })
    $("#character3").click(function () {
        moveToCombatArea($("#character3"))
        moveToBench($("#character0"), $("#character1"), $("#character2"))
    })

    $("#reset-button").click(function () {
        reset()
    })


    jQuery.fn.invisible = function () {
        this.css("visibility", "hidden")
    }

    jQuery.fn.visible = function () {
        this.css("visibility", "visible")
    }
})
// Clone character object into user character
// Move other character objects to bench
// Hide Character Selection
// Opponent select on click from bench
// Clone selection to opponent character

function change_page() {
    $(".btn-primary").click( function () {
        window.location.href = "gamescreen.php";
    })
}

// This piece of code was obtained (and changed) from: https://stackoverflow.com/questions/14388452/how-do-i-load-a-json-object-from-a-file-with-ajax
function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send();
}

function change_turn(){
    $('#take_turn').click(function(){
        if (document.getElementById("playerturn").value === "1"){
            document.getElementById('playerturn').value = "2";
        }

        else if (document.getElementById("playerturn").value === "2"){
            document.getElementById('playerturn').value = "1";
        }
    })
}

function draw () {
    $('#sq1').click(function () {
        $("#sq2, #sq3, #sq4, #sq5, #sq6, #sq7, #sq8, #sq9").val('');
        if (document.getElementById("playerturn").value === "1") {
            if($(this).attr('class') === 'square') {
                $(this).val('x');
            }
        }

        else if (document.getElementById("playerturn").value === "2") {
            if($(this).attr('class') === 'square'){
                $(this).val('o');
            }
        }
    })

    $('#sq2').click(function () {
        $("#sq1, #sq3, #sq4, #sq5, #sq6, #sq7, #sq8, #sq9").val('');
        if (document.getElementById("playerturn").value === "1") {
            if($(this).attr('class') === 'square') {
                $(this).val('x');
            }
        }

        else if (document.getElementById("playerturn").value === "2") {
            if($(this).attr('class') === 'square'){
                $(this).val('o');
            }
        }
    })

    $('#sq3').click(function () {
        $("#sq1, #sq2, #sq4, #sq5, #sq6, #sq7, #sq8, #sq9").val('');
        if (document.getElementById("playerturn").value === "1") {
            if($(this).attr('class') === 'square') {
                $(this).val('x');
            }
        }

        else if (document.getElementById("playerturn").value === "2") {
            if($(this).attr('class') === 'square'){
                $(this).val('o');
            }
        }
    })

    $('#sq4').click(function () {
        $("#sq1, #sq2, #sq3, #sq5, #sq6, #sq7, #sq8, #sq9").val('');
        if (document.getElementById("playerturn").value === "1") {
            if($(this).attr('class') === 'square') {
                $(this).val('x');
            }
        }

        else if (document.getElementById("playerturn").value === "2") {
            if($(this).attr('class') === 'square'){
                $(this).val('o');
            }
        }
    })

    $('#sq5').click(function () {
        $("#sq1, #sq2, #sq3, #sq4, #sq6, #sq7, #sq8, #sq9").val('');
        if (document.getElementById("playerturn").value === "1") {
            if($(this).attr('class') === 'square') {
                $(this).val('x');
            }
        }

        else if (document.getElementById("playerturn").value === "2") {
            if($(this).attr('class') === 'square'){
                $(this).val('o');
            }
        }
    })

    $('#sq6').click(function () {
        $("#sq1, #sq2, #sq3, #sq4, #sq5, #sq7, #sq8, #sq9").val('');
        if (document.getElementById("playerturn").value === "1") {
            if($(this).attr('class') === 'square') {
                $(this).val('x');
            }
        }

        else if (document.getElementById("playerturn").value === "2") {
            if($(this).attr('class') === 'square'){
                $(this).val('o');
            }
        }
    })

    $('#sq7').click(function () {
        $("#sq1, #sq2, #sq3, #sq4, #sq5, #sq6, #sq8, #sq9").val('');
        if (document.getElementById("playerturn").value === "1") {
            if($(this).attr('class') === 'square') {
                $(this).val('x');
            }
        }

        else if (document.getElementById("playerturn").value === "2") {
            if($(this).attr('class') === 'square'){
                $(this).val('o');
            }
        }

    })

    $('#sq8').click(function () {
        $("#sq1, #sq2, #sq3, #sq4, #sq5, #sq6, #sq7, #sq9").val('');
        if (document.getElementById("playerturn").value === "1") {
            if($(this).attr('class') === 'square') {
                $(this).val('x');
            }
        }

        else if (document.getElementById("playerturn").value === "2") {
            if($(this).attr('class') === 'square'){
                $(this).val('o');
            }
        }
    })

    $('#sq9').click(function () {
        $("#sq1, #sq2, #sq3, #sq4, #sq5, #sq6, #sq7, #sq8").val('');
        if (document.getElementById("playerturn").value === "1") {
            if($(this).attr('class') === 'square') {
                $(this).val('x');
            }
        }

        else if (document.getElementById("playerturn").value === "2") {
            if($(this).attr('class') === 'square'){
                $(this).val('o');
            }
        }
    })
}


$(function() {
    change_page();
    change_turn()
    draw()

    window.setInterval(function () {

        fetchJSONFile('data/data.json', function (data) {
            info = data
            var winsp1 = document.getElementById("winsp1").innerHTML = info[1]["wins"];
            var winsp2 = document.getElementById("winsp2").innerHTML = info[0]["wins"];
            document.getElementById("winsp1").innerHTML = "Wins: " + winsp1;
            document.getElementById("winsp2").innerHTML = "Wins: " + winsp2;
            var lossesp1 = document.getElementById("lossesp1").innerHTML = info[1]["losses"];
            var lossesp2 = document.getElementById("lossesp2").innerHTML = info[0]["losses"];
            document.getElementById("lossesp1").innerHTML = "Losses: " + lossesp1;
            document.getElementById("lossesp2").innerHTML = "Losses: " + lossesp2;
            var drawsp1 = document.getElementById("drawsp1").innerHTML = info[1]["draws"];
            var drawsp2 = document.getElementById("drawsp2").innerHTML = info[0]["draws"];
            document.getElementById("drawsp1").innerHTML = "Draws: " + drawsp1;
            document.getElementById("drawsp2").innerHTML = "Draws: " + drawsp2;
        });


        fetchJSONFile('data/gamestate.json', function (data) {
            gamestate = data

            for (var item in gamestate) {
                // To check for crosses in the json
                if (gamestate[item]["value"] === "x") {

                    var cross = document.createElement('DIV');
                    var X = document.createElement('SPAN');

                    $(X).text('X');
                    $(X).attr('class', 'X-mark');
                    $(cross).append(X);
                    let square = document.getElementsByClassName("square")
                    if ($(document.getElementById(gamestate[item]["square"])).contents().length == 0) {
                        $(document.getElementById(gamestate[item]["square"]).value = 'x')

                    }
                }
                // To check for circles in the json
                if (gamestate[item]["value"] === "o") {
                    var circle = document.createElement('DIV');
                    var O = document.createElement('SPAN');
                    $(O).text('O');
                    $(O).attr('class', 'O-mark');
                    $(circle).append(O);
                    let square = document.getElementsByClassName("square")
                    if ($(document.getElementById(gamestate[item]["square"])).contents().length == 0) {
                        $(document.getElementById(gamestate[item]["square"]).value = 'o')

                    }
                }
            }

        })
    }, 10);
})




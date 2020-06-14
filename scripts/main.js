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

function draw () {
    $('#sq1').click(function () {
        $(".square").not("#sq1").attr('value', '');
        if ($('#playerturn').val() === '1') {
            if($(this).attr('class') === 'square') {
                $(this).attr('value', 'x');
            }
        }

        else if ($('#playerturn').val() === "2") {
            if($(this).attr('class') === 'square'){
                $(this).attr('value', 'o');
            }
        }
    })

    $('#sq2').click(function () {
        $(".square").not("#sq2").attr('value', '');
        if ($('#playerturn').val() === "1") {
            if($(this).attr('class') === 'square') {
                $(this).attr('value', 'x');
            }
        }
        else if ($('#playerturn').val() === "2") {
            if($(this).attr('class') === 'square'){
                $(this).attr('value', 'o');
            }
        }
    })

    $('#sq3').click(function () {
        $(".square").not("#sq3").attr('value', '');
        if ($('#playerturn').val() === "1") {
            if($(this).attr('class') === 'square') {
                $(this).attr('value', 'x');
            }
        }
        else if ($('#playerturn').val() === "2") {
            if($(this).attr('class') === 'square'){
                $(this).attr('value', 'o');
            }
        }
    })

    $('#sq4').click(function () {
        $(".square").not("#sq4").attr('value', '');
        if ($('#playerturn').val() === "1") {
            if($(this).attr('class') === 'square') {
                $(this).attr('value', 'x');
            }
        }
        else if ($('#playerturn').val() === "2") {
            if($(this).attr('class') === 'square'){
                $(this).attr('value', 'o');
            }
        }
    })

    $('#sq5').click(function () {
        $(".square").not("#sq5").attr('value', '');
        if ($('#playerturn').val() === "1") {
            if($(this).attr('class') === 'square') {
                $(this).attr('value', 'x');
            }
        }
        else if ($('#playerturn').val() === "2") {
            if($(this).attr('class') === 'square'){
                $(this).attr('value', 'o');
            }
        }
    })

    $('#sq6').click(function () {
        $(".square").not("#sq6").attr('value', '');
        if ($('#playerturn').val() === "1") {
            if($(this).attr('class') === 'square') {
                $(this).attr('value', 'x');
            }
        }
        else if ($('#playerturn').val() === "2") {
            if($(this).attr('class') === 'square'){
                $(this).attr('value', 'o');
            }
        }
    })

    $('#sq7').click(function () {
        $(".square").not("#sq7").attr('value', '');
        if ($('#playerturn').val() === "1") {
            if($(this).attr('class') === 'square') {
                $(this).attr('value', 'x');
            }
        }
        else if ($('#playerturn').val() === "2") {
            if($(this).attr('class') === 'square'){
                $(this).attr('value', 'o');
            }
        }

    })

    $('#sq8').click(function () {
        $(".square").not("#sq8").attr('value', '');
        if ($('#playerturn').val() === "1") {
            if($(this).attr('class') === 'square') {
                $(this).attr('value', 'x');
            }
        }

        else if ($('#playerturn').val() === "2") {
            if($(this).attr('class') === 'square'){
                $(this).attr('value', 'o');
            }
        }
    })

    $('#sq9').click(function () {
        $(".square").not("#sq9").attr('value', '');
        if ($('#playerturn').val() === "1") {
            if($(this).attr('class') === 'square') {
                $(this).attr('value', 'x');;
            }
        }

        else if ($('#playerturn').val() === "2") {
            if($(this).attr('class') === 'square'){
                $(this).attr('value', 'o');
            }
        }
    })
}

function resetGame() {
    //alert("Its a tie!")
    $("#sq1").val("")
    $("#sq2").val("")
    $("#sq3").val("")
    $("#sq4").val("")
    $("#sq5").val("")
    $("#sq6").val("")
    $("#sq7").val("")
    $("#sq8").val("")
    $("#sq9").val("")
}

function checkWin () {

    fetchJSONFile('data/gamestate.json', function (data) {
        win = data
        if (win[0]["value"] === win[1]["value"] && win[1]["value"] === win[2]["value"]) {
            if (win[0]["value"] !== "") {
                if (win[0]["value"] === "x") {
                    $('#status-text').text('Player One Wins!')
                    window.location.href="win.html"
                }
                else {
                    $('#status-text').text('Player Two Wins!')
                    window.location.href="win.html"
                }
            }
        }
        if (win[3]["value"] === win[4]["value"] && win[4]["value"] === win[5]["value"]) {
            if (win[3]["value"] !== "") {
                if (win[3]["value"] === "x") {
                    $('#status-text').text('Player One Wins!')
                    window.location.href="win.html"
                }
                else {
                    $('#status-text').text('Player Two Wins!')
                    window.location.href="win.html"
                }
            }
        }
        if (win[6]["value"] === win[7]["value"] && win[7]["value"] === win[8]["value"]) {
            if (win[6]["value"] !== "") {
                if (win[6]["value"] === "x") {
                    $('#status-text').text('Player One Wins!')
                    window.location.href="win.html"
                }
                else {
                    $('#status-text').text('Player Two Wins!')
                    window.location.href="win.html"
                }
            }
        }
        if (win[0]["value"] === win[3]["value"] && win[3]["value"] === win[6]["value"]) {
            if (win[0]["value"] !== "") {
                if (win[0]["value"] === "x") {
                    $('#status-text').text('Player One Wins!')
                    window.location.href="win.html"
                }
                else {
                    $('#status-text').text('Player Two Wins!')
                    window.location.href="win.html"
                }
            }
        }
        if (win[1]["value"] === win[4]["value"] && win[4]["value"] === win[7]["value"]) {
            if (win[1]["value"] !== "") {
                if (win[1]["value"] === "x") {
                    $('#status-text').text('Player One Wins!')
                    window.location.href="win.html"
                }
                else {
                    $('#status-text').text('Player Two Wins!')
                    window.location.href="win.html"
                }
            }
        }
        if (win[2]["value"] === win[5]["value"] && win[5]["value"] === win[8]["value"]) {
            if (win[2]["value"] !== "") {
                if (win[2]["value"] === "x") {
                    $('#status-text').text('Player One Wins!')
                    window.location.href="win.html"
                }
                else {
                    $('#status-text').text('Player Two Wins!')
                    window.location.href="win.html"
                }
            }
        }
        if (win[0]["value"] === win[4]["value"] && win[4]["value"] === win[8]["value"]) {
            if (win[0]["value"] !== "") {
                if (win[0]["value"] === "x") {
                    $('#status-text').text('Player One Wins!')
                    window.location.href="win.html"
                }
                else {
                    $('#status-text').text('Player Two Wins!')
                    window.location.href="win.html"
                }
            }
        }
        if (win[2]["value"] === win[4]["value"] && win[4]["value"] === win[6]["value"]) {
            if (win[2]["value"] !== "") {
                if (win[2]["value"] === "x") {
                    $('#status-text').text('Player One Wins!')
                    window.location.href="win.html"
                }
                else {
                    $('#status-text').text('Player Two Wins!')
                    window.location.href="win.html"
                }
            }
        }
        if (win[0]["value"] !== "" && win[1]["value"] !== "" && win[2]["value"] !== "" && win[3]["value"] !== "" && win[4]["value"] !== "" && win[5]["value"] !== "" && win[6]["value"] !== "" && win[7]["value"] !== "" && win[8]["value"] !== "") {
            $('#status-text').text("It's a Tie!")
            window.location.href="win.html"
        }
    });
}


$(function() {
    change_page();
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
            turn = data

            if(turn[9]["turn"] === "1"){
                $("#playerturn").attr("value", "1")
            }
            else if(turn[9]["turn"] === "2"){
                $('#playerturn').attr('value', '2')
            }

        });


        fetchJSONFile('data/gamestate.json', function (data) {
            gamestate = data

            for (var item in gamestate) {
                // To check for crosses in the json
                if (gamestate[item]["value"] === "x") {
                    $(document.getElementById(gamestate[item]["square"]).disabled = true);
                    let square = document.getElementsByClassName("square")
                    //if ($(document.getElementById(gamestate[item]["square"])).contents().length == 0) {
                    $(document.getElementById(gamestate[item]["square"]).value = 'x')

                   }
                // To check for circles in the json
                if (gamestate[item]["value"] === "o") {
                    $(document.getElementById(gamestate[item]["square"]).disabled = true);
                    let square = document.getElementsByClassName("square")
                    //if ($(document.getElementById(gamestate[item]["square"])).contents().length == 0) {
                    $(document.getElementById(gamestate[item]["square"]).value = 'o')

                    }
                }
            //}

        })
        checkWin()
    }, 100);
})

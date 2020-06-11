function change_page() {
    $(".btn-primary").click( function () {
        window.location.href = "gamescreen.php";
    })
}

function draw() {
    let cross = document.createElement('DIV');
    let X = document.createElement('SPAN');
    $(X).text('X');
    $(X).attr('class', 'X-mark');
    let circle = document.createElement('DIV');
    let O = document.createElement('SPAN');
    $(O).text('O');
    $(O).attr('class', 'O-mark');
    $('.square').click(function () {
        if (document.getElementById("playerturn").value === "2"){
            $(cross).append(X);
            $(this).append(cross);
            document.getElementById("playerturn").value = "1";
        }
        else{
            $(circle).append(O);
            $(this).append(circle);
            document.getElementById("playerturn").value = "2";
        }
    })
}

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

$(function(){
    change_page();
    draw();
    window.setInterval(function () {
        fetchJSONFile('data/data.json', function(data){
            info = data

            var winsp1 = document.getElementById("winsp1").innerHTML= info[0]["wins"];
            var winsp2 = document.getElementById("winsp2").innerHTML= info[1]["wins"];
            document.getElementById("winsp1").innerHTML = "Wins: " + winsp1;
            document.getElementById("winsp2").innerHTML = "Wins: " + winsp2;
        });
    }, 10);
});


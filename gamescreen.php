<?php
/* Header */
$page_title = 'Tic-tac-toe';

include __DIR__ . '/tpl/head.php';

include __DIR__ . '/tpl/body-start.php';
?>
<?php
function p_print($array)
{
    echo "<pre>";
    print_r($array);
    echo "</pre>";
}

$json_file = file_get_contents("data/data.json");
$score = json_decode($json_file, true);
$score = array_reverse($score);
$score_board = "";

$score_board.= '<div class="container">';
$score_board.= '<div class="row header">';
$score_board.= '<h1>Tic-Tac-Toe</h1>';
$score_board.= '<div class="status-bar">';
$score_board.= '<div class="status col-md-4">';
$score_board.= '<h3>Player one: ' . $score[0]["name"] . '</h3>';
$score_board.= '<p id="winsp1">Wins: ' . $score[0]["wins"] . '</p>';
$score_board.= '<p id="lossesp1">Losses: ' . $score[0]["losses"] . '</p>';
$score_board.= '<p id="drawsp1">Draws: ' . $score[0]["draws"] . '</p>';
$score_board.= '</div>';
$score_board.= '<div class="col-md-4"><h4>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</h4>';
$score_board.= '</div>';
$score_board.= '<div class="status col-md-4">';
$score_board.= '<h3>Player two: ' . $score[1]["name"] . '</h3>';
$score_board.= '<p id="winsp2">Wins: ' . $score[1]["wins"] . '</p>';
$score_board.= '<p id="lossesp2">Losses: ' . $score[1]["losses"] . '</p>';
$score_board.= '<p id="drawsp2">Draws: ' . $score[1]["draws"] . '</p>';
$score_board.= '</div>';
$score_board.= '</div>';
$score_board.= '</div>';
$score_board.= '</div>';
echo $score_board

?>

<div class="col-md-12">
    <div class="row">
    <div class="form-group">
        <label for="playerturn">Player:</label>
        <input type="number" class="form-control" id="playerturn" name="playerturn" value='1' readonly>
    </div>
        <div id="content">
            <div id="board">
                <form action="scripts/update_game.php" method="POST">
                    <input id="sq1" class="square" value="" name="sq1" readonly>
                    <input id="sq2" class="square" value="" name="sq2" readonly>
                    <input id="sq3" class="square" value="" name="sq3" readonly>
                    <div class="clr"></div>
                    <input id="sq4" class="square" value="" name="sq4" readonly>
                    <input id="sq5" class="square" value="" name="sq5" readonly>
                    <input id="sq6" class="square" value="" name="sq6" readonly>
                    <div class="clr"></div>
                    <input id="sq7" class="square" value="" name="sq7" readonly>
                    <input id="sq8" class="square" value="" name="sq8" readonly>
                    <input id="sq9" class="square" value="" name="sq9" readonly>
                    <div class="clr"></div>
                    <button type="submit" id="take_turn" class="turn_button">End Turn</button>
                </form>
            </div>
        </div>
    </div>
</div>
<?php
include __DIR__ . '/tpl/body-end.php';
?>

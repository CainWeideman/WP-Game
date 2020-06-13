<?php

$json_file = file_get_contents("../data/gamestate.json");
$data = json_decode($json_file, true);

$data[0]['value'] = $_POST['sq1'];
$data[1]['value'] = $_POST['sq2'];
$data[2]['value'] = $_POST['sq3'];
$data[3]['value'] = $_POST['sq4'];
$data[4]['value'] = $_POST['sq5'];
$data[5]['value'] = $_POST['sq6'];
$data[6]['value'] = $_POST['sq7'];
$data[7]['value'] = $_POST['sq8'];
$data[8]['value'] = $_POST['sq9'];


if($data[9]['turn'] === "1") {
    $data[9]['turn'] = "2";
}
elseif($data[9]['turn'] === "2") {
    $data[9]['turn'] = "1";
}




// Save to external file
$json_file = fopen('../data/gamestate.json', 'w');
fwrite($json_file, json_encode($data));
fclose($json_file);
// Redirect to homepage
header("Location: ../gamescreen.php");
die();
?>

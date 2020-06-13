<?php

$json_file = file_get_contents("../data/gamestate.json");
$data = json_decode($json_file, true);

if($_POST['sq1'] !== null){
    $data[0]['value'] = $_POST['sq1'];
}
if($_POST['sq2'] !== null){
    $data[1]['value'] = $_POST['sq2'];
}
if($_POST['sq3'] !== null){
    $data[2]['value'] = $_POST['sq3'];
}
if($_POST['sq4'] !== null){
    $data[3]['value'] = $_POST['sq4'];
}
if($_POST['sq5'] !== null){
    $data[4]['value'] = $_POST['sq5'];
}
if($_POST['sq6'] !== null){
    $data[5]['value'] = $_POST['sq6'];
}
if($_POST['sq7'] !== null){
    $data[6]['value'] = $_POST['sq7'];
}
if($_POST['sq8'] !== null){
    $data[7]['value'] = $_POST['sq8'];
}
if($_POST['sq9'] !== null){
    $data[8]['value'] = $_POST['sq9'];
}

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

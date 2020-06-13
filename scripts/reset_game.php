<?php
$json_file = file_get_contents("../data/gamestate.json");
$data = json_decode($json_file, true);

$data[0]['value'] = "";
$data[1]['value'] = "";
$data[2]['value'] = "";
$data[3]['value'] = "";
$data[4]['value'] = "";
$data[5]['value'] = "";
$data[6]['value'] = "";
$data[7]['value'] = "";
$data[8]['value'] = "";


// Save to external file
$json_file = fopen('../data/gamestate.json', 'w');
fwrite($json_file, json_encode($data));
fclose($json_file);
// Redirect to homepage
header("Location: ../gamescreen.php");
die();
?>
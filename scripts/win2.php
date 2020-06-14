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

$json_file = fopen('../data/gamestate.json', 'w');
fwrite($json_file, json_encode($data));
fclose($json_file);


$json_file = file_get_contents("../data/data.json");
$data2 = json_decode($json_file, true);

$data2[1]['wins'] = $data2[1]['wins'] + 0.5;
$data2[0]['losses'] = $data2[0]['losses'] + 0.5;


// Save to external file
$json_file = fopen('../data/data.json', 'w');
fwrite($json_file, json_encode($data2));
fclose($json_file);

header("Location: ../gamescreen.php");
die();

?>
<?php
if (isset($_POST['name'])) {
    // Read articles
    $json_file = file_get_contents("../data/data.json");
    $data = json_decode($json_file, true);
    print ($data);
    // Generate article ID
    $data_id = 0;
    foreach ($data as $key => $value){
        $data_id = $value['id'];
    }
    $data_id += 1;
    array_push($data, [
        'id' => $data_id,
        'name' => $_POST['name'],
        'wins' => 0,
        'losses' => 0,
        'draws' => 0
    ]);
    // Save to external file
    $json_file = fopen('../data/data.json', 'w');
    fwrite($json_file, json_encode($data));
    fclose($json_file);
    // Redirect to homepage
    header("Location: ../gamescreen.php");
    die();
}
?>
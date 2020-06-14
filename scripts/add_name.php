<?php
if (isset($_POST['name'])) {
    // Read articles
    $json_file = file_get_contents("../data/data.json");
    $data = json_decode($json_file, true);
    if($data[2]['count'] === "1") {
        $data[0]['name'] = $_POST['name'];
        $data[2]['count'] = "2";
    }
    else {
        $data[1]['name'] = $_POST['name'];
        $data[2]['count'] = "1";
    }

    // Generate article ID
    // Save to external file
    $json_file = fopen('../data/data.json', 'w');
    fwrite($json_file, json_encode($data));
    fclose($json_file);
    // Redirect to homepage
    header("Location: ../gamescreen.php");
    die();
}
?>
<?php
    require_once("../config/config.php");
    // Create connection
    // Do something
    $conn = new mysqli($serverName, $username, $password, $dbName);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    //query to get the information
    $query = "SELECT * FROM invoice, owner, vehicle, inspection, branch WHERE invoice.customer_id = owner.owner_id and owner.owner_id = vehicle.owner_id and vehicle.vehicle_id = inspection.vehicle_id and inspection.branch_id = branch.branch_id";
    $query_target = "SELECT * FROM targetValue";

    $result = mysqli_query($conn, $query);
    $result_target = mysqli_query($conn, $query_target);

    $rows = array();
    $target_rows = array();
    $final_array = array();
    //checking if the creating array for the information
    while ($row = mysqli_fetch_assoc($result))
    {
        $rows[] = $row;
    }

    $target_rows = array();
    while ($target_row = mysqli_fetch_assoc($result_target)) {
        $target_rows[] = $target_row;
    }

    $final_array = array_merge($rows, $target_rows);

    echo json_encode($final_array);
?>
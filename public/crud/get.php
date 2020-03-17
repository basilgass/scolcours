<?php
$data = json_decode(file_get_contents("php://input"), TRUE);

require_once 'creditentials.php';

$output = new stdClass();
$output->sql = "SELECT id, fr, traduction FROM `{$_GET['table']}` WHERE 1";

$stm = $dbh->query($output->sql);
$output->results = $stm->fetchAll(PDO::FETCH_OBJ);
echo json_encode($output);

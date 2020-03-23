<?php
$data = json_decode(file_get_contents("php://input"), TRUE);

require_once 'creditentials.php';

$output = new stdClass();
$output->sql = "SELECT * FROM users WHERE email=:username AND password=:password";
$output->data = $data;

$stm = $dbh->prepare($output->sql);
$stm->execute([
	'username'=>$data['username'],
	'password'=>$data['password']
]);

$output->computedSQL = $stm->queryString;
$output->results = $stm->fetch(PDO::FETCH_OBJ);
echo json_encode($output);

<?php
require_once 'creditentials.php';

$output = new stdClass();
$output->sql = "SELECT * FROM users WHERE username=:username AND password=:password";
$output->data = json_decode(file_get_contents("php://input"), TRUE);

$stm = $dbh->prepare($output->sql);
$stm->execute([
	'username'=>$output->data['username'],
	'password'=>$output->data['password']
]);

$output->computedSQL = $stm->queryString;
$output->results = $stm->fetch(PDO::FETCH_OBJ);

if($output->results!=false) {
// Check if it 'feuille-de-route' needs to be updated.
    $stm = $dbh->prepare('SELECT `planning`.`id_exercice` as id_exercice FROM `planning`
        WHERE 
        `planning`.`classe`=:classe AND
        `planning`.`id_exercice` NOT IN (
            SELECT `id_exercice` FROM `feuille-de-route` 
            LEFT JOIN `users` ON `users`.`id`=`feuille-de-route`.`id_eleve`
            WHERE `users`.`username`=:username)
        ');
    $stm->execute([
        'username' => $output->results->username,
        'classe' => $output->results->classe
    ]);

    $stmInsert = $dbh->prepare("INSERT INTO `feuille-de-route` (id_eleve, id_exercice) VALUES (:id_eleve, :id_exercice)");
    foreach ($stm->fetchAll(PDO::FETCH_OBJ) as $row) {
        $result = $stmInsert->execute([
            'id_eleve' => $output->results->id,
            'id_exercice' => $row->id_exercice
        ]);
    }
}

echo json_encode($output);

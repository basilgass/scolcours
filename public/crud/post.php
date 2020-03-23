<?php
require_once 'creditentials.php';

$output = new stdClass();
$output->data = json_decode(file_get_contents("php://input"), TRUE);

if($output->data['type']==='feuille-de-route'){
    $stm = $dbh->prepare("SELECT DISTINCT `feuille-de-route`.id, chapitre, exercice, status, delai FROM `feuille-de-route`
        LEFT JOIN `planning` ON `planning`.`id_exercice`=`feuille-de-route`.`id_exercice`
        LEFT JOIN `exercices` ON `exercices`.`id`=`feuille-de-route`.`id_exercice`
        LEFT JOIN `users` ON `users`.`id`=`feuille-de-route`.`id_eleve`
        WHERE `users`.`username`=:username");

    $stm->execute(['username'=>$output->data['username']]);

    $output->exercices = $stm->fetchAll(PDO::FETCH_OBJ);
}
else if($output->data['type']==='feuille-de-route-status'){
    $stm = $dbh->prepare("UPDATE `feuille-de-route` SET `status`=:status WHERE id=:id");

    $stm->execute([
        'id'=>$output->data['id'],
        'status'=>$output->data['status']
    ]);
}
echo json_encode($output);

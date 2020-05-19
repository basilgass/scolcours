<?php
require_once 'creditentials.php';

$output = new stdClass();
$output->raw = file_get_contents("php://input");
$output->data = json_decode($output->raw, TRUE);

if($output->data['crud']==='c'){
    // Create
}
else if($output->data['crud']==='r'){
	// Read
	$stm = $dbh->prepare( 'SELECT html FROM titre
LEFT JOIN exercices ON exercices.id=titre.id_exercice
WHERE chapitre=:chapitre AND annee=:annee AND titre=:titre' );

	$stm->execute( [
		'annee'    => $output->data['annee'],
		'chapitre' => $output->data['chapitre'],
		'titre'    => $output->data['titre'],
	] );

	if ( $stm->rowCount() === 1 ) {
		$output->contenu = $stm->fetch( PDO::FETCH_COLUMN );
	} else {
        $output->contenu = false;
    }
}
else if($output->data['crud']==='u'){
    // update
}
else if($output->data['crud']==='d'){
    // delete
}
else{
    $output->contenu = 'CRUD NON FONCTIONNEL';
}

echo json_encode($output);
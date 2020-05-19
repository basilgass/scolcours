<?php
require_once 'creditentials.php';

$output       = new stdClass();
$output->raw  = file_get_contents( "php://input" );
$output->data = json_decode( $output->raw, true );

if ( $output->data['crud'] === 'r' ) {
	if ( ! isset( $output->data['id'] ) ) {
		$stm            = $dbh->query( "SELECT * FROM themes WHERE 1" );
		$output->result = $stm->fetchAll( PDO::FETCH_OBJ );
	} else {
		$stm = $dbh->prepare( "SELECT * FROM themes WHERE id=:id" );
		$stm->execute( [ 'id' => $output->data['id'] ] );
		$output->result = $stm->fetchAll( PDO::FETCH_OBJ );
	}
}

echo json_encode( $output );
<?php
require_once 'creditentials.php';

$output       = new stdClass();
$output->raw  = file_get_contents( "php://input" );
$output->data = json_decode( $output->raw, true );

if ( $output->data['crud'] === 'c' ) {
	if ( isset( $output->data['exercices'] ) ) {
		$stm = $dbh->prepare( "
			INSERT INTO exercices (theme, exercice) 
			VALUES (:theme, :exercice)
			ON DUPLICATE KEY UPDATE id=id
		" );
		foreach ( $output->data['exercices'] as $ex ) {
			$stm->execute( [
				'exercice' => $ex,
				'theme'    => $output->data['theme']
			] );
		}

		// Save the dateaas json.
		$stm = $dbh->prepare( "SELECT * FROM exercices WHERE theme=:theme" );
		$stm->execute( [ 'theme' => $output->data['theme'] ] );
		$fp = fopen( $output->data['theme'] . '.json', 'w' );
		fwrite( $fp, json_encode( $stm->fetchAll( PDO::FETCH_OBJ ) ) );
		fclose( $fp );
	}
} elseif ( $output->data['crud'] === 'r' ) {
	if ( isset( $output->data['theme'] ) ) {
		$stm = $dbh->prepare( "SELECT exercice FROM exercices WHERE theme=:theme" );
		$stm->execute( [ 'theme' => $output->data['theme'] ] );
		$output->result = $stm->fetchAll( PDO::FETCH_OBJ );
	}
}

echo json_encode( $output );
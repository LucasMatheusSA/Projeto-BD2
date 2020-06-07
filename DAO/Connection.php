<?php

// Dados do banco
$dbhost = "localhost"; #Nome do host
$db = "Locadora"; #Nome do banco de dados
$user = "admin"; #Nome do usuário
$password = "1234"; #Senha do usuário


$conninfo = array("Database" => $db, "UID" => $user, "PWD" => $password);
$conn = sqlsrv_connect($dbhost, $conninfo);

$instrucaoSQL = "SELECT * FROM Jogo";

$params = array();
$options =array("Scrollable" => SQLSRV_CURSOR_KEYSET);
$consulta = sqlsrv_query($conn, $instrucaoSQL, $params, $options);
$numRegistros = sqlsrv_num_rows($consulta);

echo($consulta);

// if ($numRegistros!=0) {
// while ($cadaLinha = sqlsrv_fetch_array($consulta, SQLSRV_FETCH_ASSOC)) {
// echo “$cadaLinha[$campo1] – $cadaLinha[$campo2]\n<br>\n”;
// }
// }

// define('DB_HOST'        , "localhost");
// define('DB_USER'        , "admin");
// define('DB_PASSWORD'    , "1234");
// define('DB_NAME'        , "Locadora");
// define('DB_DRIVER'      , "sqlsrv");

// class Conexao
// {
//     private static $connection;
    
//     private function __construct(){}
   
//     public static function getConnection() {
    
//         $pdoConfig  = DB_DRIVER . ":". "Server=" . DB_HOST . ";";
//         $pdoConfig .= "Database=".DB_NAME.";";
         
//         try {
//             if(!isset($connection)){
//                 $connection =  new PDO($pdoConfig, DB_USER, DB_PASSWORD);
//                 $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//             }
//             return $connection;
//          } catch (PDOException $e) {
//             $mensagem = "Drivers disponiveis: " . implode(",", PDO::getAvailableDrivers());
//             $mensagem .= "\nErro: " . $e->getMessage();
//             throw new Exception($mensagem);
//          }
//      }
// }

?>
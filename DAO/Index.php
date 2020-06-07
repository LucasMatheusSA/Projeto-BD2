<?php
define('DB_HOST'        , "LUCAS");
define('DB_USER'        , "admin");
define('DB_PASSWORD'    , "1234");
define('DB_NAME'        , "Locadora");
define('DB_DRIVER'      , "sqlsrv");
 

// String connectionUrl = "jdbc:sqlserver://LUCAS:1433;"
//         + "databaseName=Locadora;"
//         + "user=admin;"
//         + "password=1234";

require_once "Conexao.php";
 
try{
 
    $Conexao    = Conexao::getConnection();
    $query      = $Conexao->query("SELECT * FROM Jogo");
    $data   = $query->fetchAll();
 
    echo($data)

 }catch(Exception $e){
 
    echo $e->getMessage();
    exit;
 
 }
 
?>
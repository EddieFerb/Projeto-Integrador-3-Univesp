<?php
require_once 'config.php';

// Testar conexão
if ($conexao->connect_errno) {
    echo "Erro na conexão: " . $conexao->connect_error;
} else {
    echo "Conexão efetuada com sucesso";
}
?>

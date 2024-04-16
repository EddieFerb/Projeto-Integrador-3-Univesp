<?php
require_once 'config.php';

// Lógica para lidar com as solicitações AJAX
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Aqui você pode receber dados enviados via AJAX e executar operações no banco de dados
    // Exemplo: inserir um novo registro no banco de dados
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    
    // Exemplo de inserção no banco de dados
    $sql = "INSERT INTO clientes (nome, email) VALUES ('$nome', '$email')";
    if ($conexao->query($sql) === TRUE) {
        echo "Registro inserido com sucesso";
    } else {
        echo "Erro ao inserir registro: " . $conexao->error;
    }
}
?>

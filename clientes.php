<?php
// Inclua o arquivo config.php
include_once('config.php');

// Agora você pode usar a variável $conexao para realizar operações no banco de dados

// Por exemplo, aqui está um exemplo de consulta SQL para recuperar dados da tabela clientes
$query = "SELECT * FROM clientes";
$resultado = $conexao->query($query);

// Verifique se a consulta foi bem-sucedida
if ($resultado) {
    // Exibir os resultados, por exemplo:
    while ($linha = $resultado->fetch_assoc()) {
        echo "Nome: " . $linha['nome'] . "<br>";
        echo "Email: " . $linha['email'] . "<br>";
        // Adicione outras linhas conforme necessário
    }
} else {
    // Se a consulta falhar, exiba uma mensagem de erro
    echo "Erro na consulta: " . $conexao->error;
}

// Lembre-se de fechar a conexão após usar
$conexao->close();
?>

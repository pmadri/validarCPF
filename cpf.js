// Função para validar um CPF
function validarCPF(cpf) {
    // Remove todos os caracteres que não sejam números
    cpf = cpf.replace(/[^\d]+/g, '');

    // Verifica se o CPF tem exatamente 11 dígitos ou se todos os dígitos são iguais
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
  
    // Calcula a soma dos 9 primeiros dígitos do CPF para o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        // Multiplica cada dígito pelo peso correspondente (10, 9, 8, ..., 2) e soma
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    // Calcula o resto da divisão da soma multiplicada por 10 por 11
    let resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) resto = 0;

    // Verifica se o primeiro dígito verificador é válido
    if (resto !== parseInt(cpf.charAt(9))) return false;

    // Reinicia a soma para calcular o segundo dígito verificador
    soma = 0;

    // Calcula a soma dos 10 primeiros dígitos do CPF para o segundo dígito verificador
    for (let i = 0; i < 10; i++) {
    // Multiplica cada dígito pelo peso correspondente e soma
    soma += parseInt(cpf.charAt(i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) resto = 0;

    // Verifica se o segundo dígito verificador é válido
    if (resto !== parseInt(cpf.charAt(10))) return false;

    // Retorna true se o CPF for válido
    return true;
}

// Adiciona um evento de escuta ao formulário
document.getElementById("cpfForm").addEventListener("submit", function(e) {
    // Previne o comportamento padrão do formulário (recarregar a página)
    e.preventDefault();

    // Obtém o valor do campo de entrada com o ID "cpf"
    const cpf = document.getElementById("cpf").value;

    // Obtém a div onde a mensagem será exibida
    const messageDiv = document.getElementById("message");

    // Valida o CPF usando a função validarCPF
    if (validarCPF(cpf)) {
        // Se o CPF for válido, exibe uma mensagem de sucesso em verde
        messageDiv.textContent = "CPF válido!";
        messageDiv.style.color = "green";
    } else {
        // Se o CPF for inválido, exibe uma mensagem de erro em vermelho
        messageDiv.textContent = "CPF inválido!";
        messageDiv.style.color = "red";
    }
});
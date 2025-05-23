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
}
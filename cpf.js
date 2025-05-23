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
}
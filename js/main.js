$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')
})

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        cpf: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        },
    },
    messages: {
        nome: 'Por favor insira o Nome',
        email: 'Por favor insira o E-mail',
        telefone: 'Por favor insira o Telefone',
        cpf: 'Por favor insira o CPF',
        endereco: 'Por favor insira o Endereço',
        cep: 'Por favor insira o CEP',
    },
    
})

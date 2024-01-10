$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000', {
    placeholder: '(xx) xxxx-xxx'
    });
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: 'xxx.xxx.xxx-xx'
    });
    
    $('#cep').mask('00000-000', {
        placeholder: 'xxxxx-xxx'
    });

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
        cep: {
        required: true
        },
        cpf: {
        required: true
        },
        endereco: {
        required: true
        },
        cidade: {
        required: true
        }

    },
    messages: {
        nome: 'Por favor, insira seu nome',
        telefone: 'Por favor, insira seu Telefone',
        cpf: 'Por favor, insira seu CPF',
        cep: 'Por favor, insira seu CEP',
        endereco: 'Por favor, insira seu endereço',
        cidade: 'Por favor, insira sua Cidade'
    },
    submitHandler: function(form) {
        console.log(form)
    },
    invalidHandler: function(eventp, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`)
            }
    }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
        scrollTop: destino.offset().top
        }, 1000)
    })

})
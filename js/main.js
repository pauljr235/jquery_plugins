
$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
    })
    $('.menu-hamburger').click(function(){
        $('nav').slideToggle();
    })    

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true /*valida o campo email como obrigatório*/
            },
            telefone: {
                required: true,
            },
            mensagem: {
                required: true,
            },
            veiculoDeInteresse: {
                required: false,
            }
        },
        messages: {
        nome: 'Por favor, insira o nome',
        telefone:'Por favor, insira o número do telefone',
        email: 'Por favor, insira um email válido'
        },
        submitHandler: function(form) { /*serve para interceptar o evento 'submit'(envio do formulário)*/
            console.log(form)
        },
        invalidHandler: function(evento, validador) { /*serve para interceptar o evento 'submit' quando o formulário estiver INVÁLIDO*/
            let camposIncorretos = validador.numberOfInvalids(); /*função que retorna ao usuário a quantidade de campos incorretos*/
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
    $('.lista-veiculos button').click(function(){ /*Função responsável por rolar a tela até o formulário ao clicar no link do produto*/
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text(); 

        $('#veiculo-interesse').val(nomeVeiculo); /*Função responsável por coletar o produto clicado e jogar para o formulário o mesmo*/

        $('html').animate({ /*Função responsável por rolar a tela até o formulário ao clicar no link do produto*/
            scrollTop: destino.offset().top
        }, 1000)
    })
})
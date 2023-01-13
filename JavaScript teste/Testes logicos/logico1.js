
/* Declaração das variáveis necessárias para o código */

var altura_usuario = document.querySelector('.dado_altura');
var peso_usuario = document.querySelector('.dado_peso');
var IMC_cal = peso_usuario / altura_usuario * altura_usuario;



    function validação () {
        altura_usuario = document.getElementsByClassName('.dado_altura').value;
        peso_usuario = document.getElementsByClassName('.dado_peso').value;

            if('.dado_altura' == '' || '.dado_peso' == '') {
                alert("Dados não foram informados corretamente")
            }
            else {
            document.getElementsByClassName('.form'.submit())
        }

        }

    function IMC_calculo () {
        IMC_cal = peso_usuario / altura_usuario * altura_usuario;
        alert("O seu IMC é " + IMC_cal )
    }
/* 
    botao_submissao.addEventListener('click', IMC_calculo); */
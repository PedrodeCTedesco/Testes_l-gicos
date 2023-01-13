
/* método alert() */

/* alert("Esse método abre uma caixa de diálogo \n para alertar o usuário de alguma coisa");


var a = prompt("Insira seu Nome", "Nome");
var b = prompt("Digite seu sobrenome");

    document.write("Olá " + a + b ); */

/*     Utilizando o método confirm() */

/* var mensagem;
    var retorno = confirm("Você vai comprar meus cursos?");
        if (retorno == true)
            {mensagem = "Valeu, você é topster"}
        else {mensagem = "Você não vai passar (citei Gandalf)"}
    document.write(mensagem); */

/* Utilizando constantes */

/* var nome;
const SOBRENOME = 5;

nome = prompt("Digite seu nome");
alert(nome + " dos " + SOBRENOME); */

/* var numerador_1 = 53;
var numerador_2 = 51;

document.write("O resultado é: " + (++numerador_2) + "<br>");
document.write("Essa multiplicação será: " + (numerador_2 * numerador_1) + "<br>");
document.write("Eu dividi " + numerador_1 + " por " + numerador_2 + " e tive como resultado: " + (numerador_1 / numerador_2) + "<br>");
document.write("João tinha " + numerador_2 + " bolinhas, mas perdeu " + numerador_1 + " bolinhas, agora João tem: " + (numerador_2 - numerador_1) + "<br>");
document.write("Andei " + numerador_1 + " ontem, e hoje andarei " + numerador_2 + " assim nesses dois dias andei " + (numerador_1 + numerador_2) + "quilômetros." + "<br>");
document.write("Juliana falou: " + numerador_1 + " e Andreia respondeu: " + numerador_2 + " quando perguntaram o resto, Camila gritou: " + (numerador_1 % numerador_2) + "<br>");
document.write("Cada dia que passa, Marcelo encolhe 1 cm. Ontem tinha " + numerador_1 + " de altura e hoje tem " + (--numerador_1) + "<br>"); */
/* 
alert("Vamos calcular a área do seu terreno!"); */
/* 
var largura_terreno = prompt("Insira a largura do seu terreno");
var altura_terreno = prompt("Insira a altura do seu terreno"); */
/* var area_total = largura_terreno * altura_terreno;
var bigibgi = "Arlindo";
var numero = 43;

document.write("Seu terreno tem: " + area_total + "km²" + "<br>");

document.write(typeof area_total + "<br>");
document.write(typeof bigibgi + "<br>");
document.write(typeof "Arlindo" + "<br>");
document.write(typeof 43); */

/* var gaia = "Gaia";
var idade_gaia = 3;
a = 230;
var vivo = true; */

/* document.write(typeof "Gaia" + "<br>");
document.write(typeof gaia + "<br>");
document.write(typeof a + "<br>");
document.write(typeof 230 + "<br>");
document.write(typeof vivo + "<br>");
document.write(typeof true + "<br>");



a = String(a);

document.write(typeof a + "<br>");
document.write(typeof 230 + "<br>");

var vivo = true;
document.write(typeof true + "<br>");

vivo = String(vivo);
document.write(typeof vivo + "<br>");

idade_gaia = idade_gaia.toString(idade_gaia);
document.write(typeof idade_gaia + "<br>");
document.write("A variável é do tipo string");  */

/* var resultado = true;
document.write("A variável é do tipo " + typeof resultado + "<br>");

resultado = String(resultado);
document.write("Agora a variável é do tipo " + typeof resultado + "<br>");

resultado = resultado.toString(resultado);
document.write("A variável também se transformou em um tipo " + typeof resultado + "<br>");

document.write("Agora vamos transformar os dados em números" + "<br>");

var gatinho = "Venus";
document.write("A variável é do tipo " + typeof gatinho + "<br>");

gatinho = Number(gatinho);
document.write("Agora a variável é do tipo " + typeof gatinho + "<br>");

var estado = false;
document.write("A variável citada é do tipo " + typeof estado + "<br>");

estado = Number(estado);

document.write("Agora a variável é do tipo: " + typeof estado + "<br>");

var copo = 10;
document.write("Esta variável é do tipo: " + typeof copo + "<br>");

copo = parseInt(copo);

document.write("E agora é do tipo " + typeof copo + "<br>"); */

/* var ilha = 12.34;
document.write("Eis que a variável é do tipo " + typeof ilha + "<br>");
document.write("E o valor dela é " + ilha + "<br>");
ilha = parseInt(ilha);
document.write("E mudou para " + typeof ilha + "<br>");
document.write("E o valor agora é " + ilha + "<br>"); */

/* var resolucao = true;
document.write("Neste caso temos um " + typeof resolucao + "<br>");
document.write("E o valor é " + resolucao + "<br>");
resolucao = parseInt(resolucao);
document.write("Mudou para " + typeof resolucao + "<br>");
document.write("E o valor da variável agora é " + resolucao + "<br>"); */

/* var fulano = "Cicrano";
document.write(typeof fulano + "<br>");
document.write("O valor é " + fulano + "<br>");
fulano = parseInt(fulano);
document.write(typeof fulano + "<br>");
document.write("O valor agora é " + fulano + "<br>"); */
/* 
var valorHumus = 12.9;
document.write(typeof valorHumus + "<br>");
document.write("O valor é " + valorHumus + "<br>");
document.write("Mostre na cifra " + valorHumus.toFixed(3)); */

/* var gaga = 12.4390384302;
document.write(typeof gaga + "<br>");
document.write("O valor é " + gaga + "<br>");
document.write("Escreva " + gaga.toPrecision(6)); */

/*Operadores relacionais */

/* var nome = false;
var sobre = 123;

if(nome == sobre) {
    alert("Correto")
    prompt("Explique sua resposta")
}
else {
    alert("Incorreto") */


/* var logico = "";
var num = 10;
var text = "12";

logico = num != text;

if(num != text) {
    document.write("A relação é do tipo " + logico + "<br>")
}
else {
    document.write("Reinsira os dados, por favor")
} */

/* var logico = "";
var num = 10;
var text = "12";

document.write(typeof logico + "<br>")
document.write("A variável logico possui valor indefinido e seu tipo é string" + "<br>")

logico = num != text;

if(num != text) {
    document.write("A variável logico agora tem um valor e mudou de tipo " + "<br>")
    document.write("O tipo é " + typeof logico + "<br>")
}
else {
    document.write("Reinsira os dados, por favor")
} */

/* var abe = "10";
var de = 10;
var logico = true;

logico = abe !== de;
document.write("A relação entre " + abe + " e de " + "é do tipo " + logico + "<br>") */



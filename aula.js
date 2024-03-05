function multiplicacao(numero1, numero2) {
    return numero1 * numero2; //retorno do numero1 * numero2
}
function saudacao(nome) {
    return "Olá " + nome; //retorno da string "Ola + nome"
}
var resultadoMultiplicacao = multiplicacao(5, 3); //constante que esta recebendo 5, 3 para serem multiplicados
console.log("Resultado da multiplicação:", resultadoMultiplicacao); //aqui ira mostra a string "Resultado da multiplicaçao + valor de 5 * 3 ja multiplicado" 
var mensagemSaudacao = saudacao("João"); //constante recebe a funcao SAUDACAO que ja tem um string "Ola" que recebe ("Joao")
console.log(mensagemSaudacao); //console.log = Ola Joao 


//compilar = tsc aula.ts
//eecultar = node.aula.js

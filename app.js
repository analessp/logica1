// function = declaro uma função
// mediaDaNota = nome da função (SEMPRE em came1Case)
// nota0, nota1, nota2, nota3 = argumentos, ou seja, variáveis.
// {} = é aonde vai acontecer a lógica em 

function classificacao() {
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);
    const resultadoFinal = document.getElementById("resultado-final");

    if (
        nota1 > 10 || nota2 > 10 || nota3 > 10 ||
        nota1 < 0 || nota2 < 0 || nota3 < 0 ||
        isNaN(nota1) || isNaN(nota2) || isNaN(nota3)
    ) {
        alert("Digite uma nota válida!");
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;
    const aprovacao = media >= 7 ? "Aprovado!" : "Reprovado.";

    resultadoFinal.innerHTML = `A sua media foi de ${media.toFixed(2)}. ${aprovacao}`;
}

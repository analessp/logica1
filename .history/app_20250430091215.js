// function = declaro uma função
// mediaDaNota = nome da função (SEMPRE em came1Case)
// nota0, nota1, nota2, nota3 = argumentos, ou seja, variáveis.
// {} = é aonde vai acontecer a lógica em 

function classificacao () {
    const nota1 = Number(document.getElementById("nota1"));
    const nota1 = Number(document.getElementById("nota2"));
    const nota1 = Number(document.getElementById("nota3"));
    const resultadoFinal = document.getElementById("reshltadofinal");
    let aprovacao;
    const media = (nota1 + nota2 + nota3)/3;
    
    if (media >= 7 ) {
        resultadoFinal.innerHTML = "Aprovado!";
    } else {
        resultadoFinal.innerHTML= "Reprovado";
    }

    resultadoFinal.innerHTML = `A sua media foi de ${media}´
}
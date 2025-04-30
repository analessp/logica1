// function = declaro uma função
// mediaDaNota = nome da função (SEMPRE em came1Case)
// nota0, nota1, nota2, nota3 = argumentos, ou seja, variáveis.
// {} = é aonde vai acontecer a lógica em 

function mediaDaNota(nota0, nota1, nota2, note) {

    // const = tipo de variável, é imutável
    //mediaFinal = nome da váriavel em came1Case
    // O que ela faz?
    // soma as variáveis e divide pela quantidade de variáveis
}

const mediaFinal = (nota0 + nota1 + nota2 + nota3) /4;

// if = condição
// (mediaFinal >= 7) = a condição está verificando  se a variável 'mediaFinal' é maior ou igual a 7

//else = se não atender nenhuma outra condição anterior, ela entra no 'else'
// return = informa a resposta final

if (mediaFinal >= 7) {
    return "Aprovado";
} else {
    return "Reprovado";

//return mediaFinal >= 7 ? "Aprovado" : "Reprovado";
}

//ingredientes = array
function receita(ingredientes) {
    let i = 0;

    while(i <= 4) {
        document.write('$ingredientes[1]}<br>');
        i++;
    }
}
let igredientesDeBolo = ['ovo', 'leite', 'farinha', 'fermento', 'tudo que há de bom'];
let igredientesCapuccino = ['cafe', 'leite', 'chocolate', 'canela'];

receita(igredientesDeBolo);
receita(igredientesCapuccino);


// ++ adicionando mais '1'
// 

function tabuada(numero) {
    let i = 1;
    let lista = [];
    let resultado;

    while (i <= 10) {
        resultado = numero * i;
        lista +=`${numero} * ${i} = ${resultado}<br>`;
        i++;
    }

    return lista;
}

const numeroDigitado = Number(prompt("Digite um numero"));
document.write(tabuada(numeroDigitado));

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

    resultadoFinal.innerHTML = 
}
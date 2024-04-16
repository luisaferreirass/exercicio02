let alunos = [
    {
        nome: "Luisa",
        primeiraNota: 9,
        segundaNota: 8,

    },

    {
        nome: "Pietra",
        primeiraNota: 7,
        segundaNota: 5,

    },

    {
        nome: "Mariana",
        primeiraNota: 3,
        segundaNota: 5,

    }

]

function Media(nota1, nota2) {
    let result = (nota1 + nota2) / 2
    return result
}

for (let aluno of alunos) {
    let resultadoFinal = Media(aluno.primeiraNota, aluno.segundaNota)
    if (resultadoFinal >= 7) {
        alert(`A média do(a) aluno(a) é: ${resultadoFinal} \n
    Parabéns ${aluno.nome}! Você foi aprovado(a) no concurso.`)
    }
    else {
        alert(`A média do(a) aluno(a) é: ${resultadoFinal} \n
Não foi dessa vez, ${aluno.nome}! Tente novamente!`)

    }
}





// operador ternário
// if else

const palavra = "texto"

if(palavra.length > 10){
    console.log(palavra)
}else{
    console.log("palavra muito pequena")
}

// operação lógica ? true : false
console.log(palavra.length > 10 ? palavra : "palavra muito pequena")

// se o lado esquerdo for false ignora o restante
console.log(palavra.length > 10 && palavra)

// se o lado esquerdo for true, ignora o restante
console.log(palavra.length < 10 || palavra)



// operador spread

function soma(...valores){
    // valores = []
    return valores.reduce((prev, next) => prev + next, 0)
}

soma(10, 20, 30, 40, 50)

const array1 = ["banana", "maçã", "maracujá"]
const array2 = ["chocolate", "doce de leite", "pudim"]
const array3 = [...array1, ...array2]
// resultado final
// ["banana", "maçã", "maracujá", "chocolate", "doce de leite", "pudim"]

// array methods
// reduce, map, foreach, filter, find

// Objetos
const pessoa = {
    nome: "Marcos",
    sobrenome: "Santos",
    cpf: "111.111.111-11",
    nascimento: "01-01-1960",
    mae: "Maria Joaquina das Dores",
    idade: 20,
    nomeCompleto: function() {
        return `${this.nome} ${idade > 18 ? this.sobrenome : this.mae}`
    }
}

Object.keys(pessoa) // array com todas as chaves do objeto
// ["nome", "sobrenome", "cpf", "nascimento", "nomeCompleto"]


const {nome, sobrenome} = pessoa
// const nome  = pessoa.nome
// const sobrenome = pessoa.sobrenome


// templates strings
// interpolação de strings

// arrow function
// não possui contexto definido

// Funções Callback


document.getElementById("formulario").addEventListener("submit", (event) => {
    // evitar a execução padrão
    event.preventDefault()

    // obter o elemento que disparou o evento
    event.target
})

// click => quando o usuário clica com o mouse sobre o elemento
// change => quando o usuário modificar o valor de um input
/*
Código sem modal e com categorias estáticas

PASSO A PASSO
1) Adicionar a data de hoje - ok
2) Criar o card da tarefa - ok
3) Mostrar os cards na tela
*/

const body = document.querySelector("body")

//1) Adicionar a data de hoje - ok
const dataHoje = () => {
    const h3 = document.querySelector("#dataToDoList")

    const data = new Date()

    h3.innerText = data.toDateString()
}
dataHoje()


//2) Criar o card da tarefa - ok
const cardTarefa = (tarefa) => {
    const li = document.createElement("li")

    const input = document.createElement("input")
    input.type = "checkbox"

    input.addEventListener("click", () => {
        nome.classList.toggle("tracejado")
        data.classList.toggle("tracejado")
    })

    const nome = document.createElement("p")
    nome.innerText = tarefa.nomeTarefa

    const data = document.createElement("p")
    data.innerText = tarefa.data

    const botao = document.createElement("button")

    botao.addEventListener("click", () => {
        const id = listaDeTarefas.indexOf(tarefa)
        listaDeTarefas.splice(id, 1)

        renderizarCards(listaDeTarefas)
    })

    const lixeiraIcone = document.createElement("img")
    lixeiraIcone.src = "../img/trash-alt.png"
    lixeiraIcone.alt = "Lixeira"

    botao.appendChild(lixeiraIcone)
    
    li.append(input, nome, data, botao)

    return li
}

//3) Mostrar os cards na tela
const renderizarCards = (arr) => {
    const tarefasContainer = document.querySelectorAll(".main__ul")
    console.log(tarefasContainer)

    tarefasContainer.forEach((container) => {
        container.innerHTML= ""

        arr.forEach((elemento) => {

            if(elemento.categoria.toLowerCase() === container.id) {
                const card = cardTarefa(elemento)

                container.appendChild(card)
            }
        })
    })
} 
renderizarCards(listaDeTarefas)

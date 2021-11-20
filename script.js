const itensArray = ["Vitor", "Lucas"]

function showNewItem(){
    const itensGroup = document.getElementById("itens-group")
    const listItem = document.createElement("li")
    listItem.textContent = `${itensArray[itensArray.length - 1]}`
    itensGroup.appendChild(listItem)
}

document.getElementById("add-btn").addEventListener("click", () => {
    const inputItens = document.getElementById("input-itens")

    itensArray.push(inputItens.value)
    showNewItem()
    console.log(itensArray)
})


function showStoragedItems(){

    const mainElement = document.getElementsByTagName("main")[0]

    const itensGroup = document.createElement("ul")
    itensGroup.id = "itens-group"

    mainElement.appendChild(itensGroup)

    itensArray.map((value, index) => {
        const listItem = document.createElement("li")
        listItem.textContent = `${value}`
        itensGroup.appendChild(listItem)
    })
}

showStoragedItems()
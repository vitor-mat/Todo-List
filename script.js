let itensArray = JSON.parse(localStorage.getItem("itemsArray")) || []
console.log(typeof itensArray)
function removeItem(name, child){
    const itensGroup = document.getElementById("itens-group")

    const index = itensArray.indexOf(name.toString())

    itensGroup.removeChild(child)

    itensArray.splice(index,1)
}

function showNewItem(){
    const itensGroup = document.getElementById("itens-group")
    const listItem = document.createElement("li")
    const inputElement = document.createElement("input")
    inputElement.setAttribute("type", "checkbox");
    inputElement.id = `item-${itensArray[itensArray.length - 1]}`
    listItem.appendChild(inputElement)
    const labelItem = document.createElement("label")
    labelItem.textContent = `${itensArray[itensArray.length - 1]}`
    labelItem.setAttribute("for", `item-${itensArray[itensArray.length - 1]}`)
    labelItem.addEventListener("click", ({ target }) => {
        if(!inputElement.checked){
            return target.style = " text-decoration: line-through;"
        }
        target.style = " text-decoration: none;"
    })
    inputElement.addEventListener("click", ({ target }) => {
        if(target.checked){
            return labelItem.style = " text-decoration: line-through;"
        }
        labelItem.style = " text-decoration: none;"
    })
    listItem.appendChild(labelItem)

    const functionsDiv = document.createElement("div")
    const btnDel = document.createElement("button")
    btnDel.textContent = "Deletar"
    const name = itensArray[itensArray.length - 1]
    btnDel.addEventListener("click", () => {
        removeItem(name, listItem)
    })
    functionsDiv.appendChild(btnDel)
    listItem.appendChild(functionsDiv)

    itensGroup.appendChild(listItem)
}

document.getElementById("add-btn").addEventListener("click", () => {
    const inputItens = document.getElementById("input-itens")

    itensArray.push(inputItens.value)
    localStorage.setItem("itemsArray", JSON.stringify(itensArray))
    showNewItem()
})


function showStoragedItems(){

    const mainElement = document.getElementsByTagName("main")[0]

    const itensGroup = document.createElement("ul")
    itensGroup.id = "itens-group"
    mainElement.appendChild(itensGroup)

    itensArray.map((value, index) => {

        const listItem = document.createElement("li")
        const inputElement = document.createElement("input")
        inputElement.setAttribute("type", "checkbox");
        inputElement.id = `item-${index}`
        listItem.appendChild(inputElement)
        const labelItem = document.createElement("label")
        labelItem.textContent = `${value}`
        labelItem.setAttribute("for", `item-${index}`)
        labelItem.addEventListener("click", ({ target }) => {
            if(!inputElement.checked){
                return target.style = " text-decoration: line-through;"
            }
            target.style = " text-decoration: none;"
        })
        inputElement.addEventListener("click", ({ target }) => {
            if(target.checked){
                return labelItem.style = " text-decoration: line-through;"
            }
            labelItem.style = " text-decoration: none;"
        })
        listItem.appendChild(labelItem)

        const functionsDiv = document.createElement("div")
        const btnDel = document.createElement("button")
        btnDel.textContent = "Deletar"
        btnDel.addEventListener("click", () => {
            removeItem(value, listItem)
        })
        functionsDiv.appendChild(btnDel)
        listItem.appendChild(functionsDiv)

        itensGroup.appendChild(listItem)
    })
}

showStoragedItems()
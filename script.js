let itensArray = JSON.parse(localStorage.getItem("itemsArray")) || []
console.log(typeof itensArray)
function removeItem(name, child){
    const itensGroup = document.getElementById("itens-group")
    const newArray = itensArray.filter((value) => {
        if(value.id !== name.id){
            return true
        }
        return false
    })
    itensGroup.removeChild(child)

    localStorage.setItem("itemsArray", JSON.stringify(newArray))
}

function showNewItem(){
    const itensGroup = document.getElementById("itens-group")
    const listItem = document.createElement("li")
    const inputElement = document.createElement("input")
    inputElement.setAttribute("type", "checkbox");
    inputElement.id = `item-${itensArray[itensArray.length - 1]}`
    listItem.appendChild(inputElement)
    const labelItem = document.createElement("label")
    labelItem.textContent = `${itensArray[itensArray.length - 1].item}`
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
    inputElement.addEventListener("click", ({ target }) => {
        if(!target.checked){
            name.checked = false
            localStorage.setItem("itemsArray", JSON.stringify(itensArray))
            return;
        }
        name.checked = true
        localStorage.setItem("itemsArray", JSON.stringify(itensArray))
    })
    functionsDiv.appendChild(btnDel)
    listItem.appendChild(functionsDiv)

    itensGroup.appendChild(listItem)
}

document.getElementById("add-btn").addEventListener("click", () => {
    const inputItens = document.getElementById("input-itens")

    itensArray.push({
        item: inputItens.value,
        checked: false,
        id: (Math.random()*100000000).toFixed(2)
    })
    localStorage.removeItem("itemsArray");
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
        inputElement.addEventListener("click", ({ target }) => {
            if(!target.checked){
                value.checked = false
                localStorage.setItem("itemsArray", JSON.stringify(itensArray))
                return;
            }
            value.checked = true
            localStorage.setItem("itemsArray", JSON.stringify(itensArray))
        })
        listItem.appendChild(inputElement)
        const labelItem = document.createElement("label")
        labelItem.textContent = `${value.item}`
        labelItem.setAttribute("for", `item-${index}`)
        labelItem.addEventListener("click", ({ target }) => {
            if(!inputElement.checked){
                return target.style = " text-decoration: line-through;"
            }
            target.style = " text-decoration: none;"
        })
        if(value.checked){
            inputElement.checked = true
            labelItem.style = "text-decoration: line-through; color: rgb(245, 73, 73)"
        }
        inputElement.addEventListener("click", ({ target }) => {
            if(target.checked){
                return labelItem.style = "text-decoration: line-through;"
            }
            labelItem.style = "text-decoration: none;"
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
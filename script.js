let itensArray = JSON.parse(localStorage.getItem("itemsArray")) || []

function removeItem(name, child){
    const itensGroup = document.getElementById("itens-group")
    const newArray = itensArray.filter((value) => {
        if(value.id !== name.id){
            return true
        }
        return false
    })
    itensArray = newArray;
    itensGroup.removeChild(child)
    localStorage.setItem("itemsArray", JSON.stringify(newArray))
}

function showNewItem(){

    const itensGroup = document.getElementById("itens-group")
    const listItem = document.createElement("li")
    const divItems = document.createElement("div")
    const inputElement = document.createElement("input")
    inputElement.setAttribute("type", "checkbox");
    inputElement.style = "accent-color: #f54949";
    inputElement.id = `item-${itensArray[itensArray.length - 1].id}`
    divItems.appendChild(inputElement)
    const labelItem = document.createElement("label")
    labelItem.textContent = `${itensArray[itensArray.length - 1].item}`
    labelItem.setAttribute("for", `item-${itensArray[itensArray.length - 1].id}`)

    labelItem.addEventListener("click", ({ target }) => {
        if(!inputElement.checked){
            return target.style = " text-decoration: line-through; color: rgb(245, 73, 73)"
        }
        target.style = " text-decoration: none; color: #000)"
    })
    inputElement.addEventListener("click", ({ target }) => {
        if(target.checked){
            return labelItem.style = " text-decoration: line-through; color: rgb(245, 73, 73)"
        }
        labelItem.style = " text-decoration: none; #000"
    })

    divItems.appendChild(labelItem)

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
    listItem.appendChild(divItems)
    listItem.appendChild(btnDel)

    itensGroup.appendChild(listItem)
}

document.getElementById("add-btn").addEventListener("click", () => {
    const inputItens = document.getElementById("input-itens")

    if(inputItens.value.length){
        itensArray.push({
            item: inputItens.value,
            checked: false,
            id: (Math.random()*100000000).toFixed(2)
        })
        localStorage.removeItem("itemsArray");
        localStorage.setItem("itemsArray", JSON.stringify(itensArray))
        showNewItem()
        inputItens.value = ""
        inputItens.focus()
        return;
    }
    alert("Error: Campo de Entrada Vazio!!")
})


function showStoragedItems(){

    const mainElement = document.getElementsByTagName("main")[0]

    const itensGroup = document.createElement("ul")
    itensGroup.id = "itens-group"
    mainElement.appendChild(itensGroup)

    itensArray.map((value, index) => {

        const listItem = document.createElement("li")
        const divItems = document.createElement("div")
        const inputElement = document.createElement("input")
        inputElement.setAttribute("type", "checkbox");
        inputElement.style = "accent-color: #f54949";
        inputElement.id = `item-${index}`
        divItems.appendChild(inputElement)
        inputElement.addEventListener("click", ({ target }) => {
            if(!target.checked){
                value.checked = false
                localStorage.setItem("itemsArray", JSON.stringify(itensArray))
                return;
            }
            value.checked = true
            localStorage.setItem("itemsArray", JSON.stringify(itensArray))
        })
        const labelItem = document.createElement("label")
        labelItem.textContent = `${value.item}`
        labelItem.setAttribute("for", `item-${index}`)
        labelItem.addEventListener("click", ({ target }) => {
            if(!inputElement.checked){
                target.style = "text-decoration: line-through; color: rgb(245, 73, 73)"
                return;
            }
            target.style = "text-decoration: none; color: rgb(0, 0, 0)"
        })
        if(value.checked){
            inputElement.checked = true
            labelItem.style = "text-decoration: line-through; color: rgb(245, 73, 73)"
        }
        inputElement.addEventListener("click", ({ target }) => {
            if(target.checked){
                return labelItem.style = "text-decoration: line-through; color: rgb(245, 73, 73)"
            }
            labelItem.style = "text-decoration: none; color: rgb(0, 0, 0)"
        })
        divItems.appendChild(labelItem)
        listItem.appendChild(divItems)

        const btnDel = document.createElement("button")
        btnDel.textContent = "Deletar"
        btnDel.addEventListener("click", () => {
            removeItem(value, listItem)
        })
        listItem.appendChild(btnDel)

        itensGroup.appendChild(listItem)
    })
}

showStoragedItems()

document.addEventListener("keydown", e => {
    
    const inputItens = document.getElementById("input-itens")

    if(e.key === "Enter" && document.activeElement.id === "input-itens"){
        if(inputItens.value.length){
            itensArray.push({
                item: inputItens.value,
                checked: false,
                id: (Math.random()*100000000).toFixed(2)
            })
            localStorage.removeItem("itemsArray");
            localStorage.setItem("itemsArray", JSON.stringify(itensArray))
            showNewItem()
            inputItens.value = ""
            inputItens.focus()
            return;
        }
        alert("Error: Campo de Entrada Vazio!!")
    }
})
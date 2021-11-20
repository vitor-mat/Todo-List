const itensArray = []

document.getElementById("add-btn").addEventListener("click", () => {
    const inputItens = document.getElementById("input-itens")
    const itensGroup = document.getElementById("itens-group")
    itensArray.push(inputItens.value)
    alert(itensArray)
})

/*
     itensArray.map((value, index) => {
        const listItem = document.createElement("li")
        listItem.textContent = `${(index + 1)} - ${value}`
        itensGroup.appendChild(listItem)
    })
 */
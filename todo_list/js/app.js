const list = "#list"
const input = "#input"
const add = "#add"
const clear = "#clear"
const url = "#url"
const load = "#load"
const tasks = ["Coder en HTML", "Coder en CSS", "Coder en JavaScript"]

const listElement = document.querySelector(list)
const inputElement = document.querySelector(input)
const addElement = document.querySelector(add)
const clearElement = document.querySelector(clear)
const urlElement = document.querySelector(url)
const loadElement = document.querySelector(load)

const refreshTasks = () => {
    listElement.innerHTML = ""
    tasks.forEach((task, index) => {
        if (typeof task === "string" && task !== "") {
            liElement = document.createElement("li")
            liElement.innerHTML = task
            buttonElement = document.createElement("button")
            buttonElement.innerHTML = "REMOVE"
            buttonElement.addEventListener("click", () => {
                deleteTask(index)
            })
            liElement.appendChild(buttonElement)
            listElement.appendChild(liElement)
        }
    })

}
const deleteTask = (index) => {
    tasks.splice(index, 1)
    refreshTasks()
}
const addTask = (value) => {
    if (typeof value === "string" && value !== "" && !tasks.includes(value)) {
        tasks.push(value)
        return true
    } else {
        return false
    }
}
const clearTasks = () => {
    tasks.splice(0, tasks.length)
}
const loadTasks = () => {
    const tasks = JSON.parse(urlElement.value)
    tasks.forEach((task) => {
        addTask(task)
    })
}

addElement.addEventListener("click", () => {
    addTask(inputElement.value)
    refreshTasks()
})
inputElement.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addTask(inputElement.value)
        refreshTasks()
    }
})
clearElement.addEventListener("click", () => {
    clearTasks()
    refreshTasks()
})
loadElement.addEventListener("click", () => {
    loadTasks()
    refreshTasks()
})

refreshTasks()
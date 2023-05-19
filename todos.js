const body =document.querySelector("body")

const renderData = (todoData)=> {
    todoData.map(todo=>{
        const tdo = document.createElement('div');
        const h1= document.createElement("h1")
        h1.textContent = `${todo.userId} ${todo.id}`
        const p1= document.createElement("p")
        p1.textContent = todo.title
        const p2= document.createElement("p")
        p2.textContent = todo.completed
        
        tdo.appendChild(h1)
        tdo.appendChild(p1)
        tdo.appendChild(p2)
        body.appendChild(tdo)
    })
}
const todos = fetch('https://jsonplaceholder.typicode.com/todos');
todos.then(async todoList=> {
    const todoFolder = await todoList.json()
    renderData(todoFolder)
});

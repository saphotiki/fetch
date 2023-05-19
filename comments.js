const body =document.querySelector("body")

const renderData = (commentData)=> {
    commentData.map(comment=>{
        const cData = document.createElement('div');
        const h1= document.createElement("h1")
        h1.textContent = `${comment.postId} ${comment.email}`
        const p1= document.createElement("p")
        p1.textContent = comment.name
        const p2= document.createElement("p")
        p2.textContent = comment.body
        
        cData.appendChild(h1)
        cData.appendChild(p1)
        cData.appendChild(p2)
        body.appendChild(cData)
    })
}
const comments = fetch('https://jsonplaceholder.typicode.com/comments');
comments.then(async commentList=> {
    const cFolder = await commentList.json()
    renderData(cFolder)
});


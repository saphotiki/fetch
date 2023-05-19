const body =document.querySelector("body")

const renderData = (postData)=> {
    postData.map(post=>{
        const folders = document.createElement('div');
        const h1= document.createElement("h1")
        h1.textContent = `${post.userId} ${post.id}`
        const p1= document.createElement("p")
        p1.textContent = post.title
        const p2= document.createElement("p")
        p2.textContent = post.body
        folders.appendChild(h1)
        folders.appendChild(p1)
        folders.appendChild(p2)
        body.appendChild(folders)
    })
}
const posts = fetch('https://jsonplaceholder.typicode.com/posts');
posts.then(async postList=> {
    const pFolder = await postList.json()
    renderData(pFolder)
});

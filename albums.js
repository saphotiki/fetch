const body =document.querySelector("body")
const renderData = (albumData)=> {
    albumData.map(album=>{
        const albm = document.createElement('div');
        const h1= document.createElement("h1")
        h1.textContent = `${album.userId} ${album.id}`
        const p1= document.createElement("p")
        p1.textContent = album.title
       
        albm.appendChild(h1)
        albm.appendChild(p1)
        body.appendChild(albm)
    })
}
const albums = fetch('https://jsonplaceholder.typicode.com/albums');
albums.then(async albumList=> {
    const aFolder = await albumList.json()
    renderData(aFolder)
});
const body =document.querySelector("body")

const renderData = (photoData)=> {
    photoData.map(photo=>{
        const pht = document.createElement('div');
        const h1= document.createElement("h1")
        h1.textContent = `${photo.albumId} ${photo.id}`
        const p1= document.createElement("p")
        p1.textContent = photo.title
        const p2= document.createElement("p")
        p2.textContent = photo.url
        const p3= document.createElement("p")
        p3.textContent = photo.thumbnailUrl
        
        pht.appendChild(h1)
        pht.appendChild(p1)
        pht.appendChild(p2)
        pht.appendChild(p3)
        body.appendChild(pht)
    })
}
const photos = fetch('https://jsonplaceholder.typicode.com/photos');
photos.then(async photoList=> {
    const photoFolder = await photoList.json()
    renderData(photoFolder)
});

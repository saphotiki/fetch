const body =document.querySelector("body")

const renderData = (userData)=> {
    userData.map(user=>{
        const usr = document.createElement('div');
        const h1= document.createElement("h1")
        h1.textContent = `${user.name} ${user.username}`
        const p1= document.createElement("p")
        p1.textContent = user.id
        const p2= document.createElement("p")
        p2.textContent = user.email
       
        
        const p3= document.createElement("p")
        p3.textContent = user.address
        const p4= document.createElement("p")
        p4.textContent = user.street
        const p5= document.createElement("p")
        p5.textContent = user.suit
        const p6= document.createElement("p")
        p6.textContent = user.city
        const p7= document.createElement("p")
        p7.textContent = user.zipcode

        
        const p8= document.createElement("p")
        p8.textContent = user.geo
        const p9= document.createElement("p")
        p9.textContent = user.lat
        const p10= document.createElement("p")
        p10.textContent = user.lng
        
        usr.appendChild(h1)
        usr.appendChild(p1)
        usr.appendChild(p2)
        usr.appendChild(p3)
        usr.appendChild(p4)
        usr.appendChild(p5)
        usr.appendChild(p6)
        usr.appendChild(p7)
        usr.appendChild(p8)
        usr.appendChild(p9)
        usr.appendChild(p10)
        body.appendChild(usr)
    })
}
const users = fetch('https://jsonplaceholder.typicode.com/users');
users.then(async userList=> {
    const userFolder = await userList.json()
    renderData(userFolder)
});

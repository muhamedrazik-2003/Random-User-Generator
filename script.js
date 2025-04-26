//question 6
async function randomUser() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let userList = await response.json()
    let random = Math.floor(Math.random() * userList.length)
    let randomUser = userList[random]
    console.log(randomUser)
    let content = `
        <h4> name : ${randomUser.name}</h4>
        <h6> username : ${randomUser.username}</h6>
        <h6> email : ${randomUser.email}</h6>
        <h6> Address : ${randomUser.address.suite},  ${randomUser.address.street},  ${randomUser.address.city}, ${randomUser.address.zipcode}, </h6>
    `
    userContent.innerHTML = content
}

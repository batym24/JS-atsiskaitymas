/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.querySelector('#btn').addEventListener('click', () => {
    document.querySelector('#output').innerHTML= ""
    fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(user => {
            
            const userDiv = document.createElement('div')
            userDiv.classList.add('user')
            
            const login = document.createElement('h1')
            login.appendChild(document.createTextNode(user.login))

            const avatar = document.createElement('img')
            avatar.setAttribute('src', user.avatar_url)

            userDiv.append(login, avatar)

            document.querySelector('#output').appendChild(userDiv)

        })
    })
})
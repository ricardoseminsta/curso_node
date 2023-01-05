const socket = io();

let username = '';
let userlist = [];

let loginPage = document.querySelector('#loginPage');
let chatPage = document.querySelector('#chatPage');

let loginInput = document.querySelector('#loginNameInput');
let texInput = document.querySelector('#chatTextInput');

loginPage.style.display = 'flex';
chatPage.style.display = 'none';

function renderUserList() {
    let ul = document.querySelector('.userList');
    ul.innerHTML = '';
    userlist.forEach(i => {
        ul.innerHTML += `<li>${i}</li>`;
    });
}

loginInput.addEventListener('keyup', (e)=>{
    if(e.keyCode === 13) {
        let name = loginInput.value.trim();
        if(name != '') {
            username = name;
            document.title = `Chat (${username})`;
            
            socket.emit('join-request', username);
        }

    }
});

socket.on('user-ok', (list) => {
    loginPage.style.display = 'none';
    chatPage.style.display = 'flex';

    texInput.focus();

    userlist = list;
    renderUserList();
});
let name = 'Julietta';
let age = 14;
let likesSushi = true;

function greeting(name) {
    console.log('Hello', name);
}

greeting('Julietta');

function saveName() {


    let newName = document.getElementById("greeter").value; // text field value from the user
    document.getElementById('username').textContent = newName;
    document.getElementById("greeter").value ="";
}
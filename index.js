const button = document.getElementById('add-item');    // On récupère l'élément sur lequel on veut détecter le clic
console.log(button);

button.addEventListener('click', function() {
	let todo = document.getElementById('todo');
    let item = document.createElement("div");
    todo.appendChild(item);
});
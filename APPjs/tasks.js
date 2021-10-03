//Almacenar datos de formulario

document.getElementById('formTask').addEventListener('submit', saveTask);

//Guardar datos en localStorage

function saveTask(e) {
    let task = document.getElementById('task').value;
    let description = document.getElementById('description').value;

    //Validación de formulario:

    if(task.length == 0){
        alert('llena los campos');
        return;
    }
    if(description.length == 0){
        alert('llena los campos');
        return;
    }

    let Tasks = {
        task, description
    };

    
    if (localStorage.getItem('tasks') === null) {

        let tasks = [];
        tasks.push(Tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {

        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(Tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    getTask();
    document.getElementById('formTask').reset();
    e.preventDefault();



}


//Mostrar datos en pantalla

function getTask() {

    let tasks = JSON.parse(localStorage.getItem('tasks'));

    document.getElementById('tasks').innerHTML = '<h1>Mi lista:</h1>';

    for (let i = 0; i < tasks.length; i++) {

        let task = tasks[i].task;
        let description = tasks[i].description;

        document.getElementById('tasks').innerHTML +=
            `<br>
             <p> ${task} - ${description} </p> 
             <button class="btn-submit" onclick="editTask('${task}')">Editar</button>
             <br>
             <button class="btn-submit btn-danger" onclick="deleteTask('${task}')">Borrar</button>`
    }

}

getTask();

//borrar datos

function deleteTask(task) {

    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i++) {

        if (tasks[i].task === task) {
            tasks.splice(i, 1);
        }

    }
    localStorage.setItem('tasks', JSON.stringify(tasks));

    getTask();

}






//editar campos

function editTask(task) {

    let tasks = JSON.parse(localStorage.getItem('tasks'));


    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].task === task) {
            let description = tasks[i].description;


            document.getElementById('formTask').innerHTML =
                `<input type="text" id="new-task" class="input-bar"
            value='${task}'>
            
            <br>
            <input type="text" id="new-description" class="input-bar"
            value='${description}'>
            <br>
            <button class="btn-submit" onclick="updateTask('${i}')">Editar</button>`
        }
    }
}
getTask();



//Actualizar cambios

function updateTask(i) {

    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks[i].task = document.getElementById('new-task').value;
    tasks[i].description = document.getElementById('new-description').value;
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


//Cambio a modo obscuro
const mode = document.querySelector("#btn-mode");
const body = document.querySelector("body");

savePage();

mode .addEventListener("click", e => {
    body.classList.toggle("mode");
    refreshPage(body.classList.contains('mode'));
});

//almacenar el evento en localstorage

function savePage(){
    const mode = localStorage.getItem('mode');
    if(!mode){
        refreshPage('false');
    }else if(mode == 'true'){
        body.classList.add('mode');
    }
}

function refreshPage(value){
    localStorage.setItem('mode', value);
}
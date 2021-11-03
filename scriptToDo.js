function addLocalStorage(){

    let newTask = document.getElementById('newTask');
    let tasksExistentes = JSON.parse(localStorage.getItem('lista'));

    //verifica se Browser tem suporte a local Storage
    if(localStorage !== "undefined"){
        
        let arrayAtividades = [];

        if(tasksExistentes != null){
            arrayAtividades = tasksExistentes; //se não fizer isso, dará erro ao fazer "arrayAtividades.push(newTask.value)" caso a lista esteja vazia.
        }
        if(newTask.value !== ""){
            arrayAtividades.push(newTask.value);
            localStorage.lista = JSON.stringify(arrayAtividades);
           
            newTask.value = ""
            mostrarNaPag();
        }           
    }else{
            document.write("Browser não suporta Local Storage");
        }        
}

function mostrarNaPag(){

    let taskList = document.getElementById('taskList');

    taskList.innerHTML = ""; //zera a lista para as atividades não se repetirem quando add um item novo

    let arrayAtividades = JSON.parse(localStorage.getItem('lista'));

    for (let atividade in arrayAtividades){
    
        let num = parseInt(atividade) + 1; //numerando as atividades
    
        let task = document.createElement("LI"); //crio o novo elemento filho (neste caso, a nova task) - Ex:  <li></li>
        let newChild = document.createElement("input"); //crio o texto do novo elemento filho (a nova task) - Ex: Tomar banho
            
        newChild.setAttribute("type","checkbox");
        newChild.setAttribute("name","itens");
        newChild.setAttribute("value",arrayAtividades[atividade]);
        
        let textnode = document.createTextNode(" " + num + " - " + arrayAtividades[atividade]); 
        
        task.appendChild(newChild); //add os atributos ao novo elemento
        task.appendChild(textnode); //add o texto ao novo elemento
        taskList.appendChild(task); //add o novo item (li) à task list (ul)  
    
    }       
}

function excluir(){

    let selecao = document.getElementsByName('itens');

    let updatedList = [];

    for(let item of selecao){
        
        if(item.checked == false){
            updatedList.push(item.value);

        }
    }
    arrayAtividades = updatedList;
    localStorage.lista = JSON.stringify(arrayAtividades);

    mostrarNaPag();


}



const btnAdicionar = document.querySelector('#btnAdicionar');
let containerItens = document.querySelector('#lista')

let mensagemErro = document.querySelector('#mensagem');
let tarefas = [];


function adicionar(){
    let inputTarefa = document.querySelector('#txtTarefa').value.toUpperCase(); 
    if(inputTarefa === ''){
        mensagemErro.textContent = 'Digite uma tarefa antes de adicionar!';
        setTimeout(() => {
            mensagemErro.textContent = '';
        },1500)
        return;
    }

    if(tarefas.indexOf(inputTarefa) !== -1){
        mensagemErro.textContent = 'Tarefa invalida ou já existente na lista!';
        setTimeout(() => {
            mensagemErro.textContent = '';
        },1500) 
    }else{
        tarefas.push(inputTarefa);
        let item = document.createElement('li');
        item.classList.add('itens')

        item.textContent = inputTarefa; 
        containerItens.appendChild(item)

        let btnRemover = document.createElement('button');
        btnRemover.classList.add('btnRemover');
        btnRemover.textContent = 'Remover'
        item.appendChild(btnRemover);

        function remover(event){
            let itemTarefa = event.target.parentElement;
            let tarefaRemovida = itemTarefa.textContent.replace("Remover", "").trim();
            let index = tarefas.indexOf(tarefaRemovida);

            if(index !== -1){
                tarefas.splice(index,1);
            }

            itemTarefa.remove();
        }
        
        btnRemover.addEventListener('click', remover)
    }
}

btnAdicionar.addEventListener('click', adicionar);
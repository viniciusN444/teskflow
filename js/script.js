const btnAdicionar = document.querySelector('#btnAdicionar');
const containerItens = document.querySelector('#lista');
const mensagemErro = document.querySelector('#mensagem');
const inputTarefa = document.querySelector('#txtTarefa');
let tarefas = [];

function adicionar() {
    let tarefa = inputTarefa.value.trim().toUpperCase();

    if (tarefa === '') {
        exibirMensagem('Digite uma tarefa antes de adicionar!');
        return;
    }

    if (tarefas.includes(tarefa)) {
        exibirMensagem('Tarefa inválida ou já existente na lista!');
        return;
    }

    tarefas.push(tarefa);
    let item = document.createElement('li');
    item.classList.add('itens');
    item.textContent = tarefa;

    let btnRemover = document.createElement('button');
    btnRemover.classList.add('btnRemover');
    btnRemover.textContent = 'Remover';
    btnRemover.setAttribute('aria-label', 'Remover tarefa');
    btnRemover.addEventListener('click', remover);

    item.appendChild(btnRemover);
    containerItens.appendChild(item);

    inputTarefa.value = ''; // Limpa o campo após adicionar
}

function remover(event) {
    let itemTarefa = event.target.parentElement;
    let tarefaRemovida = itemTarefa.firstChild.textContent.trim();
    tarefas = tarefas.filter(t => t !== tarefaRemovida);
    itemTarefa.remove();
}

function exibirMensagem(msg) {
    mensagemErro.textContent = msg;
    setTimeout(() => {
        mensagemErro.textContent = '';
    }, 1500);
}

btnAdicionar.addEventListener('click', adicionar);

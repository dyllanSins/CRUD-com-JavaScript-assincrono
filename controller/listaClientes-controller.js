// esse arquivo é pra separar tudo que não tem relação direta com a API.

import { clienteService } from "../service/cliente-service.js";

const criaNovaLinha = (nome, email, id) => { //função pq iremos usar essa base de linha HTML várias vezes
    const linhaNovoCliente = document.createElement('tr');
    const conteudo = `    
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>`

    linhaNovoCliente.innerHTML = conteudo; // pra colocar o conteudo dentro da linha.
    linhaNovoCliente.dataset.id = id; // pra criar um ID pro cliente

    return linhaNovoCliente;
 }
 
 const tabela = document.querySelector('[data-tabela]'); //resgatar o data-atributes pro javaScript saber onde mexer.

tabela.addEventListener('click', (evento) => {
    let botaoDel = evento.target.className === 'botao-simples botao-simples--excluir' // identificação que se FOR o BOTAO DE EXCLUIR, é pra excluir.
    if(botaoDel) {
        const linhaCliente = evento.target.closest('[data-id]')
        let id = linhaCliente.dataset.id
        clienteService.removeCliente(id)
        .then( () => {
            linhaCliente.remove(); //pra deletar diretamente na api
        })
    }
})

 clienteService.listaClientes()
.then( data => {// quando a promesa for resolvida e nao rejeitada, then ( entao ) é pro javaScript mostrar o que está abaixo.
        data.forEach(elemento => { //pra fazer uma varredura de cada cliente dentro do "data".
            tabela.appendChild(criaNovaLinha(elemento.nome,elemento.email, elemento.id)); //pra pegar cada dado referente ao cliente.
        });
});
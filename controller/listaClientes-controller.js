// esse arquivo é pra separar tudo que não tem relação direta com a API.

import { clienteService } from "../service/cliente-service.js";

const criaNovaLinha = (nome, email) => { //função pq iremos usar essa base de linha HTML várias vezes
    const linhaNovoCliente = document.createElement('tr');
    const conteudo = `    
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>`

    linhaNovoCliente.innerHTML = conteudo; // pra colocar o conteudo dentro da linha.
    return linhaNovoCliente;
 }
 
 const tabela = document.querySelector('[data-tabela]'); //resgatar o data-atributes pro javaScript saber onde mexer.

 clienteService.listaClientes()
.then( data => {// quando a promesa for resolvida e nao rejeitada, then ( entao ) é pro javaScript mostrar o que está abaixo.
        data.forEach(elemento => { //pra fazer uma varredura de cada cliente dentro do "data".
            tabela.appendChild(criaNovaLinha(elemento.nome,elemento.email)); //pra pegar cada dado referente ao cliente.
        });
});
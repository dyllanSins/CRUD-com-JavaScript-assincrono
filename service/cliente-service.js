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


const listaClientes = () => {
    const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest(); //XMLHttpRequest serve pra fazer a comunicação com a API.
        http.open('GET', 'http://localhost:3000/profile'); //abrir comunicação entre aplicação e API.
        
        http.onload = () => { //indicar pro javaScript o que vou fazer com a resposta que o server enviou pra mim.
            if(http.status >= 400){
                reject(JSON.parse(http.response));
            }else {
                resolve(JSON.parse(http.response));
            }
        /*const http2 = new XMLHttpRequest();
    http2.open('GET', 'http://localhost:3000/profile/semanaPassada');
    http2.onload = () => {
        ..
        const http3 = new XMLHttpRequest();
        http3.open('GET', 'http://localhost:3000/profile/semanaRetrasada'); // Exercicio de exemplo de uma problematica que pode acontecer, encadiando uma sequencia de operações assincronas. Gerando um CallBack Hell
        http3.onload = () => {
            ..
        }
        http3.send();
    }

    http2.send();*/
    }
    http.send(); // enviar a nossa requisição.
    }); //criando uma promise pra evitar o CallBack Hell referenciado acima.
    return promise;
} 

listaClientes()
.then( data => {// quando a promesa for resolvida e nao rejeitada, then ( entao ) é pro javaScript mostrar o que está abaixo.
        data.forEach(elemento => { //pra fazer uma varredura de cada cliente dentro do "data".
            tabela.appendChild(criaNovaLinha(elemento.nome,elemento.email)); //pra pegar cada dado referente ao cliente.
        });
});
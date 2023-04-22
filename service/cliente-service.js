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



const http = new XMLHttpRequest(); //XMLHttpRequest serve pra fazer a comunicação com a API.

http.open('GET', 'http://localhost:3000/profile'); //abrir comunicação entre aplicação e API.

http.send(); // enviar a nossa requisição.

http.onload = () => { //indicar pro javaScript o que vou fazer com a resposta que o server enviou pra mim.
    const data = JSON.parse(http.response); //coloquei na variavel pra caso algum dia eu precise modificar, eu modifique só em um lugar. "JSON.parse" serve pra transformar o texto que o HTTP manda em objeto JavaScript. 
    data.forEach(elemento => { //pra fazer uma varredura de cada cliente dentro do "data".
        tabela.appendChild(criaNovaLinha(elemento.nome,elemento.email)); //pra pegar cada dado referente ao cliente.
    });

    /*const http2 = new XMLHttpRequest();
    http2.open('GET', 'http://localhost:3000/profile/semanaPassada');
    http2.onload = () => {
        ..
        const http3 = new XMLHttpRequest();
        http3.open('GET', 'http://localhost:3000/profile/semanaRetrasada'); // Exercicio de exemplo de uma problematica que pode acontecer, encadiando uma sequencia de operações assincronas.
        http3.onload = () => {
            ..
        }
        http3.send();
    }

    http2.send();*/
}
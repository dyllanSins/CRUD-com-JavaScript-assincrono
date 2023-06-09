//arquivo pra pedir dados e devolver uma resposta;

const listaClientes = () => {
    //aplicando com Fetch agora... o "fetch" já faz um get e retorna uma promise, reduzindo em muito o código. (Conexão com a API)
    return fetch(`http://localhost:3000/profile`)
    .then( resposta => {
        if(resposta.ok) {
            return resposta.json()
        } 
        throw new Error('Não foi possivel listar os clientes...') // lançar erro caso aconteça
    })

    //Promises e CallBack Hell v
    /*const promise = new Promise((resolve, reject) => {
    const http = new XMLHttpRequest(); //XMLHttpRequest serve pra fazer a comunicação com a API.
    http.open('GET', 'http://localhost:3000/profile'); //abrir comunicação entre aplicação e API.
        
    http.onload = () => { //indicar pro javaScript o que vou fazer com a resposta que o server enviou pra mim.
            if(http.status >= 400){
                reject(JSON.parse(http.response));
            }else {
                resolve(JSON.parse(http.response));
            }
        const http2 = new XMLHttpRequest();
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

    http2.send();
    }
    http.send(); // enviar a nossa requisição.
    }); //criando uma promise pra evitar o CallBack Hell referenciado acima.
    return promise;*/
} 

const criaCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`,{
        method: 'POST', //pra enviar pra api
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({//stringfy é pra transformar em texto
            nome: nome,
            email: email
        })
    })
    .then( resposta => {
        if(resposta.ok) {
            return resposta.body
        }
        throw new Error('Não foi possivel criar um cliente.') //erro.
    })
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`,{
        method: 'DELETE'
    }).then( resposta => {
        if(!resposta.ok) {
            throw new Error('Não foi possivel remover cliente.')
        }
    })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possivel detalhar cliente.')
    })

}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`,{
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        }) 
    })
    .then( resposta => {
        if(resposta.ok) {
            return resposta.json()
        }
        throw new Error("Não foi possivel atualizar o cliente.")
    })
}

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}
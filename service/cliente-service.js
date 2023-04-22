const http = new XMLHttpRequest(); //XMLHttpRequest serve pra fazer a comunicação com a API.

http.open('GET', 'http://localhost:3000/profile'); //abrir comunicação entre aplicação e API.

http.send(); // enviar a nossa requisição.

http.onload = () => { //indicar pro javaScript o que vou fazer com a resposta que o server enviou pra mim.
    const data = http.response //coloquei na variavel pra caso algum dia eu precise modificar, eu modifique só em um lugar.
    console.log(data)
}
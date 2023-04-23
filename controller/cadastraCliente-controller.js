import { clienteService  } from "../service/cliente-service.js"

const formulario = document.querySelector('[data-form]') //para percorrer o DOM da página.

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault() //pra prevenir o evento de formulário sem checar as informações inseridas a seguir.

    const nome = evento.target.querySelector('[data-nome]').value //pra resgatar o valor inserido.
    const email = evento.target.querySelector('[data-email]').value

    clienteService.criaCliente(nome,email)
    .then(() => {
        window.location.href = '../telas/cadastro_concluido.html' //pra enviar pra pagina de cadastro concluido.
    })
})
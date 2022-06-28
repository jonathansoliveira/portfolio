function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(input.validity.valid){
        input.parentElement.classList.remove('dados-invalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
        } else {
        input.parentElement.classList.add('dados-invalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput,input)
    }
}


const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio'
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio',
        typeMismatch: 'O e-mail digitado não é válido'
    } ,
    assunto:  {
        valueMissing: 'O campo assunto não pode estar vazio'
    },
    mensagem:  {
        valueMissing: 'O campo mensagem não pode estar vazio'
    }
}

function mostraMensagemDeErro(tipoDeInput, input){
    let mensagem = '';
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]){
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })
    return mensagem;
}

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})

const textareas = document.querySelectorAll('textarea')
console.log(textareas)
textareas.forEach(textarea => {
    textarea.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'customError'
]
const form = document.getElementById('form')
const usarname = document.getElementById('usarname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordTrue = document.getElementById('passwordTrue')

form.addEventListener('submit', (e) => {
    e.preventDefault()  //prevenir comportamento padrao do navegador
    checkInputs()
})

function checkInputs () {
    
    const usernameValue = usarname.value.trim()  //pegando as variaveis e colocando na funcao
    const emailValue = email.value.trim() //retornando uma lista de valores(values) de email, e tirando os espaços(trim())
    const passwordValue = password.value.trim()
    const passwordTrueValue = passwordTrue.value.trim()

    function errorValidation(input, message) { //criando a funçao de erro com dois parametros
        const formDivs = input.parentElement //pegando o elemento pai do parametro input
        const small = formDivs.querySelector('small') //criando uma variavel que vai receber o small do html
        small.innerText = message //mudando a msg do small para mensagens que vamos atribuir dependendo do tipo do erro
        formDivs.className = 'form-divs error' //adicionando a class error que a gente definiu no css
    }

    function successValidation (input) { //criando a funçao de acerto que como nao precisa corrigir nada a gente so precisa de um parametro
        const formDivs = input.parentElement  //pegando elemento pai
        formDivs.className = 'form-divs success'  //mudando a classe
    }

    if(usernameValue === '') {
        errorValidation(usarname, 'Preencha esse campo') //chamando a funçao de erro e defenindo os parametros
    }else {
        successValidation(usarname) //chamando funçao de success com seu parametro
    }

    if(emailValue === '') {
        errorValidation(email, 'Preencha esse campo') //chamando a funçao de erro e defenindo os parametros
    }else {
        successValidation(email) //chamando funçao de success com seu parametro
    }

    if(passwordValue === '') {
        errorValidation(password, 'Preencha esse campo') //chamando a funçao de erro e defenindo os parametros
    } else if (passwordValue.length < 8) { //limitando numero de carcteres minimos 
        errorValidation(password, 'A senha deve ter 8 carcteres' )
    } else {
        successValidation(password) //chamando funçao de success com seu parametro
    }

    if(passwordTrueValue === '') {
        errorValidation(passwordTrue, 'Preencha esse campo') //chamando a funçao de erro e defenindo os parametros
    } else if (passwordTrueValue != passwordValue) {  //verificando se as senhas sao iguais 
        errorValidation(passwordTrue, 'As senhas devem ser iguais' )
    } else {
        successValidation(passwordTrue) //chamando funçao de success com seu parametro
    }


}
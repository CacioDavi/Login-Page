const emailInput = document.getElementById('iEmail');
const passwordInput = document.getElementById('iPassword');

//Chamado sempre que o usuário digitar no campo, irá checar se o campo está vazio ou não
function IsEmpty(InputElementy) {
    //verificar se está vazio e se o input possui a classe "inputHasText"
    if(InputElementy.classList.contains('inputHasText') && InputElementy.value == ''){
        //remove a classe do elemento
        InputElementy.classList.remove('inputHasText')
    } else if(InputElementy.value !== '' && !InputElementy.classList.contains('inputHasText')) {
        //adiciona a classe no elemento
        InputElementy.classList.add("inputHasText")
    }
}
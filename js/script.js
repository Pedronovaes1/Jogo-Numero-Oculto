
let texto = document.getElementById('texto')
let numero = Math.floor(Math.random() * 100) + 1;

let tentativas = 0

document.getElementById('button').addEventListener('click', function(e){

    e.preventDefault();
    let elemento =parseInt(document.getElementById('adivinhe').value) 
    tentativas++

    if(tentativas <= 5){
        if(elemento === numero){
            texto.innerHTML = `Parábens você acertou o número era ${numero} e a quantidade de tentativas foi ${tentativas}`
            tentativas = 0
            numero = Math.floor(Math.random() * 100) + 1;
        }else if(elemento > numero){
            texto.innerHTML = `O número é menor que ${elemento}`
        }else if(elemento < numero){
            texto.innerHTML = `O número é maior que ${elemento}`
    }
    }else if(tentativas > 5 && elemento !== numero){
        texto.innerHTML = `Você perdeu o número era ${numero}, Tente Novamente!!`
        tentativas = 0
        numero = Math.floor(Math.random() * 100) + 1;
    }

})




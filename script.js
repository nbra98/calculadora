// Seleção DOM do que será necessário 
let corpo = document.querySelector("body")
let valor = document.querySelector("#valor")
let botao = document.querySelectorAll("span")
let botaoAlternarTema = document.querySelector(".botaoAlternarTema")

// Vetor para iniciar operações requisitadas pelo usuário
for (let i = 0; i < botao.length; i++) {
    botao[i].addEventListener("click", function() { // Reconhecendo o 'click' do usuário como início das operações
        if (this.innerHTML == "=") { // Exibir resultado da operação usando a função 'eval()'¹* para autoreconhecer e calcular as operações
            valor.innerHTML = eval(valor.innerHTML)
        } else if (this.innerHTML == "LIMPAR") { // Caso o usuário clique em 'LIMPAR', tudo no display será apagado
            valor.innerHTML = "";
        } else {
            valor.innerHTML += this.innerHTML
        }    
    })
}        

// Botão (.div) para alternar entre o tema claro e escuro 
botaoAlternarTema.onclick = function() {
    corpo.classList.toggle('temaEscuro')
}

// A função Eval avalia a expressão da cadeia de caracteres e retorna seu valor. Exemplo: eval("1 + 1") retorna 2. ¹*

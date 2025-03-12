const btn = document.getElementById("cor-btn");
const cores = ["white", "black", "red", "blue", "green", "purple", "pink", "gray"]
const coresBr = ["branco", "preto", "vermelho", "azul", "verde", "roxo", "rosa", "cinza"]
const fundo = document.getElementsByTagName("body")[0]
const cor = document.getElementById("cor")
function trocarCor(){
    let index = Math.floor(Math.random() * cores.length)
    fundo.style.backgroundColor = cores[index]
    cor.textContent = coresBr[index]
}

btn.addEventListener("click", () => trocarCor())
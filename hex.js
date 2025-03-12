const btn = document.getElementById("cor-btn");
const hexadecimal = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const fundo = document.getElementsByTagName("body")[0]
const cor = document.getElementById("cor")
function trocarCor(){
    let hex = gerarCor()
    fundo.style.backgroundColor = hex;
    cor.textContent = hex
}

function gerarCor(){
    let hex = "#"
    for(let i = 0; i<6; i++){
        let index = Math.floor(Math.random() * hexadecimal.length)
        hex+=hexadecimal[index];
    }
    return hex
}

btn.addEventListener("click", () => trocarCor())
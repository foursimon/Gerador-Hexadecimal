const btns = [...document.getElementsByClassName("btn")]
const hexadecimal = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
function trocarCor(div, cor){
    let hex = gerarCor()
    div.style.backgroundColor = hex;
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

btns.map(btn => {
    let container = btn.parentElement.parentElement;
    let div = container.children[0];
    let cor = btn.parentElement.children[0]
    btn.addEventListener("click", () => trocarCor(div, cor))
})

window.addEventListener("DOMContentLoaded", ()=>{
    const divs = [...document.getElementsByClassName("color-container")]
    divs.map(div => {
        let text = div.nextElementSibling.children[0]
        trocarCor(div, text)
    })
})
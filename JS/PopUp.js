const fechar = document.getElementById("fechar");
const fechar2 = document.getElementById("fechar2")
const popup = document.querySelector("dialog");
const butao = document.getElementById("botao");

butao.onclick = function () {
    popup.showModal()

    setTimeout( function(){
        Carregamento_completo()
    }, 4600)    
}
fechar.onclick = function () {
    popup.close(
        Reset()
    )
}
fechar2.onclick = function () {
    popup.close(
        Reset()
    )
}
document.addEventListener("keydown", event => {
    if(event.key.startsWith("Escape")){
        return Reset()
    }
});
//Loading
function Carregamento_completo(){
    document.querySelector(".tela").classList.remove("carregando")
    document.querySelector(".span").classList.add("pontos")
    document.querySelector(".spano").classList.add("pontos")
    document.querySelector(".spana").classList.add("pontos")
}
function Reset(){
    document.querySelector(".tela").classList.add("carregando")
    document.querySelector(".span").classList.remove("pontos")
    document.querySelector(".spano").classList.remove("pontos")
    document.querySelector(".spana").classList.remove("pontos")
}

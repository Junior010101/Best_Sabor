const hoverdiv = document.getElementById("dropdown")
const hoverdiv2 = document.getElementById("dropdown2")
const hoverdiv3 = document.getElementById("dropdown3")
const hoverdiv4 = document.getElementById("dropdown4")
const hoverdiv5 = document.getElementById("dropdown5")

const popup2 = document.getElementById("popup")
const popup3 = document.getElementById("popup2")
const popup4 = document.getElementById("popup3")
const popup5 = document.getElementById("popup4")
const popup6 = document.getElementById("popup5")

hoverdiv.onmousemove = function() {
    popup2.show()
} 
hoverdiv.onmouseleave = function() {
    popup2.close()
}
hoverdiv2.onmousemove = function() {
    popup3.show()
} 
hoverdiv2.onmouseleave = function() {
    popup3.close()
}
hoverdiv3.onmousemove = function() {
    popup4.show()
} 
hoverdiv3.onmouseleave = function() {
    popup4.close()
}
hoverdiv4.onmousemove = function() {
    popup5.show()
} 
hoverdiv4.onmouseleave = function() {
    popup5.close()
}
hoverdiv5.onmousemove = function() {
    popup6.show()
} 
hoverdiv5.onmouseleave = function() {
    popup6.close()
}
//------------------------
let tatil = 1;
document.getElementById("nobru1").checked = true;
bota = document.getElementById("bubu")
buta = document.getElementById("inversobubu")

bota.onclick = function Proxima_Imagem(){
    tatil++;
    if(tatil>4){
        tatil = 1;
    }
    document.getElementById("nobru"+tatil).checked = true;
}
buta.onclick = function Imagem_Anterior(){
    tatil--;
    document.getElementById("nobru"+tatil).checked = true;
}
//--------------------------------------------
let contador = 1;
document.getElementById("nobro1").checked = true;
check1 = document.getElementById("botao2")
check2 = document.getElementById("voltar2")

check1.onclick = function Proxima2(){
    contador++;
    if(contador>4){
        contador = 1;
    }
    document.getElementById("nobro"+contador).checked = true;
}
check2.onclick = function Anterior2(){
    contador--;
    document.getElementById("nobro"+contador).checked = true;
}
//-------------------------------------------------
let contadora = 1;
document.getElementById("nobra1").checked = true;
check3 = document.getElementById("botao3")
check4 = document.getElementById("voltar3")

check3.onclick = function Proxima3(){
    contadora++;
    if(contadora>4){
        contadora = 1;
    }
    document.getElementById("nobra"+contadora).checked = true;
}
check4.onclick = function Anterior3(){
    contadora--;
    document.getElementById("nobra"+contadora).checked = true;
}
//------------------------------------------------
let contado = 1;
document.getElementById("nobrs1").checked = true;
check5 = document.getElementById("botao4")
check6 = document.getElementById("voltar4")

check5.onclick = function Proxima4(){
    contado++;
    if(contado>4){
        contado = 1;
    }
    document.getElementById("nobrs"+contado).checked = true;
}
check6.onclick = function Anterior4(){
    contado--;
    document.getElementById("nobrs"+contado).checked = true;
}
//------------------------------------------------
let contadore = 1;
document.getElementById("nobrr1").checked = true;
check7 = document.getElementById("botao5")
check8 = document.getElementById("voltar5")

check7.onclick = function Proxima5(){
    contadore++;
    if(contadore>4){
        contadore = 1;
    }
    document.getElementById("nobrr"+contadore).checked = true;
}
check8.onclick = function Anterior5(){
    contadore--;
    document.getElementById("nobrr"+contadore).checked = true;
}

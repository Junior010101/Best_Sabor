let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    Proxima_Imagem()
}, 10000)

function Proxima_Imagem(){
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

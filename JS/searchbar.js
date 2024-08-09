let sugestoes = [
    "Bolos",
    "Pasteis",
    "Coxinhas",
    "Saalgados",
    "Sanduiches"
]
//-----------------//
const SearchWapper = document.querySelector(".search");
const imputbox = document.querySelector("input");
const sugestbox = document.querySelector(".list");
const icon = document.getElementById("butaoico")
let linkTag = SearchWapper.querySelector("a");
let webLink;

imputbox.onkeyup =(e)=>{
    let userData = e.target.value;
    let emptyArray = [];

    if(e.key === "Enter"){
        if(userData){
            window.open('https://www.google.com/search?q='+ userData,"_blank");
        }
    }

    if (userData){
        icon.onclick = function (){
            window.open('https://www.google.com/search?q='+ userData);
    }
    emptyArray = sugestoes.filter((data)=>{
        return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    })
    emptyArray = emptyArray.map((data)=>{
    })
    SearchWapper.classList;add("ativo")
    Showsugentions(emptyArray);
    let allList = sugestbox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
        allList[i].setAttribute("onclick", "select(this)");
    }
  }
}
function Showsugentions(list){
    let listData;
    if(!list.length){
        userValue = imputbox.value;
        listData = "<li>${userData}</li>"
    }else{
        listData = list.join("")
    }
    sugestbox.innerHTML = listData;
}

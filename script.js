var play = document.getElementById("playCode");
var remove = document.getElementById("removeCode");
var textCode = document.getElementById("textCodes");
var resulte = document.getElementById("resulte2");

play.onclick = ()=>{
resulte.innerHTML = textCode.value;
localStorage.setItem("Data" , textCode.value);

};

remove.onclick = ()=>{
resulte.innerHTML = "";
localStorage.removeItem("Data");
};

 onload = ()=>{
    textCode.value =  localStorage.getItem("Data");
    };
 
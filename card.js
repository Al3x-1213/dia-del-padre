const group1 = document.getElementById("group1");
const group2 = document.getElementById("group2");
const group3 = document.getElementById("group3");

group1.addEventListener("click", (e)=>{
    document.querySelector(".card__hidden1").classList.toggle("display");
});

group2.addEventListener("click", (e)=>{
    document.querySelector(".card__hidden2").classList.toggle("display");
});

group3.addEventListener("click", (e)=>{
    document.querySelector(".card__hidden3").classList.toggle("display");
});
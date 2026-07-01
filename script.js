function enviar(){
let nome=document.getElementById("nome").value;
let msg=document.getElementById("msg").value;

if(!nome || !msg){
alert("Preencha todos os campos");
return;
}

window.open(
"https://wa.me/556496078723?text=" +
encodeURIComponent("🙏 Pedido de oração\nNome: "+nome+"\n\n"+msg)
);
}

/* animação scroll */
window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
let top = el.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
el.classList.add("active");
}
});
});

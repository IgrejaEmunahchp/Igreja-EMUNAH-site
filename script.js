function enviar(){
let n=document.getElementById('nome').value;
let m=document.getElementById('msg').value;
if(!n||!m){alert('Preencha tudo');return;}
window.open('https://wa.me/556496078723?text='+encodeURIComponent(n+' - '+m));
}

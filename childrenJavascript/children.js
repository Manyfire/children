
var travel=[
    {rey:'World in hand', reinado:'WORLD ', predecesor:'love Travel', photo:'BLUE'},
    {rey:'I love travel', reinado:'CANADA', predecesor:'Montreal', photo:'RED'},
    {rey:' Visit now', reinado:'MEXICO ', predecesor:'DF.Mexico', photo:'GREEN'},
    {rey:'Read passion', reinado:'READ ', predecesor:'Read books', photo:'PURPLE'},
    {rey:'Study love', reinado:'KNOWLEDGE', predecesor:'Learn it', photo:'YELLOW'},
];

window.onload = inicio ;

function inicio(){
   for(let i=0; i<travel.length;  i++){
    document.querySelector('.container').insertAdjacentHTML('beforeend',
    `<div class="discovery">
       <div id="photo">
        ${travel[i].photo}</div>
       <div class="commentaire">
       <div class="p1"> ${travel[i].rey}</div>
       <div class="p2">${travel[i].reinado}</div>
       <div class="p3">${travel[i].predecesor}</div>
    </div>
    `);
    document.querySelectorAll('.discovery')[i].onclick = selecccionar;
  } 
} 



function selecccionar(){
  let hijos = this.parentNode.children;//para saber cuantos hijos hay
   for(let i=0; i<hijos.length;i++){
    if(this == hijos[i]){
      
      document.querySelector('.repuesta').innerHTML=`Isabelle ${travel[i].rey} and she love ${travel[i].predecesor} and her favorite color is ${travel[i].photo} in ${travel[i].reinado}`
    }
   }
   this.querySelector('#photo').style.backgroundColor='red';
}







//ES PAR JUGAR UN POQUITO pero this no es lo mejor
// function selecccionar(){
//   if(this.style.backgroundColor != 'pink'){
//       this.style.backgroundColor='pink';
// }else {
//   this.style=null
// }
// }
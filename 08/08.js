document.addEventListener('DOMContentLoaded', ()=>{
  const bt1 = document.querySelector('button');
  const img = document.querySelector('.row>img');
  const txt1 = document.querySelector('#txt1');

   //랜덤수
   let n ;
   bt1.addEventListener('click', (e)=>{
    e.preventDefault();
    n = Math.floor(Math.random() * 100) + 1;

    if(n == parseInt(txt1.value)){
      img.setAttribute(`src`, '../img/good.png');

    }
    else if( n > parseInt(txt1.value)){
      img.setAttribute(`src`, '../img/up.png');

    }
    else {
      img.setAttribute(`src`, '../img/down.png')
    }
   });
});

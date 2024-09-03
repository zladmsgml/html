document.addEventListener('DOMContentLoaded', ()=>{
  //이미지를 배열에 넣어 가져오기
 const imgs = document.querySelectorAll('.msg > img');
 
 //버튼을 배열에 넣어 가져오기
 const bts = document.querySelectorAll('button');
 
 const msg3 = document.querySelector('#msg3');

console.log(bts);



//반복문
for (let bt of bts){
  console.log(bt);
  bt.addEventListener('click', ()=>{
    //컴퓨터 랜덤수
    let comN = Math.floor(Math.random()*6)+1; //1~6
    imgs[0].setAttribute('src',`../img/${comN}.png`);
    

    //사용자 선택수
    console.log(bt.textContent.charAt(0));
    let userN =parseInt(bt.textContent.charAt(0));
    imgs[1].setAttribute('src',`../img/${userN}.png`);
    
    //결과출력
    if(comN === userN){
      msg3.textContent ='맞음';
    }
    else
    msg3.textContent ='틀림';
  });
} 
});


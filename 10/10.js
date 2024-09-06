// let arr = [1,2,3,4,5];
// console.log(arr);

// console.log('arr : ', arr)
// console.log('arr 개수 : ', arr.length)

// //배열 요소 접근
// console.log('맨처음 요소 접근 : ', arr[0])
// console.log('두번째 요소 접근 : ', arr[1])

// //배열의 전체 요소에 접근 : 배열의 순회
// console.log('for')
// for(let i = 0; i<arr.length; i++){
//   console.log(`$(i+1)번째 : ${arr[i]}`);
// }

// console.log('for...in')

// for(let i in arr){
//   console.log(`${parseInt(i+1)}번째 : ${arr[i]}`);
// }

// console.log('for...of')

// for(let [i,item] of arr.entries()){  //구조분해할당
//   console.log(`${parseInt(i)+1}번째 : ${item} : ${item % 2 == 0? "짝":"홀"}`);
// }
 
// console.log('forEach')

// arr.forEach((item, i) => {
//   console.log(`${parseInt(i)+1}번째 : ${item} : ${item % 2 == 0? "짝":"홀"}`);
// });


// // arr = []
// // arr.length = 0;
// // console.log('arr : ', arr)

// arr.push(6) //맨 뒤에 6추가
// console.log('arr push : ', arr)
// arr.pop()// 맨 뒤에 삭제
// console.log('arr pop:', arr)

// //맨처음 추가
// arr.unshift(6)
// console.log('arr unshift : ', arr)
// //맨처음 삭제
// arr.shift()
// console.log('arr shift : ', arr)

// //splice로 삭제
// let arr2 = arr.splice(2,1) //index, 갯수
// console.log('arr splice : ', arr)
// console.log('arr splice : ', arr2)

// //splice로 변경
// arr.splice(2,1,'a');
// console.log('arr splice : ', arr)

// //splice로 추가
// arr.splice(2,0,3);
// console.log('arr splice : ', arr)

// arr =[1, 2, 3, 4, 5];
// arr2 = [];
// for(let item of arr){
//   let item2 = item *2;
//  arr2.push(item2);
// }

// //call back 함수의 매개변수가 1개이면 () 생략가능
// //callback함수의 body에 return만 있으면 {}와 return 생략가능
// arr2 = arr.map((item, i )=>{
//   let item2 = item * 2;
//   console.log(i);
// });

// arr2 = arr.map(item=> item *2 );
// console.log('arr map 결과 arr2 : ', arr2);


// arr2 = arr.map(item=> item %2 ==0 ?  '짝' : '홀' );
// console.log('arr map 결과 arr2 : ', arr2);

// arr2 =[];
// for(let item of arr){
//   if(item %2 ==0) arr2.push(item);
// }

// arr2 = arr.filter(item=> item %2 ==0 );
// console.log('arr filter 결과 arr2 : ', arr2);

// arr = [4,5,1,2,1,3]
// console.log(`${arr} => 정렬 ${arr.sort((a,b)=>b-a)}`)

document.addEventListener('DOMContentLoaded',()=>{
  //요소가져오기
  const divNum = document.querySelector('#divNum');
  const divplus = document.querySelector('.divplus');
  const divBonus = document.querySelector('#divBonus');
  const bt = document.querySelector('.sec > button');

  //요소 숨기기
  divNum.style.display ='none';
  divplus.style.display ='none';
  divBonus.style.display ='none'; 

 //버튼 클릭
 bt1.addEventListener('click', (e)=>{
  e.preventDefault();

  let arr =[];
  while(arr.length<7){
   let n = Math.floor(Math.random()*45)+1; //1~45
   if(!arr.includes(n)) arr.push(n);//n이 배열에 포함되어 있지 않다면 배열에 넣는다.
  }
  console.log(arr);
  let arrBonus = arr.splice(6,1);
  arr.sort((a,b)=> a-b);
  console.log(arrBonus);

  arr = arr.map(item => `<span class ='sp${Math.floor(item/10)}'>${item}</span>`);
  arr = arr.join('');
  divNum.innerHTML =arr;
  console(arr);

  arrBonus = arrBonus.map(item => `<span class ='sp${Math.floor(item/10)}'${item}`)



});

});
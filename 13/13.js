let arr = [0,0,0,0,0,0,0,0,1]
let isShuffle = false;
//버튼을 눌렀을 때 true가 되게, 못 섞게
let cnt = 0;
let gameEnded = false; // 게임 종료 여부


document.addEventListener('DOMContentLoaded',()=>{
  const cols = document.querySelectorAll('.col');
  const bt = document.querySelector('button');
  const msg = document.querySelector('#msg');

  bt.addEventListener('click', (e)=>{
    e.preventDefault();

    if (gameEnded) {
      resetGame(); // 게임 초기화
      return;
    }

    if(!isShuffle){
      isShuffle=true;

    arr.sort(() => Math.random() - 0.5);
    console.log(arr)
    bt.innerHTML ='게임 중 ...'
    }

    cols.forEach((col, index) => {
      col.textContent = ''; // 초기 상태 비우기
      col.style.cursor = 'pointer'; // 마우스 포인터를 클릭 가능하게
      col.style.pointerEvents = 'auto';

      // 클릭 이벤트 추가
      col.addEventListener('click', () => {
        if (!col.innerHTML) { // 이미 클릭된 칸이 아닌 경우
          if (arr[index] === 1) {
            col.innerHTML = `<img src='../img/boom.png' alt='폭탄' width=70px height = 70px>`; // 폭탄 이미지
            msg.innerHTML = '실패'
            disableAllClicks();
            
          } else {
            col.innerHTML = `<img src='../img/hart.png' alt='하트' width=70px height = 70px>`; // 하트 이미지
            cnt++;
          } 
          col.style.pointerEvents = 'none'; // 한 번 클릭한 후에는 클릭 불가능하게 설정

          if (cnt === 8) {
            cols.forEach((col) => {
              if (!col.innerHTML) {
                col.innerHTML = `<img src='../img/hart.png' alt='하트' width=70px height=70px'>`; // 마지막 칸 하트로 변경
              }
            });
            msg.setAttribute('style', 'color: blue;'); // 메시지 색상 설정 (성공 시 파란색)
            msg.innerHTML = '성공!!'; // 성공 메시지 설정
            disableAllClicks(); // 모든 칸 클릭 차단
          }
        }
        })

        function disableAllClicks() {
          cols.forEach(col => {
            col.style.pointerEvents = 'none'; // 모든 칸의 클릭 차단
          });
          msg.innerHTML = '게임이 끝났습니다'; // 메시지 표시
          bt.innerHTML = '다시 시작'; // 버튼 텍스트를 "다시 시작"으로 변경
          gameEnded = true; // 게임 종료 상태 설정
        }

        
      });
    });
    function resetGame() {
      arr = [0, 0, 0, 0, 0, 0, 0, 0, 1]; // 배열 초기화
      isShuffle = false; // 셔플 상태 초기화
      gameEnded = false; // 게임 종료 상태 초기화
      msg.innerHTML = ''; // 메시지 초기화
      bt.innerHTML = '폭탄을 찍어 주세요'; // 버튼 텍스트 초기화
  
      // 각 칸의 상태 초기화
      cols.forEach((col) => {
        col.innerHTML = ''; // 칸의 내용을 비움
        col.style.pointerEvents = 'auto'; // 다시 클릭 가능하게 설정
      });
    }
  });
// 하트가 8개되면
// if(cnt == 8){
//   msg.style.color = 'blue';
//   msg.innerHTML ='성공!!'
// }


//오픈 api 데이터 가져오기
const getData = (selDt, ul, gubun) => {
  console.log(gubun);
  const testAPI = '82ca741a2844c5c180a208137bb92bd7';
  let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
  url = `${url}key=${testAPI}&targetDt=${selDt}`;
  if (gubun != 'T') {
    url = `${url}&repNationCd=${gubun}`;
  }

  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
      console.log(dailyBoxOfficeList)

      let tm = dailyBoxOfficeList.map(item =>

        `<li class ='mvli'>
          <span class='rank'>${item.rank}</span>
          <span class='movieNm'>${item.movieNm}</span>
          <span class='openDt'>${item.openDt}</span>
          <span class='rankInten'>${item.rankInten > 0 ? 
            '<span class="spRed">▲</span>' : item.rankInten < 0 ?  
                                '<span class="spBlue">▼</span>'  : '-'}
        ${item.rankInten != 0 ? Math.abs(item.rankInten) : ''}</span>
        </li>`)

      tm = tm.join('')
      ul.innerHTML = tm;
      console.log(tm)
    })
    .catch(err => console.error(err));

}

//어제  날짜 구하기 함수
const getYesterday = () => {
  const yesterday = new Date(); //const이지만 setter로 바꿀 수 있다.
  yesterday.setDate(yesterday.getDate() - 1);
  const year = yesterday.getFullYear();
  let month = yesterday.getMonth() + 1;
  let day = yesterday.getDate();

  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;

  return `${year}-${month}-${day}`;
}

document.addEventListener('DOMContentLoaded', () => {

  const dt = document.querySelector('#dt');
  const ul = document.querySelector('.sec>ul');
  const sell = document.querySelector('#sell');
  //어제  날짜 구하기
  let yesterday = getYesterday();
  console.log('yesterday =', yesterday);

  dt.max = yesterday;
  //date 기본값
  dt.value = yesterday;

   //기본 첫 페이지 보이기
  getData(dt.value.replaceAll('-',''), ul, sel1.value);

  //데이터가져오기
  dt.addEventListener('change', () => {
    getData(dt.value.replaceAll('-', ''), ul, sel1.value);

  });

  sel1.addEventListener('change', ()=>{
    getData(dt.value.replaceAll('-', ''), ul, sel1.value);

  });
});


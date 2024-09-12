//상세정보 가져오기
// const getDetail = (movieCd) => {
//   alert("movieCd :" + movieCd) ;
// }
const testAPI = '82ca741a2844c5c180a208137bb92bd7';
const getDetail = (movieCd) => {
  alert("movieCd :" + movieCd) ;
   
  let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${testAPI}&movieCd=${movieCd}`;
  url =  `${url}&key=${testAPI}&movieCd=${movieCd}`;
  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      let movieInfo = data.movieInfoResult.movieInfo;
      let genreList = movieInfo.genres.map(genre => genre.genreNm).join(', ');  // 장르 정보를 가져옴
      console.log('영화 장르:', genreList);

      // 영화 장르를 화면에 추가적으로 표시하거나 다른 작업 수행 가능

      let footer = document.getElementById('mvinfo');
      footer.innerHTML = `
        <p><strong>개봉일:</strong> ${movieInfo.openDt}</p>
        <p><strong>장르:</strong> ${genreList}</p>
        <p><strong>감독:</strong> ${movieInfo.directors.map(director => director.peopleNm).join(', ')}</p>
        <p><strong>출연:</strong> ${movieInfo.actors.slice(0, 5).map(actor => actor.peopleNm).join(', ')}</p>
      `;
      alert(`
        개봉일: ${movieInfo.openDt}
        장르: ${genreList}
        감독: ${directorList}
        출연: ${actorList}
      `);
    })
    .catch(err => console.error(err));
}



//오픈 api 데이터 가져오기
const getData = (selDt, ul, gubun) => {
  
  console.log('gubun = ' ,gubun);
  
  let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
  url = `${url}key=${testAPI}&targetDt=${selDt}`;
  if (gubun != 'T') {
    url = `${url}&repNationCd=${gubun}`;

  
  }

  console.log(url);

  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
      console.log(dailyBoxOfficeList)

      let tm = dailyBoxOfficeList.map(item =>
        `<a href="#" onClick="getDetail(${item.movieCd})">
          <li class='mvli'>

          <span class='rank'>${item.rank}</span>
          <span class='movieNm'>${item.movieNm}</span>
          <span class='openDt'>${item.openDt}</span>
          <span class='rankInten'>
          ${item.rankInten > 0 ? 
            '<span class="spRed">▲</span>' : item.rankInten < 0 ?  
                                '<span class="spBlue">▼</span>'  : '-'}
        ${item.rankInten != 0 ? Math.abs(item.rankInten) : ''}
        </span>
        </li>
        </a>`)

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

//radio 값 가져오기
const getGubun = () => {
  //radio 요소 가져오기
  // const r1 = document.querySelector('#r1') ;
  // const r2 = document.querySelector('#r2') ;
  // const r3 = document.querySelector('#r3') ;

  // console.log("r1 =", r1.checked) ;
  // console.log("r2 =", r2.checked) ;
  // console.log("r3 =", r3.checked) ;

  // if (r1.checked) return r1.value ;
  // else if (r2.checked) return r2.value ;
  // else if (r3.checked) return r3.value ;

  // radio버튼의 클릭된 것만 가져오기
  const gubun = document.querySelector('input[name=mvGubun]:checked') ;  
  console.log('gubun = ', gubun.value) ;
  return gubun.value ;

}


document.addEventListener('DOMContentLoaded', () => {

  const dt = document.querySelector('#dt');
  const ul = document.querySelector('.sec>ul');
  //const sell = document.querySelector('#sell');
  const radios = document.querySelectorAll('input[name=mvGubun]');
  //radio
  const getGubun = () =>{
    //radio 요소가져오기
    const r1 = document.querySelector('#r1');
    const r2 = document.querySelector('#r2');
    const r3 = document.querySelector('#r3');

    console.log("r1 = ", r1.checked)

    if(r1.checked) return r1.value;
    else if (r2.checked) return r2.value;
    else if (r3.checked) return r3.value;

  }
  
  //어제  날짜 구하기
  let yesterday = getYesterday();
  console.log('yesterday =', yesterday);

  dt.max = yesterday;
  //date 기본값
  dt.value = yesterday;

   //기본 첫 페이지 보이기
  
  //데이터가져오기
  dt.addEventListener('change', () => {
    getData(dt.value.replaceAll('-', ''), ul, getGubun());

  });

  

 

  for(let radio of radios){
    radio.addEventListener('click', ()=>{
      if(radio.checked) getData(dt.value.replaceAll('-',''),ul,radio.value);
    })
  }
});


# My Movie app

## Problems to fix

- [] GenreList discover api request :
  --> fetch the posters when clicking on a button :
  I get the genre id when clicking on the genre button -> but I don't know how to link this Id results to another api request name discover to get the poster_path data related to the genre id:
  should I try with discoverTv with_genres / discoverMovie with_genres ?
- [] DetailLayout -> optimizing the code create a CSS file? import CSS file in REACT
- [] Get suggestion Movie -> api request -> Search
  I don't know how to link search Id results to suggestion api request get the poster_path data related to the movie search :
  need to get search result first movie id and use this id movie id for the suggestion api request
- [] Toggle input bar searchVisible/invisible + get the data from the form : useForm getValue useController ?
- [] update the search button 반응형
- [] find a solution to open a window Link to Detail when clicking on a image :
  GlobalWindowOpener? -REACT DOM hook(useLocation, useHistory,)
- [] search result Link : if movie type ='movie' if serie type='tv';
- [] scrolltop ? ScrollTop

-- [] 장르 목록 발견 API 요청 :
--> 버튼을 클릭 할 때 포스터를 가져옵니다:
장르 버튼을 클릭 할 때 장르 ID를 얻었지만->이 Id 결과를 다른 API 요청 이름 발견에 연결하여 장르 ID와 관련된 포스터 경로 데이터를 가져 오는 방법을 모릅니다:
discoverTv with_genres / discoverMovie with_genres로 시도해야 하나요?

- [] DetailLayout -> 코드 최적화 CSS 파일 생성? REACT에서 CSS 파일 가져오기
- [] 추천 영화 가져오기 -> API 요청 -> 검색
  영화 검색과 관련된 포스터\_경로 데이터를 가져 오기 위해 검색 ID 결과를 추천 api 요청에 연결하는 방법을 모릅니다:
  검색 결과 첫 번째 영화 ID를 가져와서 이 ID 영화 ID를 추천 API 요청에 사용해야 합니다.
- [] 입력창 검색 표시/비표시 토글 + 폼에서 데이터 가져오기
- [] 검색 버튼 반응형 업데이트
- [] 이미지를 클릭할 때 상세 정보로 연결되는 창을 여는 솔루션 찾기 :
  GlobalWindowOpener? -REACT DOM 훅(useLocation, useHistory,)
- [] 검색 결과 링크 : 만약 영화 유형 ='영화';만약 시리즈 유형 ='TV';만약 시리즈 유형 ='TV';

## installation

- [x] styled-components **\_\_** npm install styled-components
- [x] react-router-dom **\_\_** npm i react-router-dom
- [x] styled-reset **\_\_** npm i styled-reset
- [x] Title react helmet \_\_\_\_ npm i react-helmet-async
- [x] react-hook-form **\_\_** npm install react-hook-form
- [x] fort-awesome **\_\_**npm i --save @fortawesome/fontawesome-svg-core
      |\_**\_npm i --save @fortawesome/free-solid-svg-icons
      | npm i --save @fortawesome/free-regular-svg-icons
      | npm i --save @fortawesome/free-brands-svg-icons
      |\_\_** npm i --save @fortawesome/react-fontawesome@latest
- [x] fetch \_\_\_\_ npm install node-fetch@2
- [x] swiper \_\_\_\_ npm install swiper
- [x] chip npm i @nextui-org/react framer-motion
- [x] npm install -D tailwindcss
- [x] react-spinner \_\_npm i react-spinners (https://www.davidhu.io/react-spinners/)
- [x] npm install --save @emotion/react

## to do

- [x] ROUTER set up
- [x] Components files set up
- [x] api set up
- [x] GlobalStyled set up
- [x] Loading
- [x] Header UI set up
- [x] GNB set up
- [] LNB set up
- [x] Footer UI set
- [x] HOME UI set up
- [] MOVIE UI set up \*\*
- [] SERIES set up \*\*
- [x] Detail UI set up
- [x] search UI set up
- [x] header scroll event
- [x] scrollTop
- [x] helmet <HelmetProvider>
- [x] 404

## in detail

- [x] npm install
- [x] sitemap
- [x] create files / folders
  - [x] change App.js --> Router.js
    - [x] Router.js (LINK)
    - [x] create routes.js
    - [x] create api.js
- [x] CSS
- [x] create GlobalStyled
- [x] import GlobalStyled to Index.js
- [x] add ROBOTO font to public / index.html file
- [x] create Layout.js component
- [x] create useScrollTop components import and add useScrollTop to Detail.js

- [x] URL
- [x] create routes.js a const with a list of object with the main pages URL base
- [x] import routes to Router.js, call the object to / Route / path={routes.home}...s
- [x] helmet create PageTitle.js component
- [x] import PageTitle to Home.js
- [x] create constants.js IMG_URL (the base URL to get img from CSS/background:url();)

- [x] api.js :
- [x] import node fetch : const fetch = require('node-fetch');
- [x] baseUrl const
- [x]x url const
- [x] const options to create an object list for the GET method (token-access) <br>
      method: 'GET',<br>
      headers: {<br>
      accept: 'application/json',<br>
      Authorization: 'access token key check on TMDB' <br>
      }

- [] Header.js
- [x] jsx
- [x] css
- [x] function
- [x] add scroll event
- [x] import Header to Router

- [x]Footer.js
- [x] jsx
- [x] css
- [x] import Footer to Router

- [x] Home UI
- [x] jsx
- [x] css
- [x]function

  - [x] api.js / nowPlaying const for TMDB api request to get nowplaying movie's category data = using fetch .then
        fetch(url("movie/now_playing"), options).then((res) => res.json())
  - [x] api request setting Home.js:
    - [x] useState : [nowPlayingData, setNowPlayingData]
    - [x] useEffect : async - try -> const { results : nowResults } = await nowPlaying(); setNowPlayingData(nowResults)

- [x] MainBanner
- [x] import IGM_URL
- [x] jsx :
  - get data ({data})
  - data.backdrop_path (banner)
  - data.overview(text description) + limit the text --.slice(0,100) +"..."
- [x] css
- [x] import MainBanner.js to Home : + return - <MainBanner data={nowPlayingData[0]} />

- [x] ShowMovies / TopTenShow
- [x] import IMG_URL + { Link } from "react-router-dom"
- [x]api.js / popular / topRated /upComing const for TMDB api request to get those movie's category data
- [x] html body
- [x] css
- [x] import { Swiper, SwiperSlide } from "swiper/react"; + import 'swiper/css';
- [x] create const params to settle the swiper effect
- [x] css change for screen size change @media screen and (max-widht --)
- [x] jsx
- [x] import ShowMovie.js to Home

- [x] Details Ui
- [x] jsx
- [x] css
- [x] function
- [x] api.js / movieDetail / serieDetail const for TMDB api request to get those movie/serie's category data

- [x] Search Ui
- [x] jsx
- [x] css
- [x] function
- [x] api.js / search const for TMDB api request to get those movie's category data

- [] Movie
- [x] jsx
- [x] css
- []function :
  -[] component GenreList
  -[] fetch the posters when clicking on a button

- [] Serie
- [x] jsx
- [x] css
- []function :
  -[] component GenreList
  -[] fetch the posters when clicking on a button

-[x] PageNotFound : -[x]jsx -[x]css

-[] Mobile version @mediaquery :
-[] Header
-[] GNB
-[] Footer
-[] Search
-[] GenreList
-[] MainLayout -[x] Detail -[x] 404 NotFoundPage

-[] optimize code
-[] api

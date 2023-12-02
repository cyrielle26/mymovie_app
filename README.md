# My Movie app

## installation
- [x] styled-components ______  npm install styled-components
- [x] react-router-dom ______ npm i react-router-dom
- [x] styled-reset ______ npm i styled-reset
- [x] Title react helmet ____ npm i react-helmet-async 
- [x] react-hook-form ______ npm install react-hook-form
- [x] fort-awesome ______npm i --save @fortawesome/fontawesome-svg-core
		  |____npm i --save @fortawesome/free-solid-svg-icons
		  |    npm i --save @fortawesome/free-regular-svg-icons
		  |    npm i --save @fortawesome/free-brands-svg-icons
	  	  |____ npm i --save @fortawesome/react-fontawesome@latest
- [x] fetch ____ npm install node-fetch@2 
- [x] swiper ____ npm install swiper
- [x] chip npm i @nextui-org/react framer-motion
- [x] npm install -D tailwindcss
- [] react-spinner __npm i react-spinners (https://www.davidhu.io/react-spinners/)
- [] npm install --save @emotion/react

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
- [] MOVIE UI set up
- [] SERIES set up
- [] Detail UI set up
- [] search UI set up
- [] header scroll event
- [] scrollTop
- [x] helmet <HelmetProvider>
- [] 404


## in detail

- [x] npm install
- [x] sitemap 
- [x] create files / folders
    - [x] change App.js --> Router.js
        - [x] Router.js (LINK)
        - [x] create routes.js 
        - [] create api.js
- [] CSS
 - [x] create GlobalStyled     
 - [X] import GlobalStyled to Index.js
 - [x] add ROBOTO font to public / index.html file
 - [x] create Layout.js component
 - [] create useScrollTop components import and add useScrollTop to  Detail.js
- [] URL 
 - [x] create routes.js a const with a list of object with the main pages URL base
 - [x] import routes to Router.js, call the object to / Route / path={routes.home}...s
 - [x] helmet create PageTitle.js component
 - [] import PageTitle to Home.js
 - [x] create constants.js  IMG_URL (the base URL to get img from CSS/background:url();)
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
   - [] add scroll event 
   - [x] import Header to Router

   - [x]Footer.js
   - [x] jsx
   - [x] css
   - [x] import Footer to Router

- [] Home UI
    - [x] jsx
    - [x] css
    - [x]function
    - [x] api.js / nowPlaying const for TMDB api request to get nowplaying movie's category data = using fetch .then
      fetch(url("movie/now_playing"), options).then((res) => res.json())
    - [x] api request setting Home.js:
        - [x] useState : [nowPlayingData, setNowPlayingData]
        - [x] useEffect : async - try ->  const { results : nowResults } = await nowPlaying();   setNowPlayingData(nowResults)
    - [x] MainBanner
        - import IGM_URL
        - [x] html body
        - [x] jsx :
            - get data ({data})
            - data.backdrop_path (banner) 
            -  data.overview(text description) + limit the text --.slice(0,100) +"..."
        - [x] css
          - [] css change for screen size change @media screen and (max-widht --)
        - [x] import MainBanner.js to Home : + return - <MainBanner data={nowPlayingData[0]} />
    - [x] ShowMovies
        - [x] import IMG_URL +  { Link } from "react-router-dom"
        - [x]api.js /  popular / topRated /upComing const for TMDB api request to get those movie's category data
        - [x] html body
        - [x] css
         - [x] import { Swiper, SwiperSlide } from "swiper/react"; + import 'swiper/css';
         - [x] create const params to settle the swiper effect
         - [] css change for screen size change @media screen and (max-widht --)
        - [x] jsx
        - [x] import ShowMovie.js to Home
   
- [] Details Ui
     - [] jsx
     - [] css
     - [] function
     - [] api.js / movieDetail const for TMDB api request to get those movie's category data
- [] Search Ui
 - [] jsx
     - [] css
     - [] function
     - [] api.js / search const for TMDB api request to get those movie's category data
- [] Movie 
- [] jsx
- [] css
- []function :
    -[] component GenreList
- [] Serie
  - [] jsx
  - [] css
  - []function :
    -[] component GenreList
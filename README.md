## Apollo

웹에 관해서, 그 중에서도 Apollo에 대해서 공부하고 강의들을 수강한뒤, 최종 실습 파트 부분에서 만든 코드입니다.

https://kimsmartblog.tistory.com/

블로그 Web 파트 - GraphQL에 기능별로 정리되어있습니다.


## 강의 제목 및 출처
https://nomadcoders.co/react-graphql-for-beginners

Web front, backend Full stack Nomad 선생님


## 목차
![image](https://user-images.githubusercontent.com/44837403/114277045-6e211100-9a64-11eb-8d2c-4a95f3e1467d.png)


## 진행 기간
2020-08-06 ~ 2020-08-11


## 프로그램 기능

#### Apollo 사용을 위한 환경 setting 하기

npx create-react-app apollo-2019

cd apollo-2020
yarn start
깃설정하기

Movie app built with Apollo, Graphql, React

styled componenets, react-router-dom, react apollo를 사용할 것임.

styled components: For Css react-router-dom : For router,
 apollo-boost, @apollo/react-hooks : For hooks >> @apollo/client graphql


Apollo
graphql api를 사용하기 가장 좋은 방식. query를보내거나 mutation을 보냄.
restapi: json으로 보냄.

mv apollo-2019 apollo-2020 :  이름업데이트 하기

yarn add styled-components react-router-dom apollo-boost @apollo/react-hooks

#### GraphQL 서버와 연동하기

![image](https://user-images.githubusercontent.com/44837403/114277343-c0166680-9a65-11eb-85ff-8cf5fb5be540.png)

아폴로 에서 Client를 생성해주고 GraphQL과 연결해준다. url은 한번만 입력해주면 된다.
https://www.apollographql.com/docs/react/get-started/
아폴로 사용법

#### Get Movie Query를 작성하고 fetch, post 대신에 Graphql 서버에서 데이터를 받아와서 사용하기
![image](https://user-images.githubusercontent.com/44837403/114277356-cd335580-9a65-11eb-9da0-0c0d3fb4168c.png)

fetch나 post를 일일히 하지 않고서도 graphql 서버에서 데이터를 받아와서 사용을 하였다. 이게바로 apollo의 장점이라고 할 수 있다.
원하는 query형식 역시 지정해서 사용을 하였다. 또한 loading상태와 error 및 데이터 역시 useQuery를 사용함으로써 얻을 수 있다.

#### 영화 포스터를 클릭하면 상세 정보로 이동해주는 Route 기능 만들어주기

react-router-dom 의 HashRouter를 사용해서 Route 기능을 구현해주었다.

#### 서버로부터 받아온 데이터 각각의 id를 이용해서 Route 로 각각 Linke에 전송하는데 사용하기

 Home.js에서는 useQuery를 이용해서 apollo가 서버로부터 전해주는 데이터와 loading의 상태를 받는다.
이를 이용해 기능을 구성하였고 reat-router-dom의 Link 기능을 사용하기 위해서 들어오는 데이터의 movies 각각의 object에 id를 부여하였다. 이때 key는 필수. 링크를 부여하기위해서 Movie.js라는 파일을 만들었고 여기서 Link를 import하고 Link to를 이용해서 id에 링크를 부여하였다.
 Detail.js에서는 지정되는 id에 해당하는 Movie정보를 얻어오는 것을 고려하였다. 그에 따라 query도 id를 인자로 부여하였고 (이때 이 id는 필수값으로 !가 있다.) id는 apollo의 useParams를 사용하였다. 또, id를 인자로 주기위해서 useQuery의 varables도 지정하였다,
 주의할점은, id를 varable로 줄때 int형으로 변환해주어야 한다는 점이다. Int형으로 query를 지정하였기 때문이다.
 
 #### styled-components를 사용해서 각 component에 css 요소 넣어주기
 
 styled-components 를 import해서 css를 효과적으로 사용할 수 있도록 하였다. react의 component 구성요소에 css를 부여하였고 각 component에 맞는 data역시 graphql 서버에서 받아와서 배정하였다. 이때 graphql의 docs를 확인해보고 query에 맞는 데이터들을 불렀는지 유의할 필요가 있다. 


 ## 결과 
![image](https://user-images.githubusercontent.com/44837403/114277831-dc1b0780-9a67-11eb-8c19-ff34a498a831.png)
![image](https://user-images.githubusercontent.com/44837403/114277837-e0472500-9a67-11eb-9843-544c7085521f.png)
![image](https://user-images.githubusercontent.com/44837403/114277844-e4734280-9a67-11eb-9866-bde5851bb8c2.png)


## 느낀점

 코로나가 터진 상황이였고 팀프로젝트를 진행하기에는 제 역량도, 직접 만날 기회도 부족한 상황이였습니다.
그래서 저 자신의 역량을 쌓고자 방학동안 하루 평균 7~8시간을 투자하면서 Web에 대한 공부를 진행하였습니다.

이번 방학동안 힘들긴 했지만 그래도 꾸준하게 공부를 진행했고 어느정도 웹을 구현하는데 있어서 자바스크립트가 어떤식으로
이용이 될 수 있는지, 서버로부터 데이터는 어떻게 받아와서 어떤식으로 웹화면에 적용될 수 있는지에 대해서 배웠습니다.






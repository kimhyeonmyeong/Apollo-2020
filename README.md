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


## 프로그램 구성

#### Apollo 사용을 위한 환경 setting

- Apollo
graphql api를 사용하기 가장 좋은 방식입니다. query를보내거나 mutation을 보냅니다.
restapi: json으로 보냅니다.


npx create-react-app apollo-2019

cd apollo-2020
yarn start
깃설정하기

Movie app built with Apollo, Graphql, React

styled componenets, react-router-dom, react apollo를 사용할 것임.

styled components: For Css react-router-dom : For router,
 apollo-boost, @apollo/react-hooks : For hooks >> @apollo/client graphql


mv apollo-2019 apollo-2020 :  이름업데이트 하기

yarn add styled-components react-router-dom apollo-boost @apollo/react-hooks

#### GraphQL 서버와 연동

아폴로 에서 Client를 생성해주고 GraphQL과 연결해준다. url은 한번만 입력해주면 된다.


#### Get Movie Query를 작성하고 fetch, post 대신에 Graphql 서버에서 데이터를 받아와서 사용

fetch나 post를 일일히 하지 않고서도 graphql 서버에서 데이터를 받아와서 사용 (apollo의 장점)

원하는 query형식 역시 지정해서 사용, useQuery로 loading상태와 error 및 데이터 이용

#### 영화 포스터를 클릭하면 상세 정보로 이동해주는 Route 기능

react-router-dom 의 HashRouter를 사용한 Route 기능

#### 서버로부터 받아온 데이터 각각의 id를 이용해서 Route 로 각각 Linke에 전송하는데 사용

 Apollo useQuery를 통해 서버로부터 데이터와 loading 상태 확인 기능

react-router-dom 의 Link로 각 영화의 Detail 정보 확인 기능

 #### styled-components를 사용해서 각 component에 css 요소 적용

styled-components 를 import해서 css를 효과적으로 사용


## 프로그램 동작 
![image](https://user-images.githubusercontent.com/44837403/114277831-dc1b0780-9a67-11eb-8c19-ff34a498a831.png)
![image](https://user-images.githubusercontent.com/44837403/114277837-e0472500-9a67-11eb-9843-544c7085521f.png)
![image](https://user-images.githubusercontent.com/44837403/114277844-e4734280-9a67-11eb-9866-bde5851bb8c2.png)


## 느낀점

 코로나가 터진 상황이였고 팀프로젝트를 진행하기에는 제 역량도, 직접 만날 기회도 부족한 상황이였습니다.
그래서 저 자신의 역량을 쌓고자 방학동안 하루 평균 7~8시간을 투자하면서 Web에 대한 공부를 진행하였습니다.

이번 방학동안 힘들긴 했지만 그래도 꾸준하게 공부를 진행했고 어느정도 웹을 구현하는데 있어서 자바스크립트가 어떤식으로
이용이 될 수 있는지, 서버로부터 데이터는 어떻게 받아와서 어떤식으로 웹화면에 적용될 수 있는지에 대해서 배웠습니다.






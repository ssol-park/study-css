# HTML / CSS 구조잡기 

## 01
    1. h tag
  
      a. h1 tag 쓰임 : logo, 혹은 제일 중요한 정보들, 페이지당 딱 한번만 사용가능하다.

      b. h1 ~ h6 까지 있으며, 순서를 바꿔서 사용하면 안된다.
 
         <h3></h3>                   
         <h2></h2> ==> (x)          

         <h2></h2>
         <h3></h3> ==> (o)


      c. div 등 으로 섹션이 구분되어 있으면 중복 사용 가능

         <div>
           <h2></h2>
           <h3></h3>
         </div>

         <div>
           <h2></h2>
           <h3></h3>
         </div>
      

## 02
  1. ☆★ 레이아웃 잡을때 행을 기준으로 생각, 그담 열 ☆★
 
  2. gnb : global navigation bar
 
  3. block 엘리먼트 : 수직(위에서 아래로 쌓이는) / inline 엘리먼트 : span(수평)
        - block 엘리 default 값 - width 100%
        - span : 레이아웃에서는 잘 안씀 -> 제어가 잘 안됨(css 잘 안먹힘)
   
  4. font-family : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;    --> 외부 폰트 사용할거 아니면 이게 제일 나음
  
  5. flex는 항상 부모 컨테이너에서 제어.
    
    - 자식 엘리먼트 가운데, 중앙 정렬 공식
      display: flex;
      justify-content: center;
      align-items: center;
      
  6. position 
    
    - 1.absolute : 부모 혹은 부모의 부모 컨테이너에 반드시 position: relative 설정을 해줘야한다. 부모의 원점을 기준으로 움직임
    - 2.relative : 자신이 위치한 위치를 기준으로 움직임
  
  
  
  -시멘틱 태그 : https://www.w3schools.com/html/html5_semantic_elements.asp
  
  -reset.css : https://meyerweb.com/eric/tools/css/reset/ --> css 파일들 중 최상단에 위치시켜야 한다. 
  
## 03
```
   1. 가상선택자(:) --> ex. div:hover  
    - div:nth-child()를 사용하는 것 보다, 자식 엘리에 class or id 값을 지정하는게 더 좋다.
    
   2. > : 첫번째 자식(바로아래)에게만 적용, > 없으면 모든 자식에게 적용
    - section > .content --> section의 첫번째 자식 .content 에게만 적용
    - section .content --> section의 모든 자식 .content에 적용
    
   3. div.container 두 개의 자식 div ( div-left, div-right ). div-right의 width:200px 을 주고 row 정렬 하기
    - .container{ display: flex; }
    - .container > .div-left{ flex:1 }
    - .container > .div-right{ width: 200px; }
```   

page ruler redux -> 크롬 확장프로그램 (줄자)

# 익명의 멘탈케어
<p align="center"><img width="500"  alt="스크린샷 2021-12-09 오후 2 32 42" src="https://user-images.githubusercontent.com/90129613/145664148-ff6951db-040e-4b32-9a59-1e4a10b36c12.png">
 </p>

</br>

## 🤷 프로젝트 소개 
 <p> 익명 고민 상담 플랫폼 입니다. </p>
 <p> 랜덤의 게시글이 나와 익명으로 소통을 할 수 있습니다.</p>
 <p> 댓글을 작성하지 않은 페이지는 이후엔 볼 수 없으니 주의해주세요!  </p>
  
  Web Site : 도메인 이후 작성예정
</br>


## 🎥 시연 영상
 유투브 편집자 구합니다.

## 🧑🏼‍💻 개발기간 및 팀원소개
### 기간: 2021.12.06 ~ 2021.12.11 (5일)  
</br>

### Front-end   
   <p><a href="https://github.com/eundol0519" target="_blank"><img width="150"  src="https://img.shields.io/static/v1?label=React&message=오은희&color=61dafb&style=for-the-badge&>"/></a></p>
   <p><a href="https://github.com/WooMinGy" target="_blank"><img width="150"  src="https://img.shields.io/static/v1?label=React&message=우민기&color=61dafb&style=for-the-badge&>"/></a></p>
   
  
### Back-end
<p><a href="https://github.com/jybin96" target="_blank"><img width="150"  src="https://img.shields.io/static/v1?label=Spring&message=정영빈&color=08CE5D&style=for-the-badge&>"/></a></p>
   <p><a href="https://github.com/Zabee52" target="_blank"><img width="150"  src="https://img.shields.io/static/v1?label=Spring&message=김용빈&color=08CE5D&style=for-the-badge&>"/></a></p>
   <p><a href="https://github.com/HundredCleanWater" target="_blank"><img width="150"  src="https://img.shields.io/static/v1?label=Spring&message=백정수&color=08CE5D&style=for-the-badge&>"/></a></p>
   

  
</br>



## 🏷 API Table
<details>
 <summary>자세히 보기</summary>
 
  ![image](https://user-images.githubusercontent.com/90129613/145416387-0d1c54aa-7110-4f2b-b1a4-0dbb90b07e62.png)
 
<!-- |기능|Method|URL|Request|Response|
|:-----:|:----:|----|----|----|
|로그인 요청|POST|/user/login|{username: "iamuser",</br>password: "1234"}| |
|회원</br>가입|POST|/api/signup|{username:"iamuser"</br>,"password:"1234"</br>,passwordCheck:"1234"}||
|아이디 중복 검사|POST|/api/idCheck|{username:"iamuser"}|{result:false}|
|로그인 여부</br>확인|GET|/api/islogin||{userInfo:{username:"username"}</br>}|
|로그아웃|GET|/api/logout|||
|사진</br>업로드|POST|/api/images||{imageUrl:"/images/cancle.png"}|
|게시글 작성|POST|/api/posts|{title:"제목입니다",</br>content:"반가워요",</br>imageUrl:"/images/cancle.png"}||
|게시글 수정|PUT|/api/posts/{postId}|{content:"반갑습니다"}||
|게시글 삭제|DELETE||||
|랜덤</br>게시글 조회|GET|/api/posts||{postId:1,</br>title:"제목",</br>content:"글내용",</br>comments:[{</br>commentId:1,</br>comment:"댓글내용",</br>createdAt:LocalDateTime}]</br>}|
|내가</br>작성한 게시글 조회|GET|/api/comments/{postId}||{postId:1,</br>title:"제목",</br>content:"글내용",</br>comments:[{</br>commentId:1,</br>comment:"댓글내용",</br>createdAt:LocalDateTime},</br>{commentId:2,</br>comment:"댓글내용2",</br>createdAt:LocalDateTime}]</br>}|
|내가</br> 댓글을 작성한 게시글 조회|GET|/api/comments/{commentId}||{postId:1,</br>title:"제목",</br>content:"글내용",</br>comments:[{</br>commentId:1,</br>comment:"댓글내용",</br>createdAt:LocalDateTime},</br>{commentId:2,</br>comment:"댓글내용2",</br>createdAt:LocalDateTime}]</br>}|
|댓글</br> 작성|POST|/api/comments/{postId}|{comment:"댓글"}||
|피드</br>페이지|GET|/api/feeds||[myPosts:[{</br>postId:1</br>title:"제목",</br>content:"내용",},</br>{postId:2,</br>title:"제목2",</br>content"내용2"}],</br>myComments:[{</br>commentId:1,</br>comment:"댓글",</br>createdAt:LocalDateTime},</br>{commentId:2,</br>comment:"댓글2",</br>createdAt:LocaldateTime}]</br>]| -->

</details>



</br>


## 🔨사용한 기술 스택
<img width="866" alt="스크린샷 2021-12-09 오후 2 32 42" src="https://user-images.githubusercontent.com/90129613/145340150-0241eb6f-4f6f-4688-9083-11e60ef709c0.png">





<code> Front-end </code>
 * React 
 * JavaScript
 * CSS
 * Axios

<code> Back-end </code>
* [Back-end 개발Page](https://github.com/HanghaeAnonymous/Team-11-Back)


<code>Tool</code>
* Git
* GitHub

## ⚒️ 11조 와이어 프레임
 <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcX8PiK%2FbtrnyHwC5aj%2F5h3z7CSSEVEKcdW2FnH7u0%2Fimg.png" width="600" height="500"/>

## ✌🏻 개인 역할 및 트러블슈팅 해결과정

<code>오은희</code> 로그인(모달 창으로 구현), 로그아웃, 댓글 작성, 게시글 및 댓글 불러오기(상세 페이지 및 피드 페이지), 뷰 구현, 스크롤바 숨김 기능,  css디자인

<code>우민기</code> 회원가입(모달 창으로 구현), 게시글 작성, 수정, 삭제, 이미지 업로드, css디자인

<code>Trouble Shooting</code>[트러블 슈팅 해결과정](https://chrome-armadillo-b80.notion.site/ac9cfa6f72eb401692f490c3c1420c30)

</br>





## 📝 후기 및 팀 노션 페이지

<code>오은희</code> 

<code>우민기</code> 

<code>팀 노션 페이지</code> [익명의 멘탈케어](https://chrome-armadillo-b80.notion.site/c96fcf057d404cb98d18c01cb404aaa7)

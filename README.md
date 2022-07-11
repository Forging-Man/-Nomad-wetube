라우터 구분 설계

- 글로벌 라우터 </br>
  / -> Home </br>
  /join -> 회원가입 </br>
  /login -> 로그인 </br>
  /search -> 검색 </br>

- 유저 라우터 </br>
  /users/:id -> 내 유저 정보 보기 </br>
  /users/logout -> 유저 로그아웃 </br>
  /users/edit -> 내 정보 편집
  /users/delte -> 내 유저 정보 삭제 </br>

- 비디오 라우터 </br>
  /videos/:id -> 비디오 시청 </br>
  /videos/:id/edit -> 비디오 편집 </br>
  /videos/:id/delete -> 비디오 삭제 </br>
  /videos/upload -> 업로드 비디오 </br>

- 코멘트 라우터 </br>
  /videos/comments -> 비디오 코멘트 </br>
  /videos/comments/delte -> 비디오 코멘트 편집 </br>

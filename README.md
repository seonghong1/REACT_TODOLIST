# 🕑TODO LIST🕣

# 사용기술
- useContext
- useEffect
- useState

# 간단한 설명
#### 현재 진행중, 완료, 모두보기 필터가 적용된 TODO LIST입니다.
#### 추가 :
##### input창에 할일을 입력후 submit시 매개변수로 받은 함수에 인자로 입력한 텍스트 값이 전달된다.
##### 전달된 텍스트 값은 스프레드 연산자를 사용해서 값(todolist)이 추가되는 형식으로 구현하였다.

#### 완료 : ##### todolist에 값이 추가될때 기본 status값은 "active"이다. 체크박스를 클릭시 값은 "completed"로 변경된다.

#### 삭제 : 
##### 삭제버튼을 클릭시 매개변수로 받은 onDelect함수에 클릭한 아이템이 매개변수로 담아 전달된다. 
##### 기존의 todolist 배열에 filter함수를 적용시켜 기존의todolist의 id != 내가 클릭한 아이디의 값 형태로 setTodos를 실행시켜
##### 내가 누르지 않은 id의 값으로만 배열을 다시 만들어 todolist의 값을 갱신시키는 방법으로 구현하였다.

#### 필터 : 
##### 처음 화면이 렌더링 될때 필터(useState로 정의)의 값은 "all"이다, "active", "completed" 버튼을 클릭시 필터의 값은 해당
##### 텍스트 값으로 변경이 된다. 화면에 노출되는 todolist들은 조건문을 사용해 return이 된다.
##### all인 경우에는 모든 todolist를,  필터의 값이 all이 아닌 경우에는 todos.filter((todo)=>todo.status === filter) 
##### status를 이용해 필터의 값 === todolist의 status의 값 형태로 일치하는 리스트들만 노출되게끔 구현하였다.

##### 또한 todolist의 값이 변경될때마다 useEffect를 사용해 todo의 값을 localStorage.setItem을 이용해 문자열형식으로 저장한뒤 (stringify)
##### 다시 localStorage.getItem로 todolist의 값을 객체형태로 불러와준뒤(parse) return해주어 새로고침을 하여도 값이 유지되게끔 구현하였습니다.

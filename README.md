# ๐TODO LIST๐ฃ

# ์ฌ์ฉ๊ธฐ์ 
- useContext
- useEffect
- useState

# ๊ฐ๋จํ ์ค๋ช
#### TODO LIST์๋๋ค. ์ค๋ ํ๋ฃจ ํด์ผ๋  ์ผ์ ๊ธฐ๋กํด๋ณด์ธ์ โ
#### โ์ถ๊ฐโ :
##### input์ฐฝ์ ํ ์ผ์ ์๋ ฅํ submit์ ๋งค๊ฐ๋ณ์๋ก ๋ฐ์ ํจ์์ ์ธ์๋ก ์๋ ฅํ ํ์คํธ ๊ฐ์ด ์ ๋ฌ๋๋ค.
##### ์ ๋ฌ๋ ํ์คํธ ๊ฐ์ ์คํ๋ ๋ ์ฐ์ฐ์๋ฅผ ์ฌ์ฉํด์ ๊ฐ(todolist)์ด ์ถ๊ฐ๋๋ ํ์์ผ๋ก ๊ตฌํํ์๋ค.

#### โ์๋ฃโ : 
##### todolist์ ๊ฐ์ด ์ถ๊ฐ๋ ๋ ๊ธฐ๋ณธ status๊ฐ์ "active"์ด๋ค. ์ฒดํฌ๋ฐ์ค๋ฅผ ํด๋ฆญ์ ๊ฐ์ "completed"๋ก ๋ณ๊ฒฝ๋๋ค.

#### โ์ญ์ โ : 
##### ์ญ์ ๋ฒํผ์ ํด๋ฆญ์ ๋งค๊ฐ๋ณ์๋ก ๋ฐ์ onDelectํจ์์ ํด๋ฆญํ ์์ดํ์ด ๋งค๊ฐ๋ณ์๋ก ๋ด์ ์ ๋ฌ๋๋ค. 
##### ๊ธฐ์กด์ todolist ๋ฐฐ์ด์ filterํจ์๋ฅผ ์ ์ฉ์์ผ ๊ธฐ์กด์todolist์ id != ๋ด๊ฐ ํด๋ฆญํ ์์ด๋์ ๊ฐ ํํ๋ก setTodos๋ฅผ ์คํ์์ผ
##### ๋ด๊ฐ ๋๋ฅด์ง ์์ id์ ๊ฐ์ผ๋ก๋ง ๋ฐฐ์ด์ ๋ค์ ๋ง๋ค์ด todolist์ ๊ฐ์ ๊ฐฑ์ ์ํค๋ ๋ฐฉ๋ฒ์ผ๋ก ๊ตฌํํ์๋ค.

#### ๐ํํฐ๐ : 
##### ์ฒ์ ํ๋ฉด์ด ๋ ๋๋ง ๋ ๋ ํํฐ(useState๋ก ์ ์)์ ๊ฐ์ "all"์ด๋ค, "active", "completed" ๋ฒํผ์ ํด๋ฆญ์ ํํฐ์ ๊ฐ์ ํด๋น
##### ํ์คํธ ๊ฐ์ผ๋ก ๋ณ๊ฒฝ์ด ๋๋ค. ํ๋ฉด์ ๋ธ์ถ๋๋ todolist๋ค์ ์กฐ๊ฑด๋ฌธ์ ์ฌ์ฉํด return์ด ๋๋ค.
##### all์ธ ๊ฒฝ์ฐ์๋ ๋ชจ๋  todolist๋ฅผ,  ํํฐ์ ๊ฐ์ด all์ด ์๋ ๊ฒฝ์ฐ์๋ todos.filter((todo)=>todo.status === filter) 
##### status๋ฅผ ์ด์ฉํด ํํฐ์ ๊ฐ === todolist์ status์ ๊ฐ ํํ๋ก ์ผ์นํ๋ ๋ฆฌ์คํธ๋ค๋ง ๋ธ์ถ๋๊ฒ๋ ๊ตฌํํ์๋ค.

#### ๐น๋ํ todolist์ ๊ฐ์ด ๋ณ๊ฒฝ๋ ๋๋ง๋ค useEffect๋ฅผ ์ฌ์ฉํด todo์ ๊ฐ์ localStorage.setItem์ ์ด์ฉํด ๋ฌธ์์ดํ์์ผ๋ก ์ ์ฅํ๋ค (stringify)
#### ๋ค์ localStorage.getItem๋ก todolist์ ๊ฐ์ ๊ฐ์ฒดํํ๋ก ๋ถ๋ฌ์์ค๋ค(parse) returnํด์ฃผ์ด ์๋ก๊ณ ์นจ์ ํ์ฌ๋ ๊ฐ์ด ์ ์ง๋๊ฒ๋ ๊ตฌํํ์์ต๋๋ค.

# ๋๋์ , ์๊ฒ๋์ , ๋์ ์๊ฐ
##### useState์ ๋ํ ์ดํด ๋ฟ๋ง ์๋๋ผ ๋ณต์กํ ๊ตฌ์กฐ์์์ ์ฌ์ฉ ํํ์ ๋ํด์๋ ์๋ฒฝํ ์ดํดํ  ์ ์๋ ๊ณ๊ธฐ๊ฐ ๋์๋ค.
##### ๋ค๋ง ๋ชจ๋  ๊ฐ์ useState๋ก ๊ด๋ฆฌํ๊ฒ ๋์ด์ ์กฐ๊ธ ๋ณต์กํ ๊ตฌ์กฐ์ด๊ธฐ๋ ํ์ง๋ง ์ดํด๋ฅผ ํ์ด๋ ์ฌ๋ฌ๋ฒ ๋ณต๊ธฐ๋ฅผ ํตํ์ฌ ๊ตฌ๊ธ๋ง ์์ด๋ ์ค์ค๋ก ๊ตฌํ์ ํ  ์ ์๊ฒ ๋์๋ค.
##### ๋ํ ๊ฐ์ ์ ์ฅํ๊ธฐ ์ํด์๋ ํ๋ก ํธ ์๋์ ์์ญ๋ง์ผ๋ก๋ ์ด๋ ต๋ค ๋ผ๋ ์๊ฐ์ ๊ฐ์ก์๋๋ฐ ์๋ฐ์คํฌ๋ฆฝํธ์ ๋งค์๋์ค localstorage์ ์ ์ฅํ  ์ ์๋
##### ๊ธฐ๋ฅ์ด ์๋ค๋๊ฑธ ์๊ฒ๋์๋ค. ์ ์ฉ์ ํด๋ณด๊ณ  ์ค์  ์๋ก๊ณ ์นจ์์๋ ๊ฐ์ด ๋จ์์๋๊ฑธ ๋ณด๊ณ 
##### ์๋ฐ์คํฌ๋ฆฝํธ๋ ๋ด๊ฐ ์๊ฐํ๊ฒ ๋ณด๋ค ๋ ๊น๊ณ  ๋ ํฅ๋ฏธ๋ก์ด ์ธ์ด๋ผ๊ณ  ์๊ฐ์ด ๋ค์ด ํ๋ฒํ ์นํํ์ ๊ตฌ์กฐ๊ฐ ์๋
##### ๋ค์ํ ์๋น์ค, ๊ฒ์ ๋ฑ๋ฑ์ ์๋ฐ์คํฌ๋ฆฝํธ๋ง์ ์ฌ์ฉํ์ฌ ๋ง๋ค์ด๋ณด๊ณ ์ถ๋ค.
##### ๋ง์ง๋ง์ผ๋ก useState๋ก todolist์ ๊ฐ์ ๊ด๋ฆฌํ๋ ๊ณผ์ ์์ ๋ฐฐ์ด์ ๊ฐ์ ์ถ๊ฐ, ์ญ์ , filter์ ํตํ ์ถ์ถ ๋ฑ๋ฑ 
##### ์๋ฐ์คํฌ๋ฆฝํธ์  ๊ฐ๋์ ๋ค์ํ๋ฒ ๋ณต์ตํ  ์ ์๋ ๊ธฐํ๊ฐ ๋์๋ค.

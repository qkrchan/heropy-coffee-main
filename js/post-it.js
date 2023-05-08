//포스트잇 기능
//DOM가져오기
const postItForm = document.querySelector("#post-it-form");
const postItInput = postItForm.querySelector("input")
const postItList = document.querySelector("#post-it-list");
//포스트잇의 내용들을 배열로 저장하기위한 선언
let content = [];
//이벤트 서브밋 발생시 함수실행
postItForm.addEventListener("submit", onSubmit);
//서브밋이 발생하면 실행될 함수선언
function onSubmit(event){
  event.preventDefault();//서브밋 발생시 새로고침되는 기능 정지
  const newContent = postItInput.value;//포스트잇 인풋태그의 밸류 변수선언
  postItInput.value = "";//서브밋 발생 후 인풋태그의 밸류 리셋
  const newContentObj = {//포스트잇 내용마다 고유번호 주기위한 객체선언
    text: newContent,//포스트잇 내용
    id: Date.now(),//포스트잇 내용의 고유번호, Date.now()메소드를 이용해 중복되지않는 번호지정
    };
  content.push(newContentObj);//포스트잇의 내용과 고유번호를 배열로 저장
  saveContent();//로컬스토리지에 저장하는 함수실행
  writeContent(newContentObj);//화면에 표시할 함수실행
}
function writeContent(newContent){//화면에 표시할 함수
  const li = document.createElement("li");//함수 실행시 li태그 생성
  const span = document.createElement("span");//함수 실행시 span태그 생성
  li.id = newContent.id; //생성된 li태그의 포스트잇의 고유번호를 지정
  span.innerText = newContent.text;//생성된 span태그에 텍스트 입력 
  const button = document.createElement("button");//함수 실행시 button태그 생성
  button.innerText = "✖️";//버튼 태그의 텍스트 입력 
  button.addEventListener("click", deleteContent);//버튼 클릭시 포스트잇의 내용을 지우는 이벤트
  li.appendChild(span);//생성된 span태그를 생성된 li의 자손으로 연결
  li.appendChild(button);//생성된 button태그를 생성된 li의 자손으로 연결
  postItList.appendChild(li);//생성된 li태그를 postItList(ul태그)의 자손으로 연결
}
function deleteContent(event){//포스트잇의 내용을 지우는 함수
  const li = event.target.parentElement;//버튼의 부모요소로 접근하고 변수선언
  content = content.filter((content) => content.id !== parseInt(li.id));//고유번호가 같지않으면 걸러서 배열생성
  li.remove();//리무브함수를 사용해 요소제거
  saveContent();
}
function saveContent(){//새로고침하면 내용이 전부 리셋되기 때문에 로컬스토리지에 저장
  localStorage.setItem("content",JSON.stringify(content));//밸류값을 문자열로 저장
}
const savedContent = localStorage.getItem("content");//로컬스토리지에 저장된 키 가져오기
if(savedContent !== null){//로컬스토리지에 값이 있을때
  const parsedContent = JSON.parse(savedContent);//값을 객체로 변환하고 변수선언
  content = parsedContent;
  parsedContent.forEach(writeContent);
}
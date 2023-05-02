//가위 바위 보 

// DOM 
const scissors = document.querySelector(".scissors");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const user = document.querySelector(".user");
const com = document.querySelector(".computer");
const footer = document.querySelector(".footer");

// 함수선언
function playGame(user){// 유저로부터 매개변수 user 값을 받음
    const computer = Math.floor((Math.random() * 3));// 컴퓨터 선택을 랜덤하게가져옴 
    let comChoice;
    if(computer == 0){// 컴퓨터가 0일때 가위
      comChoice = document.createElement("img");//이미지태그생성
      comChoice.src = "./img/scissors.png";//이미지 소스에 사진 추가
      com.innerHTML = "";// 컴퓨터 텍스트값 리셋
      com.appendChild(comChoice);// 생성한 이미지 태그를 컴퓨터의 자손으로 연결
    }
    if(computer == 1){//컴퓨터가 1일때 바위
      comChoice = document.createElement("img");
      comChoice.src = "./img/rock.png";
      com.innerHTML = "";
      com.appendChild(comChoice);
    }
    if(computer == 2){//컴퓨터가 2일때 보
      comChoice = document.createElement("img");
      comChoice.src = "./img/paper.png";
      com.innerHTML = "";
      com.appendChild(comChoice);
    }    

    if((user - computer) === 0){// 유저 - 컴퓨터가 0일떄 무승부
      footer.innerHTML = "DRAW!";
    }else if((user - computer) === -2 || (user - computer) === 1){// 유저 - 컴퓨터가 -2 또는 1 일때 유저 승리
      footer.innerHTML = "YOU WIN!";
    }else{// 나머지의 경우 유저 패
      footer.innerHTML = "YOU LOSE";
    }
         
  }


scissors.addEventListener("click", function(){// 가위 사진 클릭시 유저에 이미지 추가
  const img = document.createElement("img");
  img.src = "./img/scissors.png";
  user.innerHTML = "";
  user.appendChild(img);
});
rock.addEventListener("click", function(){// 바위 사진 클릭시 유저에 이미지 추가
  const img = document.createElement("img");
  img.src = "./img/rock.png";
  user.innerHTML = "";
  user.appendChild(img);
});
paper.addEventListener("click", function(){// 보 사진 클릭시 유저에 이미지 추가
  const img = document.createElement("img");
  img.src = "./img/paper.png";
  user.innerHTML = "";
  user.appendChild(img);
});


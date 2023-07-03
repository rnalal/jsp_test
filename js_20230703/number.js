let count = 0;
// 1 부터 100 까지(포함)의 임의의 정수 발생하기
let com = parseInt(Math.random() * 10) + 1;

/*       // document 는 body 를 의미함
// onkeypress : 키보드 한번 누르면 실행됨
// Key Code Reference Table
//  ㄴ keyboard 클릭해서 함수 실행한다는 의미 
document.querySelector("#num").onkeypress = function(e){
    if(e.keyCode == 13) {   // enter 하면
        numberCheck();      // numberCheck() 함수를 실행함
        return false;
    }
}
*/        

function numberCheck(){
    let user = document.querySelector("#num").value;
    if (1 <= user && user <= 100){
        if(user >= com){
            document.querySelector("#display").innerHTML = "더 작은 수를 입력하세요";
        } else if(user <= com){
            document.querySelector("#display").innerHTML = "더 큰 수를 입력하세요";
        } else {
            document.querySelector("#display").innerHTML = "<span style='color:red'>정답입니다</span>";
        }
        // document.querySelector("#num").value = "";
        count++;
        document.querySelector("#counter").innerHTML = `${count} 번만에 맞히셨습니다`;

    } else {
        alert('1에서 100까지의 점수 중에서만 입력하세요');
    } 
}
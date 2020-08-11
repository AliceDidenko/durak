import $ from 'jquery'



$( function(){
  let heightHeader = $("div.head").outerHeight();
  console.log("heightHeader = ", heightHeader);
  $("div.field-top").css('margin-top', heightHeader); // отступ верхних полей игроков от Header


  $("#gameStatus").click( function(){
    let divsArr = document.getElementsByClassName("field-user");
    let n = document.getElementById("num").value;

    if  (document.getElementById("gameStatus").innerHTML === "start") {
      document.getElementById("gameStatus").innerHTML = "stop";
      for (let i = 0; i < divsArr.length; i++) {
        divsArr[i].classList.add(`for${n}`);
        console.log(document.getElementById("gameStatus").innerHTML, divsArr[1].classList);//
      }
    } else {
      document.getElementById("gameStatus").innerHTML = "start";
      for (let i = 0; i < divsArr.length; i++) {
        divsArr[i].classList.remove("for2", "for3", "for4", "for5", "for6");
        console.log(document.getElementById("gameStatus").innerHTML, divsArr[1].classList);//
      }
    }

    document.getElementById("rangeValue").innerHTML = n;
  });
});
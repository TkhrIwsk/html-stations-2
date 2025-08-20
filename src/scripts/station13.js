function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  const checkbox = document.getElementById("check");
  const text = document.getElementById("text");
  if(checkbox.checked){
    text.style.backgroundColor="red";
  }
  else{
    text.backgroundColor="white"; 
  }
}

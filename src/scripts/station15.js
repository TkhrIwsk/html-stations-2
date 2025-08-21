function displayList() {
  // div#fruits を取得
  const fruitsDiv = document.getElementById("fruits");

  // <p> 要素を全部取得
  const pTags = fruitsDiv.querySelectorAll("p");

  // <ul> を作成
  const ul = document.createElement("ul");

  // <p> の内容を <li> に変換
  pTags.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p.textContent; // <p>のテキストをコピー
    ul.appendChild(li);
  });

  // 元の内容を消して <ul> を追加
  fruitsDiv.innerHTML = "";
  fruitsDiv.appendChild(ul);
}
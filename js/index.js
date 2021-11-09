const getRow1 = document.getElementById("row-1");

const singleBtn = document.getElementById("single"),
      tenBtn = document.getElementById("ten");

let gachaCount = 0;

function runNum() {
  const r = Math.floor(Math.random() * 100) + 1;
  return r;
}

console.log("runNum = " + runNum());

const createDiv = num => {
  for (let i = 1; i < num + 1; i++) {
    const newDiv = document.createElement("div");
    newDiv.id = "item-" + i;
    newDiv.setAttribute("class", "col-1 item");
    getRow1.appendChild(newDiv);
  }
}


/*
設定ガチャ排出率
SSR = 3%
SR  = 18%
R   = 79%
*/

let gachas = [];
let type;

const Gacha = (num) => {
  // コンソールログをリセット
  console.clear();

  console.log("--- " + (gachaCount + 1) + 0 + "連目 ---");


  if (gachaCount > 0 && num === 10) {
    if (type === "ten") {
      for (i = 1; i < 11; i++) {
        document.getElementById("item-" + i).remove();
      }
    }else if (type === "single") {
      document.getElementById("item-" + i).remove();
    }
  }else if (gachaCount > 0 && num === 1) {
    if (type === "single") {
      document.getElementById("item-" + i).remove();
      console.log(54)
    }else if (type === "ten") {
      for (i = 1; i < 11; i++) {
        document.getElementById("item-" + i).remove();
      }
      console.log(58);
    }
  }

  if (num === 1) {
    type = "single";
  }else if (num === 10) {
    type = "ten"
  }

  createDiv(num);

  for (i = 0; i < num; i++ ) {
    const getDiv = document.getElementById("item-" + (i + 1));

    let rNum = runNum();
    console.log(rNum);
    console.log("↑--- " + (i + 1) + "回目 ---↑")

    if (i < 9) {
      if (rNum > 97) {
        gachas.push("SSR");
        getDiv.innerText = "SSR";
        getDiv.style.backgroundColor = "#dc143c";
      }else if (rNum > 79 && rNum < 98) {
        gachas.push("SR");
        getDiv.innerText = "SR";
        getDiv.style.backgroundColor = "orange";
      }else if (rNum < 80) {
        gachas.push("R");
        getDiv.innerText = "R";
      }
    }

    // 10連SR以上確定処理
    if (i === 9) {
      if (rNum > 97) {
        gachas.push("SSR");
        getDiv.innerText = "SSR";
        getDiv.style.backgroundColor = "#dc143c";
      }else if (rNum < 98) {
        gachas.push("SR");
        getDiv.innerText = "SR";
        getDiv.style.backgroundColor = "orange";
      }
    }
  }
  gachaCount += 1;
}

tenBtn.onclick = () => {
  Gacha(10);
  console.log(gachas);
  gachas = [];
}

singleBtn.onclick = () => {
  Gacha(1);
  console.log(gachas);
  gachas = [];
}
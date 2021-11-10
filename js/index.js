const getCounter = document.getElementById("counter");

const getRow1 = document.getElementById("row-1");

const getRcount = document.getElementById("r-count"),
      getSRcount = document.getElementById("sr-count"),
      getSSRcount = document.getElementById("ssr-count");

const getRprob = document.getElementById("r-prob"),
      getSRprob = document.getElementById("sr-prob"),
      getSSRprob = document.getElementById("ssr-prob");

const singleBtn = document.getElementById("single"),
      tenBtn = document.getElementById("ten");

let gachaCount = 0;

let rCount = 0,
    srCount = 0,
    ssrCount = 0;

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

// ガチャ機能本体
const Gacha = (num) => {
  // コンソールログをリセット
  console.clear();
  // コメント表示
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
        ssrCount += 1;
      }else if (rNum > 79 && rNum < 98) {
        gachas.push("SR");
        getDiv.innerText = "SR";
        getDiv.style.backgroundColor = "orange";
        srCount += 1;
      }else if (rNum < 80) {
        gachas.push("R");
        getDiv.innerText = "R";
        rCount += 1;
      }
    }

    // 10連SR以上確定処理
    if (i === 9) {
      if (rNum > 97) {
        gachas.push("SSR");
        getDiv.innerText = "SSR";
        getDiv.style.backgroundColor = "#dc143c";
        ssrCount += 1;
      }else if (rNum < 98) {
        gachas.push("SR");
        getDiv.innerText = "SR";
        getDiv.style.backgroundColor = "orange";
        srCount += 1;
      }
    }

  }
  gachaCount += num;

  let rProb = rCount / gachaCount * 100,
      srProb = srCount / gachaCount * 100,
      ssrProb = ssrCount / gachaCount * 100;

  getRcount.innerText = "R排出数 = " + rCount;
  getSRcount.innerHTML = "SR排出数 = " + srCount;
  getSSRcount.innerHTML = "SSR排出数 = " + ssrCount;

  getRprob.innerHTML = "R排出率 = " + rProb.toFixed(2) + "%";
  getSRprob.innerHTML = "SR排出率 = " + srProb.toFixed(2) + "%";
  getSSRprob.innerHTML = "SSR排出率 = " + ssrProb.toFixed(2) + "%";

  getCounter.innerHTML = "回転数 = " + gachaCount + "回";
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
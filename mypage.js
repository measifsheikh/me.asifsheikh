let flag = null;
let flagtext = null;
let text = "this is good";

for (let i = 1; i < 4; i++) {
  const A = document.getElementById("A" + i);
  const B = document.getElementById("B" + i);

  A.addEventListener("click", function() {
    if (flag) {
      flag.classList.toggle("show");
      flagtext.querySelector("a").textContent  = text;
    }

    B.classList.toggle("show");
    flag = B;
    flagtext = A;
    text = A.querySelector("a").textContent;
    A.querySelector("a").textContent = ".";
  });
}


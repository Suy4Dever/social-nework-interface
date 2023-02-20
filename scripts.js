let counter1 = 0;
document.getElementsByClassName("info-1")[0].addEventListener("click", () => {
  if (counter1 === 0) {
    document.getElementsByClassName("detail-1")[0].style.display = "block";
    document.getElementsByClassName("title-1")[0].style.backgroundColor =
      "#57707d";
    document.getElementsByClassName("title-1")[0];
    counter1 = 1;
  } else {
    document.getElementsByClassName("detail-1")[0].style.display = "none";
    document.getElementsByClassName("title-1")[0].style.backgroundColor =
      "#7d97a5";
    counter1 = 0;
  }
});

let counter2 = 0;
document.getElementsByClassName("info-2")[0].addEventListener("click", () => {
  if (counter2 === 0) {
    document.getElementsByClassName("detail-2")[0].style.display = "block";
    document.getElementsByClassName("title-2")[0].style.backgroundColor =
      "#57707d";
    counter2 = 1;
  } else {
    document.getElementsByClassName("detail-2")[0].style.display = "none";
    document.getElementsByClassName("title-2")[0].style.backgroundColor =
      "#7d97a5";
    counter2 = 0;
  }
});

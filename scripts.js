let counter1 = 0;
document.getElementsByClassName("info-1")[0].addEventListener("click", () => {
  if (counter1 === 0) {
    document.getElementsByClassName("detail-1")[0].style.display = "block";
    counter1 = 1;
  } else {
    document.getElementsByClassName("detail-1")[0].style.display = "none";
    counter1 = 0;
  }
});

let counter2 = 0;
document.getElementsByClassName("info-2")[0].addEventListener("click", () => {
  if (counter2 === 0) {
    document.getElementsByClassName("detail-2")[0].style.display = "block";
    counter2 = 1;
  } else {
    document.getElementsByClassName("detail-2")[0].style.display = "none";
    counter2 = 0;
  }
});

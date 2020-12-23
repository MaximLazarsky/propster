const accordion = document.querySelector("#accordion");
const accordionItemsContent = document.querySelectorAll(
  ".accordionItemsContent"
);
const accordionItems = document.querySelectorAll(".accordionItems");
const accordionArrows = document.querySelectorAll(".accordion-arrows");

let numAccElemetn = +window.localStorage.getItem("savedNumAccItem") || 0;
let objTargetArreys = {
  activeItem: accordionItems,
  activeArrow: accordionArrows,
  activeItemContent: accordionItemsContent,
};


function removeClass(targetObj, numerOne, numberTwo, numberThree, numberFour, numberFive, numberSix, numberSeven, numberEight) {
  for (let element in targetObj) {
    targetObj[element][numerOne].classList.remove(element);
    targetObj[element][numberTwo].classList.remove(element);
    targetObj[element][numberThree].classList.remove(element);
    targetObj[element][numberFour].classList.remove(element);
    targetObj[element][numberFive].classList.remove(element);
    targetObj[element][numberSix].classList.remove(element);
    targetObj[element][numberSeven].classList.remove(element);
    targetObj[element][numberEight].classList.remove(element);
  }
}

function addClass(targetObj, number) {
  for (let element in targetObj) {
    targetObj[element][number].classList.add(element);
  }
}

function showAccardionItem() {
  if (numAccElemetn === 0) {
    removeClass(objTargetArreys, 1, 2, 3, 4, 5, 6, 7, 8);
  } else if (numAccElemetn === 1) {
    removeClass(objTargetArreys, 0, 2, 3, 4, 5, 6, 7, 8);
  } else if (numAccElemetn === 2) {
    removeClass(objTargetArreys, 0, 1, 3, 4, 5, 6, 7, 8);
  } else if (numAccElemetn === 3) {
    removeClass(objTargetArreys, 0, 1, 2, 4, 5, 6, 7, 8);
  } else if (numAccElemetn === 4) {
    removeClass(objTargetArreys, 0, 1, 2, 3, 5, 6, 7, 8);
  } else if (numAccElemetn === 5) {
    removeClass(objTargetArreys, 0, 1, 2, 3, 4, 6, 7, 8);
  } else if (numAccElemetn === 6) {
    removeClass(objTargetArreys, 0, 1, 2, 3, 4, 5, 7, 8);
  } else if (numAccElemetn === 7) {
    removeClass(objTargetArreys, 0, 1, 2, 3, 4, 5, 6, 8);
  } else if (numAccElemetn === 8) {
    removeClass(objTargetArreys, 0, 1, 2, 3, 4, 5, 6, 7);
  }
  addClass(objTargetArreys, numAccElemetn);
}

accordion.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-number")) {
    numAccElemetn = +event.target.getAttribute("data-number");
  }

  showAccardionItem();
  window.localStorage.setItem("savedNumAccItem", numAccElemetn);
});

window.addEventListener("load", (event) => {
  showAccardionItem();
});

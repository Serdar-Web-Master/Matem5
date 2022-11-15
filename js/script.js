import { a, b} from "./vars.js";
console.log(a,b);

const inputNumber = document.querySelector('.input__number');
const btn = document.querySelector('.btn');
console.log(inputNumber.value);
console.log(inputNumber);

btn.addEventListener("click",goTo)

const answerBlock86 = document.querySelector('.answer__block86');
const answerBlock87 = document.querySelector('.answer__block87');
const answerBlock531 = document.querySelector('.answer__block531');
const answerBlocks = document.querySelectorAll('.answer__block');


function goTo() {
   answerBlocks.forEach(el =>{
      el.classList.add("none")
   })

   if (inputNumber.value == 86) {
      answerBlock86.classList.remove("none");
      console.log(inputNumber.value);
   }
   else if (inputNumber.value == 87) {
      answerBlock87.classList.remove("none");
      console.log(inputNumber.value);
   }
   else if (inputNumber.value == 531) {
      answerBlock531.classList.remove("none");
      console.log(inputNumber.value);
   }
   else {
      console.log("Такой задачи нет");
   }
   inputNumber.value = "";
}


// answerBlock.innerHTML = "<p>составляем уравнение :</p> "

// answerBlock.insertAdjacentHTML("afterbegin",
// '<p> <span class="task__number">86.</span>  В магазин привезли 2400 кг фруктов: 120 ящиков груш и 140 ящиков яблок. Известно, что масса одного ящика яблок в 2 раза больше, чем масса одного ящика груш. Сколько килограммов груш привезли в магазин?</p> <h1>Решение</h1> <p>Пусть масса одного ящика груш Х кг,тогда масса одного ящика яблок будет 2Х кг,так как привезли всего 2400 кг </p>')
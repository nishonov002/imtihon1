let cheese = document.querySelector(".cheese");
let meat = document.querySelector(".meat");
let onion = document.querySelector(".onion");
let salad = document.querySelector(".salad");
let tomato = document.querySelector(".tomato");
let pickle = document.querySelector(".pickle");
let och = document.querySelector(".och");
let och1 = document.querySelector(".och1");
let send = document.querySelector(".send");
let sendW = document.querySelector(".send-w");

let cheese_li = document.querySelector(".cheese_li");
let meat_li = document.querySelector(".meat_li");
let onion_li = document.querySelector(".onion_li");
let salad_li = document.querySelector(".salad_li");
let tomato_li = document.querySelector(".tomato_li");
let pickle_li = document.querySelector(".pickle_li");
let create = document.querySelector(".new");
let total = document.querySelector("#total");
let count = 1;
count++;
cheese.addEventListener("click", (e) => {
  e.preventDefault();
  let template = `<button class="och" id="cheese" onclick="deleteTodo()">
            <img src="./imagine/cheese.svg" alt="">
                    </button>`;
  create.innerHTML += template;
  cheese_li.innerHTML = +cheese_li.innerHTML + 2;
  total.innerHTML = +total.innerHTML + 2;
  

});

meat.addEventListener("click", (e) => {
  e.preventDefault();
  let template = `<button class="och" id="meat" onclick="deleteTodo()">
            <img src="./imagine/meat.svg" alt="">
                    </button>`;

  create.innerHTML += template;
  meat_li.innerHTML = +meat_li.innerHTML + 5;
  total.innerHTML = +total.innerHTML + 5;
});

onion.addEventListener("click", (e) => {
  e.preventDefault();
  let template = `<button class="och" id="onion" onclick="deleteTodo()">
            <img src="./imagine/onion.svg" alt="">
                    </button>`;

  create.innerHTML += template;
  onion_li.innerHTML = +onion_li.innerHTML + 1;
  total.innerHTML = +total.innerHTML + 1;
});

salad.addEventListener("click", (e) => {
  e.preventDefault();
  let template = `<button class="och" id="salad" onclick="deleteTodo()">
            <img src="./imagine/salad.svg" alt="">
                    </button>`;

  create.innerHTML += template;
  salad_li.innerHTML = +salad_li.innerHTML + 1;
  total.innerHTML = +total.innerHTML + 1;
});

pickle.addEventListener("click", (e) => {
  e.preventDefault();
  let template = `<button class="och" id="pickle" onclick="deleteTodo()">
            <img src="./imagine/pickle.svg" alt="">
                    </button>`;

  create.innerHTML += template;
  pickle_li.innerHTML = +pickle_li.innerHTML + 3;
  total.innerHTML = +total.innerHTML + 3;
});
tomato.addEventListener("click", (e) => {
  e.preventDefault();
  let template = `<button class="och" id="tomato" onclick="deleteTodo()">
            <img src="./imagine/tomato.svg" alt="">
                    </button>`;

  create.innerHTML += template;
  tomato_li.innerHTML = +tomato_li.innerHTML + 3;
  total.innerHTML = +total.innerHTML + 3;
});
let kutish =Math.floor(Math.random()*(35-10+1)+10);
send.addEventListener("click", (e) => {
  e.preventDefault();
 let sendes =`sizning navbatingiz ${kutish}`
 sendW.innerHTML=sendes;
});
let tek = Math.floor(Math.random() * (5 - 1 + 1) + 1);

function deleteTodo() {
  let ch = document.querySelector(".och");

  // if (ch.innerHTML === cheeses.innerHTML) {
  //   cheese_li.innerHTML = +cheese_li.innerHTML - 2;
  //   total.innerHTML = +total.innerHTML - 2;
  // } else if (ch.innerHTML === meats.innerHTML) {
  //   meat_li.innerHTML = +meat_li.innerHTML - 5;
  //   total.innerHTML = +total.innerHTML - 5;
  // } else if (ch.innerHTML === onions.innerHTML) {
  //   onion_li.innerHTML = +onion_li.innerHTML - 1;
  //   total.innerHTML = +total.innerHTML - 1;
  // } else if (ch.innerHTML === salads.innerHTML) {
  //   salad_li.innerHTML = +salad_li.innerHTML - 1;
  //   total.innerHTML = +total.innerHTML - 1;
  // } else if (ch.innerHTML === tomatos.innerHTML) {
  //   tomato_li.innerHTML = +tomato_li.innerHTML - 2;
  //   total.innerHTML = +total.innerHTML - 2;
  // } else if (ch.innerHTML === pickles.innerHTML) {
  //   pickle_li.innerHTML = +pickle_li.innerHTML - 3;
  //   total.innerHTML = +total.innerHTML - 3;
  // }

  ch.remove();
  
    total.innerHTML = +total.innerHTML - tek;
}

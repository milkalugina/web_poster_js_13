
let controller = new ScrollMagic.Controller()

let $box2 = document.getElementById('main_cat')

let box2Anim = anime({
targets: $box2,
// height: ['0vw', '300vh'],
scale: 90,
// left: ['50%', '50%'],
// top: ['20px', '-50%'],
autoplay: false,
easing: 'easeInSine'
})

let $section2 = document.getElementById('first')

new ScrollMagic.Scene({
triggerElement: '#first',
duration: $section2.getBoundingClientRect().height
})
.addTo(controller)
.setPin($box2)
.on('progress', function(event) {
  box2Anim.seek(box2Anim.duration * (event.progress * 1))
})

document.getElementById('btn_white').onclick = function() { document.getElementById('btn_black').style.display = 'block';
document.getElementById('cat_on').style.display = 'block'
document.getElementById('cat_on').style.animation = `aniCat 1s ease-in 1 forwards`
 }


document.getElementById('btn_black').onclick = function() {
document.getElementById('btn_black').style.display = 'none'
document.getElementById('cat_on').style.display = 'none'
document.getElementById('cat_on').style.animation = `opacityCat 3s ease-in-out 1 forwards`
}


document.getElementById('museum_cup').onclick = function(){
document.getElementById('museum_cup').style.animation = `fjfj 0.5s ease-in-out 1 forwards`
}

document.getElementById('museum').onclick = function(){
document.getElementById('museum_cup').style.animation = `jf 0.5s ease-in-out 1 forwards`
}

document.getElementById('home_cup').onclick = function(){
document.getElementById('home_cup').style.animation = `fjfj 0.5s ease-in-out 1 forwards`
}

document.getElementById('primetnaya_cup').onclick = function(){
document.getElementById('primetnaya_cup').style.animation = `fjfj 0.5s ease-in-out 1 forwards`
}

document.getElementById('omen_cup').onclick = function(){
document.getElementById('omen_cup').style.animation = `fjfj 0.5s ease-in-out 1 forwards`
}

document.getElementById('time_cup').onclick = function(){
document.getElementById('time_cup').style.animation = `fjfj 0.5s ease-in-out 1 forwards`
}



document.getElementById('cat_first').onclick = function(){
document.getElementById('second').style.backgroundColor = `white`;
document.getElementById('cats_all').style.display = 'block'
}

document.getElementById('cats_all').onclick = function(){
document.getElementById('second').style.backgroundColor = `black`;
document.getElementById('cat_first').style.display = 'none'
document.getElementById('cats_all_negative').style.display = 'block'
document.getElementById('cats_all').style.display = 'none'
}

document.getElementById('cats_all_negative').onclick = function(){
document.getElementById('second').style.backgroundColor = `white`;
document.getElementById('cats_all_negative').style.display = 'none'
document.getElementById('cat_first').style.display = 'none'
document.getElementById('cats_all').style.display = 'block'
}

// Сколько создавать карт
const CARDS_NUMBER = 10
// Название файлов с картами
let cards = [
  '../img/1_card.svg',
  '../img/2_card.svg',
  '../img/3_card.svg',
  '../img/4_card.svg',
  '../img/5_card.svg',
  '../img/6_card.svg',
  '../img/7_card.svg',
  '../img/8_card.svg',
  '../img/9_card.svg',
  '../img/10_card.svg',
  '../img/11_card.svg',
  '../img/12_card.svg',
  '../img/13_card.svg'
]
// Функция, которая перемешивает массив с названиямии
function shuffle(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
}
// Применяем функцию перемешивания
cards = shuffle(cards)

// Находим контейнер для карт
// Он нам нужен, чтобы в ЦСС все выровнять
let cardsContainer = document.getElementById('third__cards-container')
// При помощи цикла создаем карты и вставляем внутрь контейнера
for (let i = 0; i < CARDS_NUMBER; i++) {
  let newCard = document.createElement('img')
  newCard.src = `img/${cards[i]}`
  newCard.classList.add('card')
  newCard.onclick = function() {

  }
  cardsContainer.append(newCard)
}

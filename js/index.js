 // cats_scroll
let controller = new ScrollMagic.Controller()

let $catsScroll = document.getElementById('main_cat')

let catsScrollAnim = anime({
targets: $catsScroll,
scale: 218,
autoplay: false,
easing: 'easeInSine'
})

let $section1 = document.getElementById('cats_scroll')

new ScrollMagic.Scene({
triggerElement: '#cats_scroll',
duration: $section1.getBoundingClientRect().height
})
.addTo(controller)
.setPin($catsScroll)
.on('progress', function(event) {
  catsScrollAnim.seek(catsScrollAnim.duration * (event.progress * 1))
})

// cats_negative
document.getElementById('cat_first').onclick = function(){
document.getElementById('second').style.backgroundColor = `white`;
document.getElementById('cats_all').style.display = 'block'
document.getElementById('cats_all--02').style.display = 'block'
document.getElementById('window').style.background = 'linear-gradient(to top, #000000, #FFFFFF)';
}

document.getElementById('cats_all').onclick = function(){
document.getElementById('second').style.backgroundColor = `black`;
document.getElementById('cat_first').style.display = 'none';
document.getElementById('cats_all_negative').style.display = 'inline-block';
document.getElementById('cats_all_negative--02').style.display = 'inline-block';
document.getElementById('cats_all').style.display = 'none';
document.getElementById('cats_all--02').style.display = 'none';
document.getElementById('window').style.background = `black`;
}

document.getElementById('cats_all--02').onclick = function(){
document.getElementById('second').style.backgroundColor = `black`;
document.getElementById('cat_first').style.display = 'none';
document.getElementById('cats_all_negative').style.display = 'inline-block';
document.getElementById('cats_all_negative--02').style.display = 'inline-block';
document.getElementById('cats_all').style.display = 'none';
document.getElementById('cats_all--02').style.display = 'none';
document.getElementById('window').style.background = `black`;
}

document.getElementById('cats_all_negative').onclick = function(){
document.getElementById('second').style.backgroundColor = `white`;
document.getElementById('cats_all_negative').style.display = 'none'
document.getElementById('cats_all_negative--02').style.display = 'none'
document.getElementById('cat_first').style.display = 'none'
document.getElementById('cats_all').style.display = 'inline-block'
document.getElementById('cats_all--02').style.display = 'inline-block'
document.getElementById('window').style.background = 'linear-gradient(to top, #000000, #FFFFFF)';
}

document.getElementById('cats_all_negative--02').onclick = function(){
document.getElementById('second').style.backgroundColor = `white`;
document.getElementById('cats_all_negative').style.display = 'none'
document.getElementById('cats_all_negative--02').style.display = 'none'
document.getElementById('cat_first').style.display = 'none'
document.getElementById('cats_all').style.display = 'inline-block'
document.getElementById('cats_all--02').style.display = 'inline-block'
document.getElementById('window').style.background = 'linear-gradient(to top, #000000, #FFFFFF)';
}

// cards
const CARDS_NUMBER = 36

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
  '../img/13_card.svg',
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
  '../img/13_card.svg',
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
  '../img/13_card.svg',
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

function shuffle(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards
}

cards = shuffle(cards)

let cardsContainer = document.getElementById('third__cards-container')

for (let i = 0; i < CARDS_NUMBER; i++) {
  let newCard = document.createElement('img')

  newCard.src = `img/${cards[i]}`
  newCard.classList.add('card')
  newCard.onclick = function(event) {
    event.target.style.transform =  `translate(${anime.random(-55,55)}vw,${anime.random(-55,55)}vh) rotate(${anime.random(0, 360)}deg)`

  }
  cardsContainer.append(newCard)
}


// screen_generator
document.getElementById('white_screen--02').onclick = function() {
  document.getElementById('black_screen--01').style.display = 'block';
  document.getElementById('black_screen--04').style.display = 'block';
}

document.getElementById('white_screen--03').onclick = function() {
  document.getElementById('black_screen--02').style.transform =  `translate(${anime.random(-25,55)}vw,${anime.random(15,35)}vh) rotate(${anime.random(0, 0)}deg)`;
  document.getElementById('black_screen--04').style.transform =  `translate(${anime.random(-25,55)}vw,${anime.random(15,35)}vh) rotate(${anime.random(0, 0)}deg)`;
}

document.getElementById('white_screen--04').onclick = function() {
  document.getElementById('black_screen--03').style.display = 'block';
  document.getElementById('black_screen--02').style.display = 'block';
}

document.getElementById('black_screen--01').onclick = function() {
  document.getElementById('white_screen--05').style.display = 'block';
  document.getElementById('white_screen--05').style.transform =  `translate(${anime.random(-25,55)}vw,${anime.random(15,35)}vh) rotate(${anime.random(0, 0)}deg)`;
}

document.getElementById('black_screen--02').onclick = function() {
  document.getElementById('white_screen--06').style.display = 'block';
  document.getElementById('white_screen--06').style.transform =  `translate(${anime.random(-25,55)}vw,${anime.random(15,35)}vh) rotate(${anime.random(0, 0)}deg)`;
  document.getElementById('white_screen--09').style.display = 'block';
  document.getElementById('white_screen--09').style.transform =  `translate(${anime.random(-25,55)}vw,${anime.random(15,35)}vh) rotate(${anime.random(0, 0)}deg)`;
}

document.getElementById('black_screen--03').onclick = function() {
  document.getElementById('white_screen--07').style.display = 'block';
  document.getElementById('white_screen--07').style.transform =  `translate(${anime.random(-25,55)}vw,${anime.random(15,35)}vh) rotate(${anime.random(0, 0)}deg)`;
  document.getElementById('white_screen--10').style.display = 'block';
  document.getElementById('white_screen--10').style.transform =  `translate(${anime.random(-25,55)}vw,${anime.random(15,35)}vh) rotate(${anime.random(0, 0)}deg)`;
}

document.getElementById('black_screen--03').onclick = function() {
  document.getElementById('white_screen--08').style.display = 'block';
  document.getElementById('white_screen--08').style.transform =  `translate(${anime.random(-25,55)}vw,${anime.random(15,35)}vh) rotate(${anime.random(0, 0)}deg)`;
  document.getElementById('white_screen--11').style.display = 'block';
  document.getElementById('white_screen--11').style.transform =  `translate(${anime.random(-25,55)}vw,${anime.random(15,35)}vh) rotate(${anime.random(0, 0)}deg)`;
}

document.getElementById('white_screen--09').onclick = function() {
  document.getElementById('white_screen--01').style.display = 'block';
  document.getElementById('white_screen--01').style.transform =  `translate(${anime.random(-25,55)}vw,${anime.random(15,35)}vh) rotate(${anime.random(0, 0)}deg)`;
  document.getElementById('white_screen--03').style.display = 'block';
  document.getElementById('white_screen--03').style.transform =  `translate(${anime.random(-25,55)}vw,${anime.random(15,35)}vh) rotate(${anime.random(0, 0)}deg)`;
}

document.getElementById('white_screen--10').onclick = function() {
  document.getElementById('white_screen--02').style.display = 'block';
  document.getElementById('white_screen--02').style.transform =  `translate(${anime.random(-25,55)}vw,${anime.random(15,35)}vh) rotate(${anime.random(0, 0)}deg)`;
}

document.getElementById('white_screen--11').onclick = function() {
  document.getElementById('white_screen--04').style.display = 'block';
  document.getElementById('white_screen--04').style.transform =  `translate(${anime.random(-25,55)}vw,${anime.random(15,35)}vh) rotate(${anime.random(0, 0)}deg)`;
}


// btn
document.getElementById('btn_white').onclick = function() { document.getElementById('btn_black').style.display = 'flex';
document.getElementById('cat_on').style.display = 'block';
document.getElementById('cat_on').style.animation = `aniCat 1s ease-in 1 forwards`;
 }

document.getElementById('btn_black').onclick = function() {
document.getElementById('btn_black').style.display = 'none'
document.getElementById('cat_on').style.display = 'none'
document.getElementById('cat_on').style.animation = `opacityCat 3s ease-in-out 1 forwards`
}


//catGoes
let catGoes1 = new ScrollMagic.Controller()

let $catGoes = document.getElementById('cats_goes')

let catGoes2Anim = anime({
  targets: $catGoes,
  height: ['76vh', '76vh'],
  width: ['40vw', '40vw'],
  top: '-20vh',
  translateX: ['155vw', '-120vw'],
  autoplay: false,
  easing: 'linear'
})

let $section6 = document.getElementById('sixth')

new ScrollMagic.Scene({
triggerElement: '#sixth',
duration: $section6.getBoundingClientRect().height
})
.addTo(catGoes1)
.setPin($catGoes)
.on('progress', function(event) {
catGoes2Anim.seek(catGoes2Anim.duration * event.progress)
})


//no_sings
let noSings = new ScrollMagic.Controller()

let $noSings1 = document.getElementById('no_sings')

let sings2Anim = anime({
  targets: $noSings1,
  translateY: ['0vw', '0vw'],
  top: ['0', '0vw'],
  height: ['60vh', '60vh'],
  width: ['186vw', '186vw'],
  right: ['205vw', '-500vw'],
  position: 'relative important!',
  autoplay: false,
  easing: 'easeInOutQuad'
})

let $section62 = document.getElementById('sixth')

new ScrollMagic.Scene({
triggerElement: '#sixth',
duration: $section62.getBoundingClientRect().height
})
.addTo(noSings)
.setPin($noSings1)
.on('progress', function(event) {
sings2Anim.seek(sings2Anim.duration * event.progress)
})


//disappears
document.getElementById('museum_cup').onclick = function(){
document.getElementById('museum_cup').style.animation = `disappears 0.5s ease-in-out 1 forwards`
}

document.getElementById('home_cup').onclick = function(){
document.getElementById('home_cup').style.animation = `disappears 0.5s ease-in-out 1 forwards`
}

document.getElementById('primetnaya_cup').onclick = function(){
document.getElementById('primetnaya_cup').style.animation = `disappears 0.5s ease-in-out 1 forwards`
}

document.getElementById('omen_cup').onclick = function(){
document.getElementById('omen_cup').style.animation = `disappears 0.5s ease-in-out 1 forwards`
}

document.getElementById('time_cup').onclick = function(){
document.getElementById('time_cup').style.animation = `disappears 0.5s ease-in-out 1 forwards`
}

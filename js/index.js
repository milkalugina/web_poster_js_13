
let controller = new ScrollMagic.Controller()

let $box2 = document.getElementById('main_cat')

let box2Anim = anime({
targets: $box2,
height: ['20vw', '1223vw'],
width: ['20vw', '1223vw'],
left: ['40vw', '-534vw'],
top: ['220px', '-9000px'],
autoplay: false,
easing: 'linear'
})

let $section2 = document.getElementById('first')

new ScrollMagic.Scene({
triggerElement: '#first',
duration: $section2.getBoundingClientRect().height
})
.addTo(controller)
.setPin($box2)
.on('progress', function(event) {
box2Anim.seek(box2Anim.duration * event.progress)
})

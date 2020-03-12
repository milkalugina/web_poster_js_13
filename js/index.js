
let controller = new ScrollMagic.Controller()

let $box2 = document.getElementById('main_cat')

let box2Anim = anime({
targets: $box2,
height: ['40vw', '1170vw'],
width: ['40vw', '1170vw'],
left: ['30vw', '-595vw'],
top: ['180px', '-9000px'],
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

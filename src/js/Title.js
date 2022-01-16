import m from 'mithril';
import anime from 'animejs';
import { cl } from './utils';

const paragraphsKf = [
  {
    opacity: 0,
    translateY: '200%',
    skew: (_, i) => i % 2 ? '10deg' : '-10deg',
    rotate: (_, i) => i % 2 ? '10deg' : '-10deg',
    duration: 200,
    easing: 'easeInOutQuad',
  },
  {
    opacity: 1,
    translateY: '0%',
    skew: '0deg',
    rotate: '0deg',
    duration: 1000,
    easing: 'easeInOutQuad',
  },
]
const beginLoadingAnim = () => anime({
  targets: '.greeter .content__paragraph',
  keyframes: paragraphsKf,
})


const completeLoadingAnim = ({ animateColumns }) => anime({
  targets: '.title_root .content__paragraph',
  opacity: 0,
  translateY: '-200%',
  skew: (_, i) => i % 2 ? '-10deg' : '10deg',
  rotate: (_, i) => i % 2 ? '-10deg' : '10deg',
  duration: 1500,
  delay: 500,
  easing: 'easeInOutQuad',
  autoplay: false,
  // complete() { titleAnim() }
  complete() {
    if (animateColumns) { columnsAnim().play() }
    else {
      cl('.greeter', 'add', 'd-none');
      window.scroller.update()
      window.scroller.start()
    }
  }
})

const titleAnim = () => anime({
  targets: '.title_root',
  height: '0vh',
  duration: 1000,
  easing: 'easeInOutCubic',
  begin() {
    cl('.nav', 'remove', 'visible')
    columnsAnim().play()
  },
})

const columnsAnim = () => anime({
  targets: '.column',
  opacity: [0, 1],
  translateY: (_, i) => i == 1 ? ['-50%', 0] : ['50%', 0],
  duration: 1500,
  easing: 'easeOutQuart',
  complete() {
    cl('.greeter', 'add', 'd-none')
    cl('.c-scrollbar', 'remove', 'hidden')
    window.scroller.update()
    window.scroller.start()
  }
})






const Title = {

  view() {
    return [m(
      ".title-wrapper[data-scroll][data-scroll-repeat]",
      m(
        "section.content__item.content__item--home.content__item--current[data-scroll-speed=2][data-scroll]",
        m(".paragraph-wrapper", m(".content__paragraph[data-scroll]", "Elena Kustova")),
        m(".paragraph-wrapper", m(".content__paragraph[data-scroll]", "Russian")),
        m(".paragraph-wrapper", m(".content__paragraph[data-scroll]", "Photographer")),
        m(".paragraph-wrapper", m(".content__paragraph[data-scroll]", "Based in Italy")),

      ),
    ),
    ]
  }
}

export { Title, completeLoadingAnim, beginLoadingAnim, columnsAnim }

import m from "mithril";
import anime from "animejs";
import pics from "../../assets/img/*/*.jpg";
import { Modal } from './Modal'
import { cl } from "../utils";

let projects = {};
for (const key in pics) {
  projects[key] = Object.values(pics[key]);
}

let columnsExitAnim, pictureAnimation

const handleClick = (e, vnode) => {
  window.scroller.update()
  window.scroller.stop()
  const target = e.target,
    w = window.innerWidth,
    h = window.innerHeight,
    grandParent = e.target.parentNode.parentNode,
    title = grandParent.getAttribute('data-title'),
    rect = target.getBoundingClientRect(),
    imgWrap = document.querySelector('.carousel-wrap');

  vnode.state.worksState.selectedTitle = title
  cl('.modal', 'add', 'open')
  cl('.nav', 'add', 'hidden')
  cl('.c-scrollbar', 'add', 'd-none')
  cl('.modal, .controls', 'remove', 'hidden')

  let newH, newW, newY, newX;

  if (Math.abs(h - w) <= w * .12) {
    newH = h * .7
    newW = newH / 1.5
    newY = h * 0.10
    newX = (w / 2) - (newW / 2)
  } else if (h > w) {
    newW = w * .7
    newH = newW * 1.5
    newY = (h / 2) - (newH / 2)
    newX = (w / 2) - (newW / 2)
  } else {
    newH = h * .7
    newW = newH / 1.5
    newY = h * 0.10
    newX = (w / 2) - (newW / 2)
  }

  pictureAnimation = anime({
    targets: imgWrap,
    begin() {
      cl(grandParent, 'add', 'v-hidden')
      columnsExitAnim.direction = 'normal'
      columnsExitAnim.play()
    },
    complete() {
      cl('.selected_root', 'remove', 'hidden')
    },
    // translateY: [rect.y, (h / 2) - yTop],
    translateY: [rect.y, newY],
    translateX: [rect.left, newX],
    height: [rect.height, newH],
    width: [rect.width, newW],
    duration: 1500,
    easing: 'easeInOutQuint'
  })

  pictureAnimation.play()
}

function PicStrip(v) {
  return {
    worksState: this.attrs.worksState,
    reverse: this.attrs.class === '.reverse' ? true : false,
    locomotive: this.attrs.class === '.reverse' ?
      '[data-scroll]'
      : '',
    projects: this.attrs.projectTitles,
    view(v) {
      return m(`.column-wrap ${v.attrs.class}`,
        m(`.column ${v.attrs.class} ${v.state.reverse ? '[data-scroll]' : ''}`,
          this.projects.map(title => {
            const url = projects[title][0]
            return m(`.column-item.h-50[data-scroll][data-scroll-repeat][data-title=${title}]`,
              m('button.btn', {
                type: 'button',
                onclick: (e) => handleClick(e, v)
              },
                m(`img[height=400][width=300][alt=project photo].item__img[src=${url}][alt='Film-like picture in Rome']`),
              ))
          })
        ))
    }
  }
}

function handleScroll(args) {
  const { scroll } = args
  const normalStrips = [...document.querySelectorAll('.column-wrap.normal')]
  normalStrips.forEach(str => {
    str.querySelector('.column').style.transform = `translateY(${scroll.y * 2}px)`
  })
}



const Works = {
  projectTitles: Object.keys(projects),
  timeout(vnode) {
    setTimeout(() => vnode.state.scrollable = true, 1500)
  },
  oninit(v) {
    v.state.selectedTitle = undefined
  },
  oncreate(v) {
    if (window.scroller) {
      window.scroller.on('scroll', (attrs) => {
        handleScroll(attrs)
      })
    }
    window.onresize = () => {
      this.cols = window.innerWidth > 768 ? 3 : 2
    }
    // anime({
    //   targets: '.staggering-axis-grid-demo .el',
    //   translateX: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'x' }),
    //   translateY: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'y' }),
    //   rotateZ: anime.stagger([0, 90], { grid: [14, 5], from: 'center', axis: 'x' }),
    //   delay: anime.stagger(200, { grid: [14, 5], from: 'center' }),
    //   easing: 'easeInOutQuad'
    // });
    columnsExitAnim = anime({
      targets: cl('.column-item').filter(e => !e.classList.contains('v-hidden')),
      opacity: 0,
      translateX: anime.stagger(10, { grid: [this.rows, this.cols], from: 'center', axis: 'x' }),
      translateY: anime.stagger(-150, { grid: [this.rows, this.cols], from: 'center', axis: 'y' }),
      delay: anime.stagger(15),
      // delay: anime.stagger(5, { grid: [this.rows, this.cols], from: 'center' }),
      duration: 1000,
      easing: 'easeInOutQuart',
      autoplay: false
    })
  },
  view(v) {
    this.rows = v.tag.projectTitles.length
    this.cols = window.innerWidth > 768 ? 3 : 2
    const len = this.rows / this.cols

    return [m('.columns[data-scroll]',
      m(PicStrip, { projectTitles: this.projectTitles.slice(0, len), worksState: v.state, class: '.normal' }),
      m(PicStrip, { projectTitles: this.projectTitles.slice(len, len * 2), worksState: v.state, class: '.reverse' }),
      m(PicStrip, { projectTitles: this.projectTitles.slice(len * 2, len * 3), worksState: v.state, class: '.normal' }),
      // m(PicStrip, { projectTitles: this.projectTitles, len, worksState: v.state, class: '.normal' }),
      // m(PicStrip, { projectTitles: this.projectTitles, len, worksState: v.state, class: '.reverse' }),
      // m(PicStrip, { projectTitles: this.projectTitles, len, worksState: v.state, class: '.normal' }),
    ),
    m(Modal, { selTitle: v.state.selectedTitle }),
    ]
  }
}

export { pictureAnimation, columnsExitAnim }
export default Works

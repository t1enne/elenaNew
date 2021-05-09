import m from 'mithril'
import anime from 'animejs'

import {
  lerp,
  getMousePos,
  map,
  clamp
} from './utils'

import {
  transition
} from '../../app.js'
import pics from '../assets/img/*/*.jpg'

// track the mouse position
let mousepos = {
  x: 0,
  y: 0
};
// cache the mouse position
let mousePosCache = mousepos;
let direction = {
  x: mousePosCache.x - mousepos.x,
  y: mousePosCache.y - mousepos.y
};

// update mouse position when moving the mouse
window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));

export default class MenuItem {
  constructor(vnode) {
    this.vnode = vnode
    this.menuItem = vnode.attrs.item
    this.index = vnode.attrs.index
    this.url = vnode.attrs.url
    this.animProps = vnode.attrs.animProps
    this.showing = undefined
    this.hiding = undefined
  }
  oncreate() {
    this.reveal = this.vnode.dom.querySelector('.hover-reveal')
    this.revealInner = this.vnode.dom.querySelector('.hover-reveal__inner')
    this.revealImage = this.vnode.dom.querySelector('.hover-reveal__img')
    this.initEvents()
  }
  initEvents() {
    this.mouseenterFn = (ev) => {
      // show the image element
      this.showImage();
      this.firstRAFCycle = true;
      // start the render loop animation (rAF)
      this.loopRender();
    };
    this.mouseleaveFn = () => {
      // stop the render loop animation (rAF)
      this.stopRendering();
      // hide the image element
      this.hideImage();
    };

    this.vnode.dom.addEventListener('mouseenter', this.mouseenterFn);
    this.vnode.dom.addEventListener('mouseleave', this.mouseleaveFn);
  }
  showImage() {
    let menuItem = this.vnode.dom
    let reveal = this.reveal
    // document.body.style.backgroundColor = 'black';
    this.showing = anime({
      targets: [this.revealInner, this.revealImage],
      easing: 'easeOutSine',
      // opacity: 1,
      duration: 250,
      translateX: [direction.x < 0 ? '-100%' : '100%', '0%'],
      begin(anim) {
        anim.animatables.forEach(item => item.target.style.opacity = '1');
        // menuItem.style.zIndex = '10'
        reveal.style.opacity = '1'
      }
    })
  }
  hideImage() {
    let menuItem = this.vnode.dom
    // menuItem.style.zIndex = '1'
    this.hiding = anime({
      targets: [this.revealInner, this.revealImage],
      complete(anim) {
        let reveal = anim.animatables[0].target.parentElement
        if (this.showing) {
          // document.body.style.backgroundColor = '#d7cca1';
          reveal.style.opacity = '0'
        }
      },
      // opacity: 0,
      duration: 250,
      easing: 'easeOutSine',
      // zIndex: 1,
      translateX: ['0%', direction.x < 0 ? '100%' : '-100%'],
    })

  }
  // calculate the position/size of both the menu item and reveal element
  calcBounds() {
    this.bounds = {
      el: this.vnode.dom.getBoundingClientRect(),
      reveal: this.reveal.getBoundingClientRect()
    };
  }
  loopRender() {
    if (!this.requestId) {
      this.requestId = requestAnimationFrame(() => this.render());
    }
  }
  // stop the render loop animation (rAF)
  stopRendering() {
    if (this.requestId) {
      window.cancelAnimationFrame(this.requestId);
      this.requestId = undefined;
    }
  }
  render() {
    this.requestId = undefined;

    if (this.firstRAFCycle) {
      this.calcBounds();
    }

    const mouseDistanceX = clamp(Math.abs(mousePosCache.x - mousepos.x), 0, 100);
    direction = {
      x: mousePosCache.x - mousepos.x,
      y: mousePosCache.y - mousepos.y
    };
    mousePosCache = {
      x: mousepos.x,
      y: mousepos.y
    };

    this.animProps.tx.current = Math.abs(mousepos.x - this.bounds.el.left) - this.bounds.reveal.width / 2;
    this.animProps.ty.current = Math.abs(mousepos.y - this.bounds.el.top) - this.bounds.reveal.height / 2;
    this.animProps.rotation.current = this.firstRAFCycle ? 0 : map(mouseDistanceX, 0, 100, 0, direction.x < 0 ? 60 : -60);
    this.animProps.blur.current = this.firstRAFCycle ? 1 : map(mouseDistanceX, 0, 100, 0, 4);

    this.animProps.tx.previous = this.firstRAFCycle ? this.animProps.tx.current : lerp(this.animProps.tx.previous, this.animProps.tx.current, this.animProps.tx.amt);
    this.animProps.ty.previous = this.firstRAFCycle ? this.animProps.ty.current : lerp(this.animProps.ty.previous, this.animProps.ty.current, this.animProps.ty.amt);
    this.animProps.rotation.previous = this.firstRAFCycle ? this.animProps.rotation.current : lerp(this.animProps.rotation.previous, this.animProps.rotation.current, this.animProps.rotation.amt);
    this.animProps.blur.previous = this.firstRAFCycle ? this.animProps.blur.current : lerp(this.animProps.blur.previous, this.animProps.blur.current, this.animProps.blur.amt);

    anime({
      targets: this.reveal,
      translateY: this.animProps.ty.previous - document.querySelector('html').scrollTop,
      translateX: this.animProps.tx.previous,
      rotate: this.animProps.rotation.previous,
      // filter: `blur(${this.animProps.blur.previous}px)`,
      easing: 'easeInOutQuad',
      duration: 0,
    })

    this.firstRAFCycle = false;
    this.loopRender()
  }
  view() {
    return m('.link[data-scroll]', {
        href: `project/${this.index}`,
        class: 'menu__item',
        onclick(e) {
          e.preventDefault()
          transition()
          setTimeout(() => {
            m.route.set(`/${this.getAttribute('href')}`)
          }, 1000)
        }
      },
      m('span.menu__item-text',
        m('span.menu__item-textinner', this.menuItem),
      ),
      m('span.menu__item-sub', ''),
      m('.hover-reveal[style=opacity: 0]',
        m('.hover-reveal__inner[style=overflow:hidden]',
          m('.hover-reveal__img', {
            style: `background-image: url(${this.url})`
          })
        )
      )
    )
  }
}

function cancelAnimation(animation) {
  let activeInstances = anime.running;
  let index = activeInstances.indexOf(animation);
  activeInstances.splice(index, 1);
}

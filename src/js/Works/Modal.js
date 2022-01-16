import m from 'mithril';
import pics from "../../assets/img/*/*.jpg";
import { pictureAnimation, columnsExitAnim } from './Works'
import { cl } from '../utils';
import conf from '../../assets/img/pic-conf.toml'

const instaSvg = () => {
  return {
    view() {
      return m("svg.css-i6dzq1[viewBox='0 0 24 24'][width='24'][height='24'][stroke='currentColor'][stroke-width='2'][fill='none'][stroke-linecap='round'][stroke-linejoin='round']", {
        style: {
          width: '2rem',
          height: '2rem',
          color: 'inherit'
        }

      }, [
        m("rect[x='2'][y='2'][width='20'][height='20'][rx='5'][ry='5']"),
        m("path[d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z']"),
        m("line[x1='17.5'][y1='6.5'][x2='17.51'][y2='6.5']")
      ])
    }
  }
}

const LeftArrow = {
  view(v) {
    const cn = v.attrs.disabled ? '[disabled]' : ''

    return m('.left-arrow',
      m(`button${cn}`, {
        onclick() {
          v.attrs.parentState.picIndex -= 1
        }
      }, 'prev')
    )
  }
}

const RightArrow = {
  view(v) {
    const cn = v.attrs.disabled ? '[disabled]' : ''

    return m('.right-arrow',
      m(`button${cn}`, {
        onclick() {
          v.attrs.parentState.picIndex += 1
        }
      }, 'next')
    )
  }
}
const handleClose = (v) => {
  const isOpen = cl('.modal', 'contains', 'open')
  if (isOpen) {
    cl('.modal', 'remove', 'open')
    v.attrs.parentState.picIndex = 0
    const root = document.querySelector('.selected_root')
    cl('.overlay, .controls', 'add', 'hidden')
    cl('.selected_root', 'add', 'hidden')
    root.scrollTo({ top: 0, behavior: 'smooth' })

    columnsExitAnim.reverse()
    columnsExitAnim.play()
    if (pictureAnimation) {
      pictureAnimation.reverse()
      pictureAnimation.complete = () => {
        cl('.modal', 'add', 'hidden')
        cl('.nav', 'remove', 'hidden')
        cl('.c-scrollbar', 'remove', 'd-none')
        cl('.column-item.v-hidden', 'remove', 'v-hidden')
        window.scroller.start()

      }
      pictureAnimation.play()
    }
  }
}

const CloseButton = {
  oncreate(v) {
    window.addEventListener('resize', () => handleClose(v))
  },
  view(v) {
    return m('.close-button',
      m('button.flex', {
        onclick() { handleClose(v) }
      },
        m("svg[viewBox='0 0 50 9']", {
          style: {
            stroke: 'white',
            fill: 'white',
            width: '5rem',
            height: '5rem',
            color: '#282829'
          }
        },
          m("path[stroke=currentColor][fill=currentColor][d='m0 4.5 5-3m-5 3 5 3m45-3h-77']")
        ),
      ))
  }
}

function Modal() {
  return {
    oninit(v) {
      v.state.picIndex = 0
      v.state.selTitle = v.attrs.selTitle
      v.state.picsObj = pics[v.state.selTitle]
    },
    oncreate(v) {
      const root = document.querySelector('.selected_root')
      root.addEventListener('swiped-left', (_) => {
        if (v.state.picIndex < v.state.picsArray.length - 1) v.state.picIndex += 1
        m.redraw()
      })
      root.addEventListener('swiped-right', (_) => {
        if (v.state.picIndex > 0) v.state.picIndex -= 1
        m.redraw()
      })
    },
    view(v) {
      v.state.picsObj = pics[v.attrs.selTitle] || {}
      v.state.picsArray = Object.values(v.state.picsObj) || []
      return m('.modal.hidden[data-scroll][data-scroll-sticky][data-scroll-target=.main]', {
        style: {
          top: document.body.getAttribute('scrolled') + 'px'
        }
      },
        m('.selected_root',
          m('.carousel-wrap',
            m('.carousel',
              v.state.picsArray
                .map((url, i) => {
                  const clname = i === v.state.picIndex ? 'selected' : ''
                  const diff = v.state.picIndex - i
                  return m(`.img-wrap.${clname}[data-index=${i}]`, {
                    style: {
                      transform: `translate3d(${-diff * 100}%, ${0}px,  ${0}px)`,
                    },
                    key: url
                  },
                    m('img', { src: url })
                  )
                })
            ),
            m('.controls.hidden',
              m('.controls__bot',
                m('.space-between',
                  m(LeftArrow, { parentState: v.state, disabled: v.state.picIndex == 0 }),
                  m(RightArrow, { parentState: v.state, disabled: v.state.picIndex == v.state.picsArray.length - 1 }),
                ),
                m(`.controls__thumbs`, m('.thumbs-wrapper', {
                  style: {
                    transform: `translateX(-${v.state.picIndex * 20}%)`
                  }
                }, v.state.picsArray
                  .map((url, i) => m(`.thumb-wrap[data-index=${i}]${i == v.state.picIndex ? '.selected' : ''}`, {
                    key: url,
                    onclick() {
                      v.state.picIndex = i
                      const sx = 46 * i
                    }
                  },
                    m('img.placeholder', {
                      src: url,
                    })
                  )
                  ))
                ),
              ),
              m('.controls__top',
                m(CloseButton, { parentState: v.state }),
                m('a.insta-link', {
                  href: conf[v.attrs.selTitle]?.inst,
                  rel: 'noopener',
                  target: '_blank',
                }, m(instaSvg)),
                m('.date', conf[v.attrs.selTitle]?.date)
              ),
            ),
          ),
        ),
      )
    }
  }
}

export { SelectedPic, Modal }

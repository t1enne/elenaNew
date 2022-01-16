import m from 'mithril'
import locales from '../locales/common.toml'
import {
  transition,
  localStorageSupp
} from '../../app.js'
import { columnsExitAnim } from './Works/Works'
import { cl } from './utils'


module.exports = {
  view(v) {
    const docLang = document.documentElement.lang;

    const { me, about } = locales[docLang].nav

    return m('#nav.space-between[data-scroll]', {
      style: {
        top: document.body.getAttribute('scrolled') + 'px'
      }
    }, [
      m('.link-wrapper',
        m('a.home-link.underlined', {
          onclick() {
            if (location.pathname != '/home') {
              transition()
              // columnsExitAnim.direction = 'normal'
              // columnsExitAnim.play()
              setTimeout(() => {
                m.route.set('/')
              }, 1300);
            }
          }
        }, me)),
      m('.link-wrapper',
        m('a.about-link.underlined', {
          onclick() {
            if (location.pathname != '/about') {
              transition()
              columnsExitAnim.direction = 'normal'
              columnsExitAnim.play()
              setTimeout(() => {
                m.route.set('/about')
              }, 1300);
            }
          }
        },
          about)),
      // m('.link-wrapper',
      //   [
      //     m("select.underlined[name='lang'][id='lang'][form='language-switch']", {
      //       onchange(e) {
      //         v.tag.handleLang({ lang: e.srcElement.value, vnode: v })
      //         window.scroller.update()
      //       }
      //     },
      //       [
      //         m("option[value='en']",
      //           "en"
      //         ),
      //         m("option[value='ru']",
      //           "ru"
      //         ),
      //       ]
      //     )
      //   ]
      // ),
    ])
  }
}

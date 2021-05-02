import m from 'mithril'
import {
  transition,
} from '../../app.js'


module.exports = {
  view() {
    return m('.nav.space-between#nav[data-scroll][data-scroll-sticky][data-scroll-target=#main]', [
      m('.link-wrapper',
        m('a.home-link.underlined', {
          onclick() {
            if (location.hash != '#!/') {
              transition()
              setTimeout(() => {
                m.route.set('/')
              }, 1000);
            }
          }
        }, 'Elena Kustova')),
      m('.link-wrapper',
        m('a.works-link.underlined', {
          onclick() {
            if (location.hash != '#!/works') {
              transition()
              setTimeout(() => {
                m.route.set('/works')
              }, 1000);
            }
          }
        }, 'My Works')),
      m('.link-wrapper',
        m('a.about-link.underlined', {
            onclick() {
              if (location.hash != '#!/about') {
                transition()
                setTimeout(() => {
                  m.route.set('/about')
                }, 1000);
              }
            }
          },
          'About')),
    ])
  }
}

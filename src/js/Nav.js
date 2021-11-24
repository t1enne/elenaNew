import m from 'mithril'
import locales from '../locales/common.toml'
import {
  transition
} from '../../app.js'


function handleLang(lang) {
  let preferredLang = null
  if (lang) {
      preferredLang = lang
  } else if (localStorage.lang && lang) {
    preferredLang = lang
  } else {
      let language = window.navigator.languages.filter( l => {
          l.slice(2)
          if (l === "en" ) {
              return true
          } else if ( l === "ru") {
              return true
          }
      })[0]
      if (language.length === 0) {
          language = "en"
      }
      preferredLang = language
  }
  if (localStorage.lang != preferredLang) {
    localStorage.lang = preferredLang
  }
  
}

module.exports = {
  oncreate() {
    if( !localStorage.lang ) {
      handleLang(null)
    }
  },
  view(vnode) {
    vnode.state.lang = localStorage.lang
    handleLang(localStorage.lang)
    const { me, works, about } = locales[vnode.state.lang].nav

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
        }, me)),
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
        }, works)),
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
          about)),
          m('.link-wrapper',
          [
            m("label[for='lang']", 
              "lang: "
            ), 
            m("select[name='lang'][id='lang'][form='carform']", {
              onchange(e) {
                handleLang(e.target.value)
                vnode.state.lang = e.target.value
                  document.location.reload()
              }
            },
              [
                m("option[value='en']", 
                  "en"
                ),
                m("option[value='ru']", 
                  "ru"
                )
              ]
            )
          ]
          ),
    ])
  }
}

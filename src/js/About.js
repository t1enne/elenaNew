import m from "mithril";
import mypic from "../assets/mypic2.jpg";
import locales from "../locales/common.toml"
import { loadEvent } from '../../app'
import Footer from "./Footer";
// import Nav from "./Nav";
import { cl } from "./utils";

module.exports = {
  oncreate(_v) {
    if (window.scroller) {
      document.body.dispatchEvent(loadEvent({ stop: false, route: 'about' }))
      cl('.content', 'remove', 'hidden')
    } else {
      document.body.dispatchEvent(loadEvent({ stop: true, route: 'about' }))
    }
  },
  view(_v) {
    let docLang = document.documentElement.lang
    let { title, paragraphs } = locales[docLang].about

    return [m(".content#content.hidden[data-scroll]", [
      m(`.picture-wrapper[data-scroll]data-scroll-target=#content]`, m(`img[src=${mypic}]`)),
      m("p.text-wrapper",
        m(".title-wrapper[data-scroll][data-scroll-repeat]",
          m("section.content__item.content__item--home.content__item--current",
            m(".paragraph-wrapper",
              m(".content__paragraph", title)),
          )),
        m(".paragraph-wrapper", paragraphs.map(p => {
          return m(".text[data-scroll]", m("p", p))
        })
        )
      ),
    ]
    ),
    m(Footer)]
  }
};

import m from "mithril";
import Nav from "./Nav";
import Cursor from "./cursor";
import Footer from "./Footer";
import Loader from "./Loader";
import {cursor} from "../../app.js";
import mypic from "../assets/mypic.jpg";
import { about } from "../assets/text/about.toml";
import locales from "../locales/common.toml"

let scroll;
// const title = about.title
const paragraphs = about.paragraphs


module.exports = {
    oninit(vnode) {
        vnode.state.lang = localStorage.lang
    },
    async oncreate(vnode) {
        // select correct language
        if ( vnode.state.lang ) {
            const opt = document.querySelector(`option[value=${vnode.state.lang}]`)
            opt.selected = true    
        }
        // initialize smoothscroll
        //
        const loader = await Loader(vnode, scroll);
        scroll = loader.scroll;

        document.querySelector(".footer-nav .btt").onclick = () => {
            scroll.scrollTo("top");
        };
        if (!cursor) {
            new Cursor(document.querySelector("svg.cursor"));
        }
    },
    onremove() {
        scroll.destroy();
    },
    view(vnode) {
        vnode.state.title = locales[localStorage.lang].about.title
        // check width > 768px to apply sticky to picture
        vnode.state.width = window.innerWidth;
        let sticky = vnode.state.width > 768 ? "" : "";
        const lang = vnode.state.lang

        return m(
            ".about-page-wrapper[data-scroll-container]",
            m(
                "#main",
                m(Nav),
                m(".content#content[data-scroll]", [
                    m(`.picture-wrapper[data-scroll]${sticky}[data-scroll-target=#content]`, m(`img[src=${mypic}]`)),
                    m(
                        "p.text-wrapper[data-scroll]",
                        m(".title-wrapper[data-scroll]", m("section.content__item.content__item--home.content__item--current[data-scroll][data-scroll-speed=0]", m(".paragraph-wrapper", m(".content__paragraph[data-scroll]", vnode.state.title)), 
                        // m(".paragraph-wrapper", m(".content__paragraph[data-scroll]", "Me"))
                        )),
                        m(
                            ".paragraph-wrapper", paragraphs.map(p => {
                                return m(".text[data-scroll][data-scroll-speed=3]", m("p", p))
                            })
                        )
                    ),
                ])
            ),
            m(Footer)
        );
    },
};

import m from "mithril";
import Nav from "./Nav";
import { transition, cursor } from "../../app.js";
import mypic from "../assets/mypic.jpg";
import LocomotiveScroll from "locomotive-scroll";
import Cursor from "./cursor";
import Footer from "./Footer";

let scroll;

module.exports = {
    oncreate(vnode) {
        // initialize smoothscroll
        if (scroll) {
            scroll.destroy();
        }
        scroll = new LocomotiveScroll({
            el: document.querySelector(".about-page-wrapper"),
            smooth: true,
            reloadOnContextChange: true,
            smartphone: {
                smooth: true,
            },
        });


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
        // check width > 768px to apply sticky to picture
        vnode.state.width = window.innerWidth
        let sticky = vnode.state.width > 768 ?
            '[data-scroll-sticky]' :
            ''


        return m(
            ".about-page-wrapper[data-scroll-container]",
            m('#main',
            m(Nav),
            m(".content#content[data-scroll]", [
                m(`.picture-wrapper[data-scroll]${sticky}[data-scroll-target=#content]`, m(`img[src=${mypic}]`)),
                m(
                    "p.text-wrapper[data-scroll]",
                    m(".title-wrapper[data-scroll]", m("section.content__item.content__item--home.content__item--current[data-scroll][data-scroll-speed=0]", m(".paragraph-wrapper", m(".content__paragraph[data-scroll]", "About")), m(".paragraph-wrapper", m(".content__paragraph[data-scroll]", "Me")))),
                    m(
                        ".paragraph-wrapper",
                        m(".text[data-scroll][data-scroll-speed=3]", m("p", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),
                        m(".text[data-scroll][data-scroll-speed=3]", m("p", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),

                        m(".text[data-scroll][data-scroll-speed=3]", m("p", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),
                        m(".text[data-scroll][data-scroll-speed=3]", m("p", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),

                        m(".text[data-scroll][data-scroll-speed=3]", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),
                        m(".text[data-scroll][data-scroll-speed=3]", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),
                        m(".text[data-scroll][data-scroll-speed=3]", "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
                    )
                ),
            ])),
            m(Footer)
        );
    },
};

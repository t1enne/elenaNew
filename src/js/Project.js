import m from "mithril";
import anime from "animejs";
import imagesLoaded from "imagesloaded";
import Nav from "./Nav";
import { transition, cursor } from "../../app.js";
import LocomotiveScroll from "locomotive-scroll";
import Cursor from "./cursor";
import Roller from "./Roller";
import pics from "../assets/img/*/*.jpg";

let projectNames = [];
for (let key in pics) {
    projectNames.push(key);
}
let scroll;

function applyToArray(arr, func) {
    arr.forEach((elem) => {
        func(elem);
    });
}

function handleScroll(scroll) {
    const body = document.querySelector("body");
    const nav = document.querySelector("#nav");
    // const shards = document.querySelectorAll(".shard-spacer");
    const bgDark = "#1e1e1e";
    const bgLight = "#d7cca1";

    if (scroll > 85) {
        body.style.backgroundColor = bgDark;
        nav.style.color = "#ddd";
        // applyToArray(shards, (elem) => {
            // elem.style.backgroundColor = bgDark
        // });
    } else {
        body.style.backgroundColor = bgLight;
        nav.style.color = "#282828";
        // applyToArray(shards, (elem) => {
            // elem.style.backgroundColor = bgLight
        // });
    }
}

export default class Project {
    constructor() {}
    oninit(vnode) {
        vnode.state.pictures = Object.values(pics[projectNames[vnode.attrs.key]]);
        vnode.state.titleArr = projectNames[vnode.attrs.key].split(" ");
        vnode.state.scrolled = 0;
    }
    onremove() {
        scroll.destroy();
    }
    oncreate(vnode) {
        // initialize smoothscroll
        document.querySelector("body").style.backgroundColor = "#d7cca1";
        if (scroll) {
            scroll.destroy();
        }
        imagesLoaded(".img-wrapper img", () => {
            scroll = new LocomotiveScroll({
                el: document.querySelector(".project-page-wrapper"),
                smooth: true,
                multiplier: 2,
                smartphone: {
                    smooth: true,
                },
            });

            // uncover the shards found in Roller.js

            scroll.on("call", (func) => {
                if (func === 'uncover') {
                    document.querySelectorAll('.bg-shard').forEach(e => e.classList.add('uncover'))
                }
            })


            scroll.on("scroll", (args) => {
                const { limit, scroll } = args;
                vnode.state.scrolled = Math.round((scroll.y * 100) / limit.y);

                handleScroll(vnode.state.scrolled);
            });
        });
        if (!cursor) {
            new Cursor(document.querySelector("svg.cursor"));
        }
    }
    view(vnode) {
        let next;
        if (parseInt(vnode.attrs.key) + 1 == projectNames.length) {
            next = projectNames[0];
        } else {
            next = projectNames[parseInt(vnode.attrs.key) + 1];
        }

        // console.log(pics[next], next);

        return m(".project-page-wrapper[data-scroll-container]", [
            m(
                "#main",
                m(Nav),
                m(
                    ".title-wrapper[data-scroll][data-scroll-repeat]",
                    m(
                        "section.content__item.content__item--project.content__item--current[data-scroll][data-scroll-speed=1]",
                        vnode.state.titleArr.map((line) => {
                            return m(".paragraph-wrapper", m(".content__paragraph[data-scroll]", line));
                        })
                    )
                ),
                m(".divider[data-scroll][data-scroll-repeat]", m("span.divider-text", "scroll down")),
                m(
                    ".gallery.grid",
                    vnode.state.pictures.map((pic, i) => {
                        let speed = i % 2 === 0 ? 1 : 4;
                        // instead of ${speed} will put 1
                        return m(`.img-wrapper[data-scroll][data-scroll-speed=${speed}]`, m(`img[src=${pic}]`));
                    })
                ),

                m(Roller, {
                    id: parseInt(vnode.attrs.key),
                    nextId: parseInt(vnode.attrs.key) + 1 == projectNames.length ? 0 : parseInt(vnode.attrs.key) + 1,
                    next: next,
                    nextSrc: Object.values(pics[next])[0],
                    projectNames,
                    pics,
                })
            ),
        ]);
    }
}

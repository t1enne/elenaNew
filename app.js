import imagesLoaded from "imagesloaded";
import regeneratorRuntime from "regenerator-runtime";
// import 'src/assets/img/*'
import m from "mithril";
// import anime from 'animejs'
import LocomotiveScroll from "locomotive-scroll";
import pics from "./src/assets/img/*/*.jpg";
import Cursor from "./src/js/cursor";
// import {
// lerp,
// getMousePos
// } from './src/js/utils'
import About from "./src/js/About";
import Nav from "./src/js/Nav";
import Works from "./src/js/Works";
import Footer from "./src/js/Footer";
import Project from "./src/js/Project";
import Loader from "./src/js/Loader";

let main = document.querySelector("main");


let projects = {};

for (const key in pics) {
    //array of images
    projects[key] = Object.values(pics[key]);
}

let projectNames = Object.keys(projects);
let scroll, cursor;

window.onhashchange = transition;

let Home = {
    activeTitle: "",
    slidesIndex: 0,
    firstScroll: false,
    slidesLength: 0,
    picturesObj: {},
    pictures: [],
    scrolled: 0,
    // prev(vnode) {
    // let projects = document.querySelectorAll('.project-title')
    //
    // let slides = document.querySelectorAll('.slide')
    // let previews = document.querySelectorAll('.preview-slide')
    // let active = document.querySelector('.slide.active')
    // let activePreview = document.querySelector('.preview-slide.active')
    //
    //
    // active.classList.toggle('active')
    // active.classList.toggle('behind')
    // activePreview.classList.toggle('active')
    // activePreview.classList.toggle('behind')
    //
    // animProjectsOut(vnode.state.slidesIndex)
    //
    // if (vnode.state.slidesIndex - 1 === -1) {
    //   vnode.state.slidesIndex = slides.length - 1
    // } else {
    //   vnode.state.slidesIndex -= 1
    // }
    // animProjectsIn(vnode.state.slidesIndex)
    //
    // slides[vnode.state.slidesIndex].classList.toggle('active')
    // previews[vnode.state.slidesIndex].classList.toggle('active')
    //
    // setTimeout(() => {
    //   active.classList.toggle("behind");
    //   activePreview.classList.toggle("behind");
    // }, 1000);
    // },
    // next(vnode) {
    //   let projects = document.querySelectorAll('.project-title')
    //
    //   let slides = document.querySelectorAll('.slide')
    //   let previews = document.querySelectorAll('.preview-slide')
    //   let active = document.querySelector('.slide.active')
    //   let activePreview = document.querySelector('.preview-slide.active')
    //
    //
    //   active.classList.toggle('active')
    //   active.classList.toggle('behind')
    //   activePreview.classList.toggle('active')
    //   activePreview.classList.toggle('behind')
    //
    //   animProjectsOut(vnode.state.slidesIndex)
    //
    //   if (vnode.state.slidesIndex + 1 === slides.length) {
    //     vnode.state.slidesIndex = 0
    //   } else {
    //     vnode.state.slidesIndex += 1
    //   }
    //   animProjectsIn(vnode.state.slidesIndex)
    //
    //   slides[vnode.state.slidesIndex].classList.toggle('active')
    //   previews[vnode.state.slidesIndex].classList.toggle('active')
    //
    //   setTimeout(() => {
    //     active.classList.toggle("behind");
    //     activePreview.classList.toggle("behind");
    //   }, 1000);
    // },
    async oncreate(vnode) {
        // if (scroll != null) scroll.init()
        const loader = await Loader(vnode, scroll)

        scroll = loader.scroll;

        // initialize custom cursor
        cursor = new Cursor(document.querySelector("svg.cursor"));

        // back to top listener
        document.querySelector(".footer-nav .btt").onclick = () => {
            scroll.scrollTo("top");
        };
    },
    onremove() {
        scroll.destroy();
    },
    view(vnode) {
        // let projectDate = Object.keys(Object.values(projects)[vnode.state.slidesIndex])
        return [
            m(
                ".home-page-wrapper[data-scroll-id=home-section]",
                m(
                    "#main",
                    m(Nav),
                    m(
                        ".title-wrapper[data-scroll][data-scroll-repeat]",
                        m(
                            "section.content__item.content__item--home.content__item--current[data-scroll-speed=2][data-scroll]",
                            m(".paragraph-wrapper", m(".content__paragraph[data-splitting][data-scroll]", "Elena Kustova")),
                            m(".paragraph-wrapper", m(".content__paragraph[data-splitting][data-scroll]", "Russian")),
                            m(".paragraph-wrapper", m(".content__paragraph[data-splitting][data-scroll]", "Photographer")),
                            m(".paragraph-wrapper", m(".content__paragraph[data-splitting][data-scroll]", "Based in Italy"))
                        )
                    ),
                    m(".gallery[data-scroll]", [
                        //

                        // m('.slides-wrapper',
                        // m('.work-selector-wrapper.grid', [
                        // m('.preview[data-scroll][data-scroll-speed=2]',
                        // [
                        // m('.project-index', `${vnode.state.slidesIndex+1} / ${vnode.state.slidesLength}`),
                        // m('.preview-slides',
                        // projectNames.map((name, i) => {
                        // return m(`.preview-slide.${i == 0 ? '.active' : '' }`, {
                        // style: `background-image: url(${pics[name][name + '1']});`
                        // })
                        // })),
                        // m('.buttons.space-between', [
                        // m('.button.flex.prev', {
                        // onclick: () => {
                        // vnode.state.prev(vnode)
                        // }
                        // },
                        // m("svg.arrows.arrow-left[xmlns='http://www.w3.org/2000/svg'][width='24'][height='24'][viewBox='0 0 24 24'][fill='none'][stroke='currentColor'][stroke-width='2'][stroke-linecap='round'][stroke-linejoin='round']",
                        // [
                        // m("line[x1='19'][y1='12'][x2='5'][y2='12']"),
                        // m("polyline[points='12 19 5 12 12 5']")
                        // ]
                        // ), m('.text', 'prev')),
                        // m('.button.flex.next', {
                        // onclick(e) {
                        // vnode.state.next(vnode)
                        // }
                        // },
                        // m('.text', 'next'),
                        // m("svg.arrows.arrow-right[xmlns='http://www.w3.org/2000/svg'][width='24'][height='24'][viewBox='0 0 24 24'][fill='none'][stroke='currentColor'][stroke-width='2'][stroke-linecap='round'][stroke-linejoin='round']",
                        // [
                        // m("line[x1='5'][y1='12'][x2='19'][y2='12']"),
                        // m("polyline[points='12 5 19 12 12 19']")
                        // ]
                        // )
                        // )
                        // ])
                        // ],
                        // [
                        // m('.project-titles.flex-column', projectNames.map((name, i) => {
                        // return m(`h1.project-title.project-${name}[index=${i}]`, projectNames[i])
                        // }))
                        // ]
                        // )
                        // ]),
                        // m('.slides',
                        // m('.work-title-wrapper', [
                        // m('p.work-title', `- tbd -`),
                        // m('p.explore-project', 'explore')
                        // ]),
                        // projectNames.map((name, i) => {
                        // return m(`.slide${i == 0 ? '.active' : ''}`, m('img', {
                        // src: projects[name][0]
                        // }))
                        // })
                        // )
                        // ),

                        //
                        m(".divider[data-scroll][data-scroll-repeat]", m("span.divider-text", "some of my pictures")),
                        m(
                            ".gallery-pictures-wrapper",
                            projectNames.map((key, i) => {
                                let url = projects[key][0];
                                let delay = i % 2 === 0 ? ".9" : ".4";
                                // return projects[key].map((url, y) => {
                                return m(
                                    ".gallery-pic[style=padding-top:-50%]",
                                    m(
                                        `a.img-wrapper[data-scroll][data-scroll-delay=${delay}][data-scroll-speed=${delay * 4}]`,
                                        {
                                            onclick() {
                                                transition();
                                                setTimeout(() => {
                                                    m.route.set(`/project/${i}`);
                                                }, 1000);
                                            },
                                            onmouseenter: () => {
                                                let title = document.querySelector(`.pic-title.title-${i}`);
                                                title.classList.remove("hidden");
                                                title.classList.add("animated");
                                            },
                                            onmouseleave: () => {
                                                let title = document.querySelector(`.pic-title.title-${i}`);
                                                title.classList.remove("animated");
                                                title.classList.add("hidden");
                                            },
                                        },
                                        m(`img[title=${key}]`, {
                                            src: url,
                                        }),
                                        m(".pic-title-wrapper", m(`.pic-title.title-${key}.title-${i}.hidden`, key))
                                    )
                                );
                                // })
                            })
                        ),
                    ])
                ),
                m(Footer)
            ),
        ];
    },
};

m.route(main, "/home", {
    "/home": Home,
    "/about": About,
    "/works": Works,
    "/project/:key": Project,
});

function transition() {
    document.querySelectorAll(".is-inview").forEach((item) => {
        item.classList.remove("is-inview");
    });
    // document.querySelector("body").style.backgroundColor = "#d7cca1";
    const body = document.querySelector("body");

    body.classList.remove("dark");
}

exports.transition = transition;
exports.scroll = scroll;
exports.cursor = cursor;
exports.projects = projects;

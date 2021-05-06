import m from "mithril";
import anime from "animejs";
import { transition } from "../../app";

function applyToArray(arr, func) {
    arr.forEach((elem) => {
        func(elem);
    });
}

async function wait(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
}

async function revealer(vnode, projectNames, operator) {
    const shards = document.querySelectorAll(".bg-shard");
    const text = document.querySelector(".next-section__project-text");

    const options = {
        duration: 500,
        easing: "easeInOutQuad",
        delay: anime.stagger(150),
    };

    let anim = anime({
        targets: text,
        duration: options.duration * 2,
        // easing: options.easing,
        begin() {
            text.style.opacity = 0
            shards.forEach((e) => {
                e.classList.remove("uncover");
            });
        },
        complete() {
            text.style.opacity = 1
            shards.forEach((e) => {
                e.classList.add("uncover");
            });
            m.redraw();
        },
    });

    if (operator === "-") {
        vnode.state.id -= 1;
        if (vnode.state.id < 0) {
            vnode.state.id = projectNames.length - 1;
        }
    } else if (operator === "+") {
        vnode.state.id += 1;
        if (vnode.state.id > projectNames.length - 1) {
            vnode.state.id = 0;
        }
    }
    const pr = projectNames[vnode.state.id];
    await wait(options.duration);
    return pr;
}

// async function cardFlip(vnode, projectNames, operator) {
    // const fronts = document.querySelectorAll(".bg-shard__front");
    // const backs = document.querySelectorAll(".bg-shard__back");
    // const text = document.querySelector(".next-section__project-text");

//
    // const options = {
        // duration: 500,
        // easing: "easeInOutQuad",
        // delay: anime.stagger(150),
    // };
//
    // anime({
        // targets: text,
        // opacity: 0,
        // duration: options.duration,
        // easing: options.easing,
    // });
//
    // anime({
        // targets: fronts,
        // rotateY: 180,
        // opacity: 0,
        // duration: options.duration,
        // easing: options.easing,
        // delay: options.delay,
    // });
//
    // anime({
        // targets: backs,
        // rotateY: [-180, 0],
        // complete: flipCards,
        // duration: options.duration,
        // easing: options.easing,
        // delay: options.delay,
    // });
//
    // function flipCards() {
        // anime({
            // targets: text,
            // opacity: 1,
        // });
//
        // anime({
            // targets: fronts,
            // rotateY: [-180, 0],
            // opacity: 1,
            // begin: m.redraw,
            // duration: options.duration,
            // easing: options.easing,
            // delay: options.delay,
        // });
//
        // anime({
            // targets: backs,
            // rotateY: 180,
            // duration: options.duration,
            // easing: options.easing,
            // delay: options.delay,
        // });
    // }
//
    // if (operator === "-") {
        // vnode.state.id -= 1;
        // if (vnode.state.id < 0) {
            // vnode.state.id = projectNames.length - 1;
        // }
    // } else if (operator === "+") {
        // vnode.state.id += 1;
        // if (vnode.state.id > projectNames.length - 1) {
            // vnode.state.id = 0;
        // }
    // }
    // const pr = projectNames[vnode.state.id];
    // await wait(options.duration);
    // return pr;
// }

module.exports = {
    id: null,
    next: null,
    nextPic: null,
    pics: [],
    oninit(vnode) {},
    oncreate() {},
    view(vnode) {
        let { nextId, next, nextSrc, projectNames, pics } = JSON.parse(JSON.stringify(vnode.attrs));
        if (!vnode.state.next) {
            vnode.state.next = next;
        }

        if (!vnode.state.id && vnode.state.id != 0) {
            vnode.state.id = nextId;
        }
        const nextPics = Object.values(pics[vnode.state.next]);

        vnode.state.nextPic = nextPics[0];

        return m(".roller[data-scroll][data-scroll-call=uncover]", [
            m(
                ".next-container.grid",

                m(
                    ".next-section.grid",
                    {
                        onclick() {
                            transition();
                            setTimeout(() => {
                                m.route.set(`/project/${vnode.state.id}`);
                            }, 1000);
                        },
                    },
                    m(
                        ".next-section__img-wrapper",
                        {
                            // style: `background-image: url(${vnode.state.nextPic})`,
                        },

                        m(
                            ".bg-shard[data-scroll]",
                            m(
                                ".bg-shard-sides",
                                m(".bg-shard__front", {
                                    style: `background-image: url(${nextPics[0]})`,
                                }),
                                m(".bg-shard__back")
                            )
                        ),
                        // m(".shard-spacer"),
                        m(
                            ".bg-shard[data-scroll]",
                            m(
                                ".bg-shard-sides",
                                m(".bg-shard__front", {
                                    style: `background-image: url(${nextPics[1]})`,
                                }),
                                m(".bg-shard__back")
                            )
                        ),
                        // m(".shard-spacer"),
                        m(
                            ".bg-shard[data-scroll]",
                            m(
                                ".bg-shard-sides",
                                m(".bg-shard__front", {
                                    style: `background-image: url(${nextPics[2]})`,
                                }),
                                m(".bg-shard__back")
                            )
                        )
                    ),
                    m(".next-section__project-text", vnode.state.next)
                ),
                m(
                    ".low-text.flex",
                    m(
                        ".prev",
                        {
                            async onclick() {
                                // vnode.state.next = await cardFlip(vnode, projectNames, "-");
                                vnode.state.next = await revealer(vnode, projectNames, "-");
                            },
                        },
                        m(".prev__text", "prev")
                    ),
                    m(
                        ".next",
                        {
                            async onclick() {
                                // vnode.state.next = await cardFlip(vnode, projectNames, "+");
                                vnode.state.next = await revealer(vnode, projectNames, '+')
                            },
                        },
                        m(".next__text", "next")
                    )
                )
            ),
        ]);
    },
};

import imagesLoaded from "imagesloaded";
import LocomotiveScroll from "locomotive-scroll";
import pics from "../assets/img/*/*.jpg";
let allSources = [],
    scroll;

for (const key in pics) {
    //array of images
    allSources = allSources.concat(Object.values(pics[key]));
}

let allImages = allSources.map((src) => {
    let img = document.createElement("img");
    img.src = src;
    return img;
});

export default function Loader(vnode, scroll, mult) {
    let imagesPromise = new Promise((resolve) => {
        let images = imagesLoaded(allImages);

        if (scroll) {
            scroll.destroy();
        }

        images.on("progress", (instance) => {
            const len = instance.elements.length;
            const count = instance.progressedCount;
            const perc = Math.round((count * 100) / len);
            document.querySelector(".loader__text").textContent = `${perc}%`;
        });

        images.on("done", () => {
            const loader = document.querySelector(".loader");
            loader.classList.add("loaded");

            scroll = new LocomotiveScroll({
                el: document.querySelector("main > div"),
                multiplier: mult ? mult : 1,
                smooth: true,
                smartphone: {
                    smooth: true,
                },
            });
            scroll.on("scroll", (args) => {
                const { limit } = args;
                vnode.state.scrolled = Math.round((args.scroll.y * 100) / limit.y);
                // if (vnode.state.scrolled > 50) {
                // scroll.update();
                // }
            });
            scroll.update();
            return resolve({ images, scroll });
        });
    });
    return imagesPromise;
}

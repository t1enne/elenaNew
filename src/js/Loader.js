import anime from "animejs";
import m from "mithril";
import imagesLoaded from "imagesloaded";
import LocomotiveScroll from "locomotive-scroll";
import pics from "../assets/img/*/*.jpg";
import { beginLoadingAnim, completeLoadingAnim } from "./Title";
import { cl } from "./utils";
let allSources = [];

for (const key in pics) {
  //array of images
  allSources.push(Object.values(pics[key])[0]);
}

let firstImages = allSources.map((src) => {
  let img = document.createElement("img");
  img.src = src;
  return img;
});

function handleDone(route) {
  console.log({route})
  cl(".loader", "add", "loaded");
  cl(".nav", "remove", "hidden");

  anime({
    targets: ".language-picker *",
    opacity: [1, 0],
    easing: "easeInOutQuad",
    delay: anime.stagger(50),
    rotateZ: anime.stagger([0, 5], { grid: [2, 3], from: "center", axis: "x" }),
    translateY: 50,
    duration: 850,
    complete() {
      cl(".language-picker", "add", "v-hidden");
    },
  });

  anime({
    targets: ".loader",
    opacity: 0,
    duration: 1000,
    easing: "easeOutQuad",
    complete() {
      cl(".nav", "remove", "hidden");
      if (route == "about") cl(".content", "remove", "hidden");
      m.redraw();
    },
  });

  if (route == "about") {
    setTimeout(
      () => completeLoadingAnim({ animateColumns: false }).play(),
      500
    );
  } else {
    setTimeout(() => completeLoadingAnim({ animateColumns: true }).play(), 500);
  }
}

function handleLang(e) {
  document.documentElement.lang = e.target.textContent;
  cl(".language-picker button", "remove", "selected");
  cl(".language-picker button").forEach((b) =>
    b.setAttribute("disabled", "true")
  );
  cl(e.target, "add", "selected");
}

export default function Loader({ scroll, stop, route }) {
  console.log({route})
  let langPicked = false,
    imagesDone = false;

  if (!scroll) {
    beginLoadingAnim().play();

    let imagesPromise = new Promise((resolve) => {
      let images = imagesLoaded(firstImages);

      images.on("progress", (instance) => {
        const len = instance.elements.length;
        const count = instance.progressedCount;
        const perc = Math.round((count * 100) / len);
        document.querySelector(".loader__text").textContent = `${perc}%`;
        document.querySelector(
          ".loader__bar__progress"
        ).style.transform = `scaleX(${perc / 100})`;
      });

      cl(".language-picker button").forEach((b) => {
        b.addEventListener("click", (e) => {
          handleLang(e);
          langPicked = true;
          if (imagesDone) handleDone(route);
        });
      });

      images.on("done", () => {
        const loaderText = cl(".loader__text");
        imagesDone = true;
        anime({
          targets: loaderText,
          opacity: [1, 0],
          duration: 500,
          easing: "easeOutQuad",
          complete() {
            cl(".language-picker", "remove", "hidden");

            // if (route == "about") cl(".content", "remove", "hidden");
            m.redraw();
          },
        });
        if (langPicked) handleDone(route);
      });

      if (!window.scroller | (scroll != false)) {
        window.scroller = new LocomotiveScroll({
          el: document.querySelector(".main"),
          lerp: 0.13,
          smooth: true,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
          reloadOnContextChange: true,
        });

        window.addEventListener("resize", () => {
          window.scroller.update();
          m.redraw();
        });

        if (stop) window.scroller.stop();
      }
      return resolve({ images });
    });
    return imagesPromise;
  }
}

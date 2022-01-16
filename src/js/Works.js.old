import m from "mithril";
import LocomotiveScroll from "locomotive-scroll";
import anime from "animejs";
import Cursor from "./cursor";
import { transition, cursor } from "../../app.js";
import { lerp, getMousePos, map, clamp } from "./utils";
import pics from "../assets/img/*/*.jpg";
import Nav from "./Nav";
import Loader from "./Loader";
import MenuItem from "./menuItem";

let projects = {};
for (const key in pics) {
  projects[key] = Object.values(pics[key]);
}

let scroll;

export default class Works {
  constructor() {
    this.menuItems = Object.keys(projects);

    // menu item properties that will animate as we move the mouse around the menu
    // we will be using interpolation to achieve smooth animations.
    // the “previous” and “current” values are the values to interpolate.
    // the value applied to the element, this case the image element (this.DOM.reveal) will be a value between these two values at a specific increment.
    // the amt is the amount to interpolate.
    this.animatableProperties = {
      // translationX
      tx: {
        previous: 0,
        current: 0,
        amt: 0.08,
      },
      // translationY
      ty: {
        previous: 0,
        current: 0,
        amt: 0.08,
      },
      // Rotation angle
      rotation: {
        previous: 0,
        current: 0,
        amt: 0.08,
      },
      // CSS filter (blur) value
      blur: {
        previous: 0,
        current: 0,
        amt: 0.08,
      },
    };
    // show the menu items (initial animation where each menu item gets revealed)
  }
  // initial animation for revealing the menu items
  showMenuItems() {
    anime({
      targets: ".menu__item-textinner",
      translateY: ["100%", "0%"],
      easing: "easeInOutQuad",
      duration: 500,
      delay: anime.stagger(70),
    });
  }
  async oncreate(vnode) {
    if (!cursor) {
      new Cursor(document.querySelector("svg.cursor"));
    }

    //show menu items

    const loader = await Loader(vnode);

    scroll = loader.scroll;

    this.showMenuItems();
  }
  onbeforeremove() {
    scroll.destroy();
    anime({
      targets: ".menu__item-textinner",
      translateY: [0, 100],
      easing: "easeInOutQuad",
      duration: 300,
      delay: anime.stagger(30),
    });
  }
  view() {
    return m(
      ".works-page-wrapper[data-scroll-container]",
      m(
        "#main",
        m(Nav),
        m(
          ".menu-items-wrapper",
          this.menuItems.map((item, index) => {
            return m(MenuItem, {
              item,
              index,
              animProps: this.animatableProperties,
              url: projects[item][0],
            });
          })
        ),
        m(
          ".divider[data-scroll][data-scroll-repeat][style=padding-bottom: 4rem;]",
          m("span.divider-text", "and more to come!")
        )
      )
    );
  }
}

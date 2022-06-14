import m from 'mithril';
import Home from "./src/js/Home";
import Nav from "./src/js/Nav"
import About from "./src/js/About";
// import Project from "./src/js/Project";
import Loader from "./src/js/Loader";
import Cursor from "./src/js/cursor";
import { Title } from "./src/js/Title";
import { cl } from './src/js/utils';

let root = cl(".mithril_root");
let cursor = new Cursor(cl("svg.cursor"));
let loader = null

function localStorageSupp() {
  try {
    localStorage.setItem('test', 'test')
    localStorage.removeItem('test')
    return true
  } catch (e) {
    return false
  }
}

const loadEvent = ({ stop, route }) => {
  return new CustomEvent('mithril-loaded', {
    detail: {
      stop,
      route
    }
  })
}

document.body.addEventListener('mithril-loaded', async (le) => {
  console.log('load event')

  const { stop, route } = le.detail
  if ('scroller' in window) {
    window.scroller.destroy()
    window.scroller.init()
    window.scroller.update()
    if (stop) window.scroller.stop()
  }

  if (!loader) loader = await Loader({ stop, route })
  

  window.scroller.on('scroll', (pos) => document.body.setAttribute('scrolled', pos.scroll.y))
  window.scroller.on('call', (e) =>  e === 'hide' && cl('.nav', 'toggle', 'hidden'))
})


m.mount(cl('.nav'), Nav)
m.mount(cl('.title_root'), Title)

// m.route.prefix = '#'
m.route(root, "/", {
  "/": Home,
  "/about": About,
});

function transition() {
  cl(".is-inview").forEach((item) => {
    item.classList.remove("is-inview");
  });
  cl('body').classList.remove("dark");
}

!function(t, e) { "use strict"; "function" != typeof t.CustomEvent && (t.CustomEvent = function(t, n) { n = n || { bubbles: !1, cancelable: !1, detail: void 0 }; var a = e.createEvent("CustomEvent"); return a.initCustomEvent(t, n.bubbles, n.cancelable, n.detail), a }, t.CustomEvent.prototype = t.Event.prototype), e.addEventListener("touchstart", function(t) { if ("true" === t.target.getAttribute("data-swipe-ignore")) return; s = t.target, r = Date.now(), n = t.touches[0].clientX, a = t.touches[0].clientY, u = 0, i = 0 }, !1), e.addEventListener("touchmove", function(t) { if (!n || !a) return; var e = t.touches[0].clientX, r = t.touches[0].clientY; u = n - e, i = a - r }, !1), e.addEventListener("touchend", function(t) { if (s !== t.target) return; var e = parseInt(l(s, "data-swipe-threshold", "20"), 10), o = parseInt(l(s, "data-swipe-timeout", "500"), 10), c = Date.now() - r, d = "", p = t.changedTouches || t.touches || []; Math.abs(u) > Math.abs(i) ? Math.abs(u) > e && c < o && (d = u > 0 ? "swiped-left" : "swiped-right") : Math.abs(i) > e && c < o && (d = i > 0 ? "swiped-up" : "swiped-down"); if ("" !== d) { var b = { dir: d.replace(/swiped-/, ""), touchType: (p[0] || {}).touchType || "direct", xStart: parseInt(n, 10), xEnd: parseInt((p[0] || {}).clientX || -1, 10), yStart: parseInt(a, 10), yEnd: parseInt((p[0] || {}).clientY || -1, 10) }; s.dispatchEvent(new CustomEvent("swiped", { bubbles: !0, cancelable: !0, detail: b })), s.dispatchEvent(new CustomEvent(d, { bubbles: !0, cancelable: !0, detail: b })) } n = null, a = null, r = null }, !1); var n = null, a = null, u = null, i = null, r = null, s = null; function l(t, n, a) { for (; t && t !== e.documentElement;) { var u = t.getAttribute(n); if (u) return u; t = t.parentNode } return a } }(window, document);

export { loadEvent, transition, localStorageSupp }

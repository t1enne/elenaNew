// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;

// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;

const clamp = (num, min, max) => num <= min ? min : num >= max ? max : num;

// Gets the mouse position
const getMousePos = (e) => {
  let posx = 0;
  let posy = 0;
  if (!e) e = window.event;
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  }
  else if (e.clientX || e.clientY) {
    posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
    posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
  }

  return { x: posx, y: posy }
};

const cl = (items, action, classname) => {
  let nodeArray = []
  if (typeof items === 'string') {
    nodeArray = [...document.querySelectorAll(items)]
  } else if (items.__proto__ === [].__proto__) {
    nodeArray = items
  } else if (items instanceof HTMLElement) {
    nodeArray.push(items)
  } else {
    nodeArray = [...items]
  }
  if (action && classname) {
    return nodeArray.map(n => n && n.classList[action](classname))
  } else {
    if (nodeArray.length == 0) return null
    else if (nodeArray.length == 1) return nodeArray[0]
    return nodeArray
  }

}

export { map, lerp, clamp, getMousePos, cl };

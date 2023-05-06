import barba from "@barba/core";
import anime, { AnimeAnimParams } from "animejs";
const duration = 150;

barba.init({
  transitions: [
    {
      name: "page-change",
      sync: true,
      leave({ current }) {
        const onComplete = this.async!();
        anime({
          targets: current.container,
          opacity: [1, 0],
          duration,
          easing: "linear",
          complete() {
            onComplete();
          },
        });
      },
      enter({ next }) {
        anime({
          targets: next.container,
          opacity: [0, 1],
          duration,
          easing: "linear",
          delay: duration,
        });
      },
    },
  ],
});

export const textFadeInKeyFrames: AnimeAnimParams[] = [
  {
    opacity: 0,
    translateY: "200%",
    skew: (_, i) => (i % 2 ? "10deg" : "-10deg"),
    rotate: (_, i) => (i % 2 ? "10deg" : "-10deg"),
    duration: 200,
    easing: "easeInOutQuad",
  },
  {
    opacity: 1,
    translateY: "0%",
    skew: "0deg",
    rotate: "0deg",
    duration: 1000,
    easing: "easeInOutQuad",
  },
];

export const textFadeInAnim = (targets) =>
  anime({
    targets,
    keyframes: textFadeInKeyFrames,
  });

// const completeLoadingAnim = ({ animateColumns }) => anime({
//   targets: '.title_root .content__paragraph',
//   opacity: 0,
//   translateY: '-200%',
//   skew: (_, i) => i % 2 ? '-10deg' : '10deg',
//   rotate: (_, i) => i % 2 ? '-10deg' : '10deg',
//   duration: 1500,
//   delay: 500,
//   easing: 'easeInOutQuad',
//   autoplay: false,
//   // complete() { titleAnim() }
//   complete() {
//     if (animateColumns) { columnsAnim().play() }
//     else {
//       cl('.greeter', 'add', 'd-none');
//       window.scroller.update()
//       window.scroller.start()
//     }
//   }
// })

// const titleAnim = () => anime({
//   targets: '.title_root',
//   height: '0vh',
//   duration: 1000,
//   easing: 'easeInOutCubic',
//   begin() {
//     cl('.nav', 'remove', 'visible')
//     columnsAnim().play()
//   },
// })
//
// const columnsAnim = () => anime({
//   targets: '.column',
//   opacity: [0, 1],
//   translateY: (_, i) => i == 1 ? ['-50%', 0] : ['50%', 0],
//   duration: 1500,
//   easing: 'easeOutQuart',
//   complete() {
//     cl('.greeter', 'add', 'd-none')
//     cl('.c-scrollbar', 'remove', 'hidden')
//     window.scroller.update()
//     window.scroller.start()
//   }
// })

// const Title = {
//
//   view() {
//     return [m(
//       ".title-wrapper[data-scroll][data-scroll-repeat]",
//       m(
//         "section.content__item.content__item--home.content__item--current[data-scroll-speed=2][data-scroll]",
//
//       ),
//     ),
//     ]
//   }
// }

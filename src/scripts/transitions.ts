import barba from "@barba/core";
import anime from "animejs";
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

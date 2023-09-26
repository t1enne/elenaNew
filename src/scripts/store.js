import Alpine from "alpinejs";

document.addEventListener("alpine:init", () => {
  Alpine.store("darkMode", {
    on: false,
    init() {
      const system = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const hasLocal = localStorage.theme;
      this.on = hasLocal !== "light" && system;
    },
    toggle() {
      this.on = !this.on;
      localStorage.theme = this.on ? "dark" : "light";
    },
  });
});

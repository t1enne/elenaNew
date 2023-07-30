import Alpine from "alpinejs";

document.addEventListener("alpine:init", () => {
  Alpine.store("darkMode", {
    init() {
      this.on = localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
    },
    on: false,
    toggle() {
      this.on = !this.on;
      localStorage.theme = this.on ? "dark" : "light";
    },
  });
});

import Alpine from "alpinejs";

document.addEventListener("alpine:init", () => {
  Alpine.store("darkMode", {
    init() {
      // @ts-ignore
      this.on =
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
    },
    on: false,
    toggle() {
      // @ts-ignore
      this.on = !this.on;
    },
  });
});

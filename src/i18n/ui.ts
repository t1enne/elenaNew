export const languages = {
  en: "English",
  ru: "Russian",
};

export const defaultLang = "en";

export const ui = {
  en: {
    "nav.home": "home",
    "nav.works": "works",
    "nav.about": "about",
    "nav.insta": "Instagram",
    "nav.contact": "Get in touch",
    "c.contact_me":
      `You can find on my socials. I'm especially active on <a class="text-gradient" id="ig-link" target="_blank" rel="noopener" href="https://instagram.com/misskustova">Instagram</a>, where I post my work and share my life.\n\nI am based in Italy, near Venice, but I'm available for work in Italy or Europe.\n\nFeel free to DM me on my socials or fill the form and send me an <button id="mailer" class="text-gradient" @click="$refs.dialog.showModal()">email!</button>`,
    "c.about_me":
      "My name is Elena, and I'm a photographer working in Italy. My love for photography flourished in me as passion does in young hearts, and now I can't imagine my life without it. In my shoots I try to express each person's unique beauty, effortlessly and naturally. My favourite shoots are love-stories, catching real feelings between people and imprinting them on my shots. I base my style on three ideas - lightness, naturalness and a movie-like atmosphere. The colors in my pictures resemble old film, and that's a timeless classic. Such pictures will never go out of style and you will keep falling in love them long after the shoot ✨",
  },
  ru: {
    "nav.home": "glavnaya",
    "nav.works": "raboty",
    "nav.about": "pro menya",
    "nav.contact": "kontakty",
    "c.contact_me":
      "You can contact me via the form below, or reach me on my socials",
    "c.about_me":
      "My name is Elena, and I'm a photographer working in Italy. My love for photography flourished in me as passion does in young hearts, and now I can't imagine my life without it. In my shoots I try to express each person's unique beauty, effortlessly and naturally. My favourite shoots are love-stories, catching real feelings between people and imprinting them on my shots. I base my style on three ideas - lightness, naturalness and a movie-like atmosphere. The colors in my pictures resemble old film, and that's a timeless classic. Such pictures will never go out of style and you will keep falling in love them long after the shoot ✨",
  },
} as const;

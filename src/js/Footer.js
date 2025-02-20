import m from "mithril";
import { transition } from "../../app";
import { cl } from "./utils";
import locales from "../locales/common.toml";

let vkSvg = {
  view() {
    return m(
      "svg[version='1.1'][id='Layer_1'][xmlns='http://www.w3.org/2000/svg'][xmlns:xlink='http://www.w3.org/1999/xlink'][x='0px'][y='0px'][viewBox='0 0 304.36 304.36'][xml:space='preserve']",
      {
        style: {
          "enable-background": "new 0 0 304.36 304.36",
        },
      },
      [
        m(
          "g[id='XMLID_1_']",
          m(
            "path[id='XMLID_807_'][d='M261.945,175.576c10.096,9.857,20.752,19.131,29.807,29.982 c4,4.822,7.787,9.798,10.684,15.394c4.105,7.955,0.387,16.709-6.746,17.184l-44.34-0.02c-11.436,0.949-20.559-3.655-28.23-11.474 c-6.139-6.253-11.824-12.908-17.727-19.372c-2.42-2.642-4.953-5.128-7.979-7.093c-6.053-3.929-11.307-2.726-14.766,3.587 c-3.523,6.421-4.322,13.531-4.668,20.687c-0.475,10.441-3.631,13.186-14.119,13.664c-22.414,1.057-43.686-2.334-63.447-13.641 c-17.422-9.968-30.932-24.04-42.691-39.971C34.828,153.482,17.295,119.395,1.537,84.353C-2.01,76.458,0.584,72.22,9.295,72.07 c14.465-0.281,28.928-0.261,43.41-0.02c5.879,0.086,9.771,3.458,12.041,9.012c7.826,19.243,17.402,37.551,29.422,54.521 c3.201,4.518,6.465,9.036,11.113,12.216c5.142,3.521,9.057,2.354,11.476-3.374c1.535-3.632,2.207-7.544,2.553-11.434 c1.146-13.383,1.297-26.743-0.713-40.079c-1.234-8.323-5.922-13.711-14.227-15.286c-4.238-0.803-3.607-2.38-1.555-4.799 c3.564-4.172,6.916-6.769,13.598-6.769h50.111c7.889,1.557,9.641,5.101,10.721,13.039l0.043,55.663 c-0.086,3.073,1.535,12.192,7.07,14.226c4.43,1.448,7.35-2.096,10.008-4.905c11.998-12.734,20.561-27.783,28.211-43.366 c3.395-6.852,6.314-13.968,9.143-21.078c2.096-5.276,5.385-7.872,11.328-7.757l48.229,0.043c1.43,0,2.877,0.021,4.262,0.258 c8.127,1.385,10.354,4.881,7.844,12.817c-3.955,12.451-11.65,22.827-19.174,33.251c-8.043,11.129-16.645,21.877-24.621,33.072 C252.26,161.544,252.842,166.697,261.945,175.576L261.945,175.576z M261.945,175.576']",
            {
              style: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
              },
            },
          ),
        ),
        m("g"),
        m("g"),
        m("g"),
        m("g"),
        m("g"),
        m("g"),
        m("g"),
        m("g"),
        m("g"),
        m("g"),
        m("g"),
        m("g"),
        m("g"),
        m("g"),
        m("g"),
        m("style[xmlns='http://www.w3.org/1999/xhtml'][type='text/css']"),
      ],
    );
  },
};

const instaSvg = () => {
  return {
    view() {
      return m(
        "svg.css-i6dzq1[viewBox='0 0 24 24'][width='24'][height='24'][stroke='currentColor'][stroke-width='2'][fill='none'][stroke-linecap='round'][stroke-linejoin='round']",
        [
          m("rect[x='2'][y='2'][width='20'][height='20'][rx='5'][ry='5']"),
          m("path[d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z']"),
          m("line[x1='17.5'][y1='6.5'][x2='17.51'][y2='6.5']"),
        ],
      );
    },
  };
};

module.exports = {
  routes: ["", "about"],
  view(vnode) {
    let lang = document.documentElement.lang || "eng";

    return m(
      ".footer[data-scroll].cormorant",
      m(
        ".location.flex-column[data-scroll][data-scroll-speed=2]",
        m(".name", locales[lang].footer.me),
        m(
          ".places",
          locales[lang].footer.places.map((p) => m(".place", p)),
        ),
      ),
      m(
        ".contacts.flex[data-scroll][data-scroll-speed=1]",
        m(
          ".link-mail",
          m(".link-mail-text", locales[lang].footer.contact),
          m(
            "a.lowercase.mail[href=mailto:kuslena@rambler.ru]",
            "kuslena@inbox.ru",
          ),
        ),
        m(
          ".socials",
          m(".socials-title", locales[lang].footer.alsoOn),
          m(
            ".links.lowercase",
            m(
              "a.insta-link.flex[rel=noopener][href=https://instagram.com/misskustova][target=_blank]",
              m(".link-text.insta-link-text", "@misskustova"),
              m(instaSvg),
            ),
            m(
              "a.vk-link.flex[rel=noopener][href=https://vk.com/id17282149][target=_blank]",
              m(".link-text.vk-link-text", "Lena Kustova"),
              m(vkSvg),
            ),
          ),
        ),
      ),
      m(
        `.footer-nav.flex-column[data-scroll][data-scroll-speed=1][data-scroll-call=hide][data-scroll-repeat]`,
        {
          oncreate(_v) {},
        },
        m(
          "button.btt[data-scroll]",
          m(
            "span",
            {
              onclick() {
                window.scroller.scrollTo("top");
              },
            },
            locales[lang].footer.btt,
          ),
        ),
        vnode.state.routes
          .filter(
            (route) => location.hash != `#!/${route}` && location.hash != route,
          )
          .map((route) => {
            return m(
              `a.${route}[data-scroll][href=#!/${route}]`,
              {
                onclick(e) {
                  e.preventDefault();
                  if (location.hash != `#!/${route}`) {
                    transition();
                    cl(".nav", "remove", "hidden");

                    setTimeout(() => {
                      m.route.set(`/${route}`);
                    }, 1000);
                  }
                },
              },
              m("span", locales[lang].footer[route == "" ? "home" : route]),
            );
          }),
      ),
    );
  },
};

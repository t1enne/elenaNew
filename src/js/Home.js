// import 'src/assets/img/*'
import m from "mithril";
import Footer from "./Footer";
import Works from './Works/Works';
import { loadEvent } from '../../app'
import { cl } from "./utils";
import { columnsAnim } from "./Title";

const Home = {
  oncreate() {
    if (!window.scroller) {
      document.body.dispatchEvent(loadEvent({ stop: true, route: '' }))
      cl('.c-scrollbar', 'add', 'hidden')

    } else {
      document.body.dispatchEvent(loadEvent({ scroll: true, stop: true, route: 'home' }))
      columnsAnim().play()
    }

  },
  view() {
    return [
      m(Works),
      m(Footer)
    ]
  }
}

export default Home

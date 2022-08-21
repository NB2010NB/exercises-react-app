// import { Test, Page2, Page3 } from './component/pages';
import {Test,Page2,Page3 }from "../index"


export default function Router({pages}) {
  switch (pages) {
    case "test":
      return <Test />
    case "page2":
      return <Page2 />
    case "page3":
      return <Page3 />
      default:
        break;
  }
}
  



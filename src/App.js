import './App.css';
// import About from './component/pages/about/About';
// import Home from './component/pages/HomePage';
// import Game from './component/pages/game/game';
import { useState } from 'react';
import Router from './component/pages/Router';

export const page = ["test", "page2", "page3"];
function App() {
  const  [pages, setPages] = useState("test");
  return (
    <div className='App'>
      {/* <Home /> */}
      {/* <About/> */}
      {/* <Game /> */}
      {page.map(pageName => 
      <button onClick={() =>setPages(pageName) }>{pageName}</button>)}
      <Router pages={pages} />
    </div>
  )
}
export default App;

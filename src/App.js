import * as React from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import "./App.css";
import { useLanyard } from "react-use-lanyard";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Components
import { Nav } from './components/Nav';

// Pages
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Repos} from './pages/Repos';
import {Toolbox} from './pages/Toolbox';
import {Contact} from './pages/Contact';


function App() {

  const location = useLocation();

  return (
    <div className="App">
      <div className="mainContainer">
        <Nav />
        <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="repos" element={<Repos />} />
            <Route path="tools" element={<Toolbox />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default App;
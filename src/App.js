import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route exact path='/about'>
            <Header />
            <About />
          </Route>
          <Route exact path='/projects'>
            <Header />
            <Projects />
          </Route>
          <Route exact path='/contact'>
            <Header />
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

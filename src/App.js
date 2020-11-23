import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// Pages
import Home from './views/Home';
import Services from './views/Services';
import About from './views/About';
import Products from './views/Products';

function App() {
  return (
    <div className='relative pb-10 min-h-screen'>
      <Router>
        <Header/>

        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/services">
              <Services/>
            </Route>

            <Route path="/products/:id">
              <Products/>
            </Route>

            <Route path="/about">
              <About/>
            </Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
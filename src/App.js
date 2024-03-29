import React from 'react';
import './App.css';
import Banner from "./components/Main/Banner";
import Nav from "./components/Navbar/Nav";
import Services from "./components/Services/Services";

function App() {
  return (
    <div>
      <Banner />
      <Nav />
      <Services />
    </div>
  );
}

export default App;

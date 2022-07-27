import { useState } from "react";


import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";

function App() {
  
  const [hideRead] = useState(false);
  const [currentTab] = useState("inbox");



  return (
    <div className="app">
      <Header />
      <Navigation/>
      <Main/>
    </div>
  );
}

export default App;

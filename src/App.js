import React from "react";
import Header from "./components/Header";
import Card from "./components/Card/Card";
import "./styles/main.css"

export default function App() {
  return (
    <div className="App">
      <Header/>
      <main className="cards--container">
        <Card/>
      </main>
     
    </div>
  );
}

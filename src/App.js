import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Card from "./components/Card";
import CardPost from "./components/CardPost";
import { useState } from "react";
import tattoos from "./data/tattoos";

function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  const [searchText, setSearchText] = useState("");

  function onCardOpenClick(theTattoo) {
    setSelectedCard(theTattoo);
  }

  function onTattooCloseClick() {
    setSelectedCard(null);
  }

  const tattooElements = tattoos
    .filter((tattoo) => {
      return tattoo.title.includes(searchText);
    })
    .map((tattoo, index) => {
      return (
        <Card key={index} tattoo={tattoo} onCardClick={onCardOpenClick} />
      );
    });

  let cardPost = null;
  if (!!selectedCard) {
    cardPost = (
      <CardPost tattoo={selectedCard} onBgClick={onTattooCloseClick} />
    );
  }

  return (
    <div className="app">
      <Navbar />
      <section className="app-section">
        <div className="app-contrainer">
          <Search value={searchText} onValueChang={setSearchText} />
          <div className="app-grid">{tattooElements}</div>
        </div>
      </section>
      {cardPost}
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import CardPost from "./components/CardPost";
import DataCard from "./data/DataCard";
import { useState } from "react";

function App() {
  // const [selectedImg, setSelectedImg] = useState(DataCard[0]);

  const DataCardElements = DataCard.map((DataCards, index) => {
    return <Card key={index} DataCards={DataCards} />;
  });

  // let CardPost = null;
  // if (!!selectedImg) {
  //   CardPost = <CardPost />;
  // }

  return (
    <div className="app">
      <Navbar />
      <div className="app-grid">{DataCardElements}</div>
      {/* {CardPost} */}

    </div>
  );
}

export default App;

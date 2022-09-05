import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

const {name, setArtist} = useState("");
const {hits, setHits} = useState(0);

  return (
    <div className="App">
      <div className="inputs">
        <input type="text" placeholder="artistName" onChange={(event) => {
        setArtist(event.target.value)
        }}
        />
        <input type="number" placeholder="artistName" onChange={(event) => {
        setArtist(event.target.value)}}/>
      </div>

    </div>
  );
}

export default App;

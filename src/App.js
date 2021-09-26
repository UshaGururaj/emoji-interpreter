import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var emojiDictionary = {
    "❄️": "Snowflake",
    "🌨️": "Cloud with Snow",
    "☃️": "Snowman",
    "🌊": "Water Wave",
    "☔": "Umbrella with Rain Drops",
    "🌪️": "Tornado",
    "🌠": "Shooting Star",
    "💫": "Dizzy",
    "🌱": "Seedling",
    "🍁": "Maple Leaf"
  };

  var emojisWeKnow = Object.keys(emojiDictionary);

  const [emojiMeaning, setEmojiMeaning] = useState("");

  function emojiHandler(event) {
    var userInput = event.target.value;
    var emojiMeaning = emojiDictionary[userInput];

    if (emojiMeaning === undefined) {
      emojiMeaning = "We don't have this in our database..";
    }

    if (userInput === "") {
      emojiMeaning = "";
    }
    setEmojiMeaning(emojiMeaning);
  }

  function emojiOnclickHandler(emojiMeaning) {
    var emojiMeaning = emojiDictionary[emojiMeaning];
    setEmojiMeaning(emojiMeaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiHandler} />
      <h2> {emojiMeaning}</h2>
      <h3>Emojis we know</h3>
      {emojisWeKnow.map((emojiMeaning) => (
        <span
          onClick={() => emojiOnclickHandler(emojiMeaning)}
          style={{ fontSize: "1.5rem", padding: "0.5rem", cursor: "pointer" }}
          key={emojiMeaning}
        >
          {emojiMeaning}
        </span>
      ))}
    </div>
  );
}

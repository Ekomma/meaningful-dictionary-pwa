import { useEffect, useState } from "react";
import { Container, withStyles, Switch } from "@material-ui/core";
import axios from "axios";
import "./App.css";
import Header from "./components/Header/Header";
import Definitions from "./components/Definitions/Definitions";
import { grey } from "@material-ui/core/colors";

function App() {
  const [lightMode, setLightMode] = useState(false);
  const [wordData, setWordData] = useState([]);
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("en");

  const ThemeSwitch = withStyles({
    switchBase: {
      color: grey[300],
      "&$checked": {
        color: grey[500],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
        );
        setWordData(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [word, category]);
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: lightMode ? "#efefef" : "#15202b",
        color: lightMode ? "#000" : "#efefef",
        transition: "all 0.5s linear"
      }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{lightMode ? "Dark" : "Light"} Mode</span>
          <ThemeSwitch
            checked={lightMode}
            onChange={() => setLightMode(!lightMode)}
          />
        </div>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          lightMode={lightMode}
        />
        {wordData && (
          <Definitions word={word} wordData={wordData} category={category} lightMode={lightMode} />
        )}
      </Container>
    </div>
  );
}

export default App;

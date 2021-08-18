import React from "react";
import "./Definitions.css";

const Definitions = ({ word, category, wordData, lightMode }) => {
  return (
    <div className="meanings">
      {wordData[0] && word && category === "en" && (
        <div>
          <audio
            src={wordData[0].phonetics[0] && wordData[0].phonetics[0].audio}
            style={{
              border: lightMode ? "1px solid #15202b" : "none",
              borderRadius: "30px",
              width: "100%",
            }}
            controls
          >
            Your browser doesn't support this feature (audio)
          </audio>
        </div>
      )}
      {word === "" ? (
        <span className="subTitle">Type a word in search</span>
      ) : (
        wordData.map((data) =>
          data.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMeaning"
                style={{
                  backgroundColor: lightMode ? "#15202b" : "#e3e3e3",
                  color: lightMode ? "#e3e3e3" : "#15202b",
                }}
              >
                <strong>{def.definition}</strong>
                <hr style={{ width: "100%", backgroundColor: "#15202b" }} />
                {def.example && (
                  <span>
                    <strong>Example: </strong>
                    {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <strong>Synonyms: </strong>
                    {def.synonyms.join(", ")}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;

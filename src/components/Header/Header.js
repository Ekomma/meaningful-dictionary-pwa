import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import categories from "../../data/category";
import "./Header.css";

const Header = ({ category, setCategory, word, setWord, lightMode }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightMode ? "#000" : "#e3e3e3",
      },
      type: lightMode ? "light" : "dark",
    },
  });

  const handleChange = (lang) => {
      setCategory(lang)
      setWord("")
  }

  return (
    <>
      <div className="header">
        <span className="title">{word ? word : "Meaning"}</span>
        <div className="inputs">
          <ThemeProvider theme={darkTheme}>
            <TextField
              value={word}
              onChange={(e) => setWord(e.target.value)}
              label="Search word"
              className="search"
              label="Search"
            />
            <TextField
              select
              className="select"
              label="Language"
              value={category}
              onChange={(e) => handleChange(e.target.value)}
            >
              {categories.map((opt) => (
                <MenuItem key={opt.label} value={opt.label}>
                  {opt.value}
                </MenuItem>
              ))}
            </TextField>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
};

export default Header;

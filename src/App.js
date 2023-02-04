import React, { useState } from "react";
import "./App.css";
import { InputLabel, Select, MenuItem } from "@mui/material";
import MoviesList from "./comonents/MoviesList";
import UserLoginPage from "./comonents/UserLoginPage";

/** App Component */
function App() {
  /** State variables */
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [language, setLanguage] = useState("english");

  /** handle change function for language */
  const handleChange = (value) => {
    setLanguage(value);
  };
  
  return (
    <div className="App">
      <div className="lang-box">
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="Age"
          onChange={(e) => handleChange(e.target.value)}
        >
          <MenuItem value="english">English</MenuItem>
          <MenuItem value="arabic">Arabic</MenuItem>
        </Select>
      </div>
      {userLoggedIn ? (
        <MoviesList />
      ) : (
        <UserLoginPage setUserLoggedIn={setUserLoggedIn} language={language} />
      )}
    </div>
  );
}

export default App;

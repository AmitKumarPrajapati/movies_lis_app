import React, { useState } from "react";
import { handleClick, handleReset } from "../utils";
import { getBiLangKeyword } from "./config";
import "./style.css";

/** User Login Component */
const UserLoginPage = (props) => {
    /**State variables and props */
  const [name, setName] = useState("");
  const { setUserLoggedIn, language } = props;
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  console.log(userDetails)

  return (
    <form onSubmit={handleClick}>
      <div className="app-container">
        <div className="user-box">
          <div className="name-box">
            <label>
              <b>{getBiLangKeyword("username", language)}</b>
            </label>
            <input
              type="text"
              placeholder={getBiLangKeyword("userTitle", language)}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {nameError ? <p>{getBiLangKeyword("userError", language)}</p> : ""}
          <br />
          <div className="password-box">
            <label>
              <b>{getBiLangKeyword("password", language)}</b>
            </label>
            <input
              style={{ marginLeft: "20px" }}
              type="password"
              placeholder={getBiLangKeyword("passwdTitle", language)}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {passError ? <p>{getBiLangKeyword("passwdError", language)}</p> : ""}
          <div className="btn-box">
            <button
              className="reset-btn"
              type="button"
              onClick={() =>
                handleReset(
                  setName,
                  setPassword,
                  setNameError,
                  setPassError,
                  setUserDetails
                )
              }
            >
              {getBiLangKeyword("reset", language)}
            </button>
            <button
              disabled={!name || !password}
              className={!name || !password ? "btn-disabled" : "submit-btn"}
              type="button"
              onClick={() =>
                handleClick(
                  setNameError,
                  setPassError,
                  setUserDetails,
                  setName,
                  setPassword,
                  name,
                  password,
                  setUserLoggedIn
                )
              }
            >
              {getBiLangKeyword("submit", language)}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserLoginPage;

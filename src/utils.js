export const handleReset = (
    setName,
    setPassword,
    setNameError,
    setPassError,
    setUserDetails
  ) => {
    setName("");
    setPassword("");
    setNameError(false);
    setPassError(false);
    setUserDetails({});
  };
  
  export const handleClick = (
    setNameError,
    setPassError,
    setUserDetails,
    setName,
    setPassword,
    name,
    password,
    setUserLoggedIn
  ) => {
    name ? setNameError(false) : setNameError(true);
    password ? setPassError(false) : setPassError(true);
    setUserDetails({ userName: name, userPassword: password });
    if (name && password) {
      let validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (name.match(validRegex)) {
        setUserLoggedIn(true);
        setName("");
        setPassword("");
      } else {
        setNameError(true);
      }
    }
  };
  
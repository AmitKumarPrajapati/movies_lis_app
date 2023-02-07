const listOfKeywords = [
    {
      key: "username",
      english: "Username:",
      arabic: "aism almustakhdam:",
      german: "Nutzername:",
      spanish: "Nombre de usuario:",
      akan: "Edin a ɔde di dwuma:"
    },
    {
      key: "password",
      english: "Password:",
      arabic: "kalimat almurur:",
      german: "Passwort:",
      spanish: "Contraseña:",
      akan: "Paswɛde:"
    },
    {
      key: "userTitle",
      english: "Enter Username...",
      arabic: "aidkhul aism almustakhdam...",
      german: "Geben Sie den Benutzernamen ein...",
      spanish: "Introduzca su nombre de usuario...",
      akan: "Hyehyɛ Edin a Wɔde Di Dwuma..."
    },
    {
      key: "passwdTitle",
      english: "Enter Password...",
      arabic: "adkhal kalimat almurur...",
      german: "Passwort eingeben...",
      spanish: "Introducir la contraseña...",
      akan: "Hyehyɛ Password no mu..."
    },
    {
      key: "submit",
      english: "Submit",
      arabic: "yuqddim",
      german: "Einreichen",
      spanish: "Entregar",
      akan: "Submi"
    },
    {
      key: "userError",
      english: "Please enter valid username...",
      arabic: "alraja' 'iidkhal asm mustakhdim salih...",
      german: "Bitte gültigen Benutzernamen eingeben...",
      spanish: "Porfavor ingrese un usuario valido...",
      akan: "Yɛsrɛ wo kyerɛw edin a ɛfata a wode di dwuma..."
    },
    {
      key: "passwdError",
      english: "Please enter valid password...",
      arabic: "alraja' 'iidkhal kalimat murur saliha ...",
      german: "Bitte gültiges Passwort eingeben...",
      spanish: "Por favor ingrese una contraseña válida...",
      akan: "Yɛsrɛ sɛ kyerɛw password a ɛfata..."
    },
    {
      key: "reset",
      english: "Reset",
      arabic: "iieadat dabt",
      german: "Zurücksetzen",
      spanish: "Reiniciar",
      akan: "Reset"
    },
  ];
  
  /** Function for getting the text for bi language */
  export const getBiLangKeyword = (keyword, language) => {
    const filterKeyword = listOfKeywords?.filter((data) => data.key === keyword);
    console.log("filtered Keyword", filterKeyword);
    return filterKeyword[0][language];
  };
  
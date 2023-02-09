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
      key: "college",
      english: "College:",
      arabic: "kuliya:",
      german: "Hochschule:",
      spanish: "Colega:",
      akan: "Kolegyi:"
    },
    {
      key: "age",
      english: "Age:",
      arabic: "eumar:",
      german: "Alter:",
      spanish: "Edad:",
      akan: "Mfeɛ:",
    },
    {
      key: "userLogin",
      english: "User login form",
      arabic: "namudhaj tasjil dukhul almustakhdam",
      german: "Anmeldeformular für Benutzer",
      spanish: "Formulario de inicio de sesión de usuario",
      akan: "Ɔdefo login kratasin"

    },
    {
      key: "collegeTitle",
      english: "Enter College...",
      arabic: "'adkhul alkulia...",
      german: "Geben Sie das College ein...",
      spanish: "ingresar a la universidad...",
      akan: "Hyɛn Kɔlege mu..."
    },
    {
      key: "ageTitle",
      english: "Enter Age...",
      arabic: "adkhal aleumur",
      german: "Alter eingeben",
      spanish:"Ingrese la edad",
      akan: "Hyehyɛ Age mu"
    },
    {
      key: "branchTitle",
      english: "Enter Branch...",
      arabic: "adkhul alfare...",
      german: "Filiale eingeben...",
      spanish: "Ingresar Sucursal...",
      akan: "Hyɛn Baa Dwumadibea no mu...",
    },
    {
      key: "branch",
      english: "Branch:",
      arabic: "fare:",
      german: "Zweig:",
      spanish: "rama:",
      akan: "fa:",

    },
    {
      key: "class",
      english: "Class",
      arabic: "fasl",
      german: "Klasse",
      spanish: "Clase",
      akan: "Klaase",

    },
    {
      key: "classTitle",
      english: "Enter Class",
      arabic: "adkhul alfasl",
      german: "Klasse eingeben",
      spanish: "entrar en clase",
      akan: "Hyɛn Adesua no mu",


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
  
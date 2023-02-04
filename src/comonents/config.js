const listOfKeywords = [
    {
      key: "username",
      english: "Username:",
      arabic: "aism almustakhdam:",
    },
    {
      key: "password",
      english: "Password:",
      arabic: "kalimat almurur:",
    },
    {
      key: "userTitle",
      english: "Enter Username...",
      arabic: "aidkhul aism almustakhdam...",
    },
    {
      key: "passwdTitle",
      english: "Enter Password...",
      arabic: "adkhal kalimat almurur...",
    },
    {
      key: "submit",
      english: "Submit",
      arabic: "yuqddim",
    },
    {
      key: "userError",
      english: "Please enter valid username...",
      arabic: "alraja' 'iidkhal asm mustakhdim salih...",
    },
    {
      key: "passwdError",
      english: "Please enter valid password...",
      arabic: "alraja' 'iidkhal kalimat murur saliha ...",
    },
    {
      key: "reset",
      english: "Reset",
      arabic: "iieadat dabt",
    },
  ];
  
  /** Function for getting the text for bi language */
  export const getBiLangKeyword = (keyword, language) => {
    const filterKeyword = listOfKeywords?.filter((data) => data.key === keyword);
    console.log("filtered Keyword", filterKeyword);
    return filterKeyword[0][language];
  };
  
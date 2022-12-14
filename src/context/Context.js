import React, { createContext, useState } from "react";

export const AppContext = createContext();

const Context = ({ children }) => {
  const url = "https://afridirahman97.github.io/api/users.json";
  const [totalData, setTotalData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchTxt] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Theme Mode
  const [themeMode, setThemeMode] = useState(true);

  // Fetching all the data
  const fetchData = async () => {
    setIsLoading(true);
    let response = await fetch(url);
    response = await response.json();
    console.log(response)
    setTotalData(response);
    setIsLoading(false);
  };

  return (
    <AppContext.Provider
      value={{
        totalData,
        setTotalData,
        isLoading,
        fetchData,
        themeMode,
        setThemeMode,
        searchText,
        setSearchTxt,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;

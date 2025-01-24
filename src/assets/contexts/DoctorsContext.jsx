import { createContext, useContext, useEffect, useState } from "react";

// # Consumer
const DocContext = createContext();
export const useDocContext = () => useContext(DocContext);

// # Provider
export const DoctorContextProvider = ({ children }) => {
  const INDEX = import.meta.env.VITE_API_INDEX;
  function fetchDocs() {
    fetch(INDEX)
      .then((res) => res.json())
      .then((data) => {
        setDocsData({ ...docsData, docs: data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const [docsData, setDocsData] = useState({
    docs: [],
  });

  useEffect(() => {
    fetchDocs();
  }, []);

  return <DocContext.Provider value={docsData}>{children}</DocContext.Provider>;
};

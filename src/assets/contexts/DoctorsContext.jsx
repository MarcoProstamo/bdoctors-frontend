import { createContext, useContext, useEffect, useState } from "react";

// # Consumer
const DocContext = createContext();
export const useDocContext = () => useContext(DocContext);

// # Provider
export const DoctorContextProvider = ({ children }) => {
  const INDEX_DOCTORS = import.meta.env.VITE_API_INDEX;
  const INDEX_ICONS = import.meta.env.VITE_API_INDEX_SPECIALIZATIONS;

  function fetchDocs() {
    fetch(INDEX_DOCTORS)
      .then((res) => res.json())
      .then((data) => {
        setDocsData((docsData) => ({ ...docsData, docs: data }));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function fetchIcons() {
    fetch(INDEX_ICONS)
      .then((res) => res.json())
      .then((data) => {
        setDocsData((docsData) => ({ ...docsData, icons: data }));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const [docsData, setDocsData] = useState({
    docs: [],
    icons: [],
    fetchDocs,
    fetchIcons,
  });

  useEffect(() => {
    fetchDocs();
    fetchIcons();
  }, []);

  return <DocContext.Provider value={docsData}>{children}</DocContext.Provider>;
};

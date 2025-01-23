import { useState } from "react";
import { useDocContext } from "../contexts/DoctorsContext";

import DocsCard from "../components/DocsCard";

export default function AdvanceDoctorSearchPage() {
  const { docs } = useDocContext();

  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function filterByNameOrSurname(data, input) {
    return data.filter((el) => {
      return (
        el.name.toLowerCase().includes(input.toLowerCase()) ||
        el.surname.toLowerCase().includes(input.toLowerCase())
      );
    });
  }

  const filteredDocs = filterByNameOrSurname(docs, searchInput);

  console.log(filteredDocs);

  return (
    <div className="container my-5">
      <div className="mt-5">
        <h1 className="fw-bold">Advanced Doctors Search Page</h1>
      </div>

      <hr />

      <div>
        {/* search for name or surname form */}
        <div className="d-flex justify-content-center">
          <form className="doc-search-form text-center" onSubmit={handleSubmit}>
            <label htmlFor="searchInput" className="form-label fs-5">
              Cerca per Nome o Cognome
            </label>
            <input
              placeholder="search..."
              type="text"
              id="searchInput"
              className="form-control"
              value={searchInput}
              onChange={handleInputChange}
            />
          </form>
        </div>

        <div className="my-4">
          <h5 className="text-center mb-3">Filtra per Specializazzione</h5>

          {/* filter specialization */}
          <div className="d-flex justify-content-center flex-wrap gap-3">
            {docs &&
              docs.map((doc) => {
                return (
                  <button className="btn btn-primary fs-6" key={doc.id}>
                    {doc.medical_specialization}
                  </button>
                );
              })}
          </div>
        </div>
      </div>

      <hr />

      {/* doctors list */}
      <h3 className="text-center fw-bold my-4">Lista dei Medici</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredDocs &&
          filteredDocs.map((doc) => {
            return <DocsCard key={doc.id} data={doc} />;
          })}
      </div>
    </div>
  );
}

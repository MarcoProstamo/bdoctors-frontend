import { useState, useEffect } from "react";
import { useDocContext } from "../contexts/DoctorsContext";

import DocsCard from "../components/DocsCard";

export default function AdvanceDoctorSearchPage() {
  const { docs, icons } = useDocContext();

  const [filter, setFilter] = useState({
    searchInput: "",
    specialization: "",
  });

  const handleInputChange = (e) => {
    setFilter({ ...filter, searchInput: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onClickSpecializationFilter = (e) => {
    setFilter({ ...filter, specialization: e.target.innerText });
  };

  function filterDoctors(data, input, specialization) {
    return data.filter((el) => {
      const matchesNameOrSurname =
        el.name.toLowerCase().includes(input.toLowerCase()) ||
        el.surname.toLowerCase().includes(input.toLowerCase());

      const matchesSpecialization = specialization
        ? el.specialization.toLowerCase() === specialization.toLowerCase()
        : true;

      return matchesNameOrSurname && matchesSpecialization;
    });
  }

  function resetFilters() {
    setFilter({ searchInput: "", specialization: "" });
  }

  const filteredDocs = filterDoctors(
    docs,
    filter.searchInput,
    filter.specialization
  );

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
              value={filter.searchInput}
              onChange={handleInputChange}
            />
          </form>
        </div>

        <div className="my-4">
          <h5 className="text-center mb-3">Filtra per Specializazzione</h5>

          {/* filter specialization */}
          <div className="d-flex justify-content-center flex-wrap gap-3">
            {icons &&
              icons.map((icon) => {
                return (
                  <button
                    className="btn btn-primary fs-6"
                    key={icon.id}
                    onClick={onClickSpecializationFilter}
                  >
                    {icon.specialization}
                  </button>
                );
              })}
          </div>
        </div>
      </div>

      <hr />

      {/* doctors list */}
      <div className="my-4 d-flex justify-content-between">
        <div>
          <h3 className="fw-bold">Lista dei Medici</h3>
        </div>

        <div>
          <button className="btn btn-danger fs-6" onClick={resetFilters}>
            Resetta filtri
          </button>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {filteredDocs &&
          filteredDocs.length > 0 &&
          filteredDocs.map((doc) => {
            return <DocsCard key={doc.id} data={doc} />;
          })}
        {filteredDocs && filteredDocs.length === 0 && (
          <div className="col-12 text-center fs-3">Nessun Dottore Trovato.</div>
        )}
      </div>
    </div>
  );
}

import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDocContext } from "../contexts/DoctorsContext";

import DocsCard from "../components/DocsCard";

export default function AdvanceDoctorSearchPage() {
  const { docs, icons } = useDocContext();

  const location = useLocation();
  const { specialization } = location.state || "";

  const [filter, setFilter] = useState({
    searchInput: "",
    specialization: specialization,
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

  /**
   *
   * Funzione che restituisce un Array di oggetti filtrati utitlizzando un array di partenza, un input (nome o cognome) e una specializzazione
   *
   * @param {Array} data
   * @param {string} input
   * @param {string} specialization
   * @returns {Array}
   */
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
    <>
      <section className="pt-5 pb-4">
        <div className="container">
          <h1 className="fw-bold">
            <i className="fa-solid fa-magnifying-glass me-2"></i> Ricerca
            Avanzata
          </h1>

          <hr />

          <div>
            {/* search for name or surname form */}
            <div className="d-flex justify-content-center">
              <form
                className="doc-search-form text-center"
                onSubmit={handleSubmit}
              >
                <label
                  htmlFor="searchInput"
                  className="form-label fs-5 fw-bold"
                >
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
              <h5 className="text-center fw-bold mb-3">
                Cerca per Specializazzione
              </h5>

              {/* filter specialization */}
              <div className="d-flex justify-content-center flex-wrap gap-3">
                {icons &&
                  icons.map((icon) => {
                    return (
                      <button
                        className="btn btn-success fs-6"
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
        </div>
      </section>

      <div className="container mb-5">
        {/* doctors list */}
        <div className="my-4 d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <h2 className="fw-bold me-4">
              <i className="fa-solid fa-user-doctor me-3"></i>Lista dei Medici
            </h2>

            {filter.specialization || specialization ? (
              <div>
                <span className="badge bg-success fs-6">
                  {filter.specialization}
                </span>
              </div>
            ) : null}
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
            <div className="col-12 text-center fs-3">
              Nessun Dottore Trovato.
            </div>
          )}
        </div>
      </div>
    </>
  );
}

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

  const icon = icons.find((el) => el.specialization === filter.specialization);

  return (
    <>
      <section className="filter-form pt-5 pb-4">
        <div className="container">
          <h1 className="fw-bold text-col">
            <i className="fa-solid fa-magnifying-glass me-3"></i>
            Ricerca Avanzata
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
                  className="form-label fs-5 text-col"
                >
                  Filtra per Nome o Cognome
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
              <div className="text-center fs-5 mb-3 text-col">
                Filtra per Specializazzione
              </div>

              {/* filter specialization */}
              <div className="d-flex justify-content-center flex-wrap gap-3">
                {icons &&
                  icons.map((icon) => {
                    return (
                      <button
                        className="btn btn-light filter-btn fs-6 filter-icons-tag"
                        key={icon.id}
                        onClick={onClickSpecializationFilter}
                      >
                        <i className={`fas ${icon.icon_tag} me-2`}></i>
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
        <div className="mt-4 d-flex justify-content-between mb-2">
          <div className="d-flex align-items-center">
            <h2 className="fw-bold mb-0 me-4 text-col">
              <i className="fa-solid fa-user-doctor me-3"></i>Lista dei Medici
            </h2>

            {filter.specialization ? (
              <div>
                <span className="badge bg-light filter-icons-tag fs-6">
                  <i
                    className={`filter-icons-tag fas ${
                      icon && icon.icon_tag
                    } me-2`}
                  ></i>
                  {filter.specialization}
                </span>
              </div>
            ) : null}
          </div>

          <div>
            <button
              className="btn filter-form btn-light fs-6"
              onClick={resetFilters}
            >
              Azzera filtri
            </button>
          </div>
        </div>

        <hr className="m-0 mb-3" />

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4">
          {filteredDocs &&
            filteredDocs.length > 0 &&
            filteredDocs.map((doc) => {
              return <DocsCard key={doc.id} data={doc} />;
            })}
          {filteredDocs && filteredDocs.length === 0 && (
            <div className="col-12 text-center fs-4">
              Nessun Dottore Trovato.
            </div>
          )}
        </div>
      </div>
    </>
  );
}

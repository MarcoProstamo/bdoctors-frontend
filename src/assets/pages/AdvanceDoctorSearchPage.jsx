import { useState } from "react";
import { useDocContext } from "../contexts/DoctorsContext";

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
      {/* Title  */}
      <div className="my-5">
        <h1>Advanced Doctors Search Page</h1>
      </div>

      <hr />

      <div>
        {/* filter section */}
        <div className="d-flex justify-content-center">
          <form className="doc-search-form text-center" onSubmit={handleSubmit}>
            <label htmlFor="searchInput" className="form-label fs-5">
              Cerca per Nome o Cognome
            </label>
            <input
              type="text"
              id="searchInput"
              className="form-control"
              value={searchInput}
              onChange={handleInputChange}
            />
          </form>
        </div>

        {/* badge component */}
        <div className="my-4">
          <h5 className="text-center mb-3">Filtra per Specializazzione</h5>

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

      {/* doctors section */}
      <div className="my-5">
        {filteredDocs &&
          filteredDocs.map((doc) => {
            return (
              <div key={doc.id} className="my-3">
                <h3>
                  {doc.name} {doc.surname}
                </h3>
                <p>{doc.medical_specialization}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

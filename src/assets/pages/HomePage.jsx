import React, { useState, useEffect } from "react";

export default function HomePage() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/doctors")
      .then((response) => response.json())
      .then((data) => setDoctors(data))
      .catch((error) =>
        console.error("Errore nel recuperare delle specializzazioni:", error)
      );
  }, []);

  const uniqueSpecializations = [
    ...new Set(doctors.map((doctor) => doctor.medical_specialization)),
  ];

  const iconMap = {
    Cardiologia: "fas fa-heartbeat",
    Dermatologia: "fas fa-sun",
    Pediatria: "fas fa-baby",
    Neurologia: "fas fa-brain",
    Psichiatria: "fas fa-user-md",
    Ortopedia: "fas fa-bone",
    Oncologia: "fas fa-ribbon",
    Chirurgia_Generale: " fa-user-doctor",
    Ginecologia: "fas fa-female",
    Oftalmologia: "fas fa-eye",
  };

  return (
    <>
      <h2 className="text-center pt-5">
        <b>
          <strong>Cerca per specializzazione</strong>
        </b>
      </h2>
      <div className="container">
        <div className="pt-5 px-3 row">
          {uniqueSpecializations.map((medical_specialization, index) => (
            <div
              key={index}
              className="text-center py-5 px-3 col-md-3 col-sm-6 col-6 border "
            >
              <i className={`${iconMap[medical_specialization]} fa-2xl`}></i>
              <h5 className="py-3 px-3">
                <strong>{medical_specialization}</strong>
              </h5>
            </div>
          ))}
        </div>
      </div>

      <div className="container pt-5">
        <div className="text-center pt-5 ">
          <h3>
            <strong>
              Cerca un dottore online tra i centinaia di specialisti
            </strong>
          </h3>
          <p>
            Su Bdoctors.it trovi i migliori specialisti in tutti i campi della
            Medicina. Se desideri effettuare una Televisita o ricevere un
            secondo parere su una diagnosi già fatta, puoi cercare un dottore
            online tra i nostri medici di fiducia.
          </p>
          <p></p>
        </div>
      </div>
    </>
  );
}

import React, { useState, useEffect } from "react";

export default function HomePage() {
  const [specializations, setSpecializations] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  const API_INDEX_SPECIALIZATIONS = import.meta.env
    .VITE_API_INDEX_SPECIALIZATIONS;

  useEffect(() => {
    fetch(API_INDEX_SPECIALIZATIONS)
      .then((response) => response.json())
      .then((data) => setSpecializations(data))
      .catch((error) =>
        console.error("Errore nel recuperare delle specializzazioni:", error)
      );
  }, []);

  return (
    <>
      <h2 className="text-center pt-5">
        <b>
          <strong>Cerca per specializzazione</strong>
        </b>
      </h2>
      <div className="container">
        <div className="pt-5 px-3 row ">
          {specializations &&
            specializations.map((specialization, index) => {
              const isHovered = hoveredCard === index;

              const dynamicStyle = {
                backgroundColor: isHovered
                  ? "rgba(0, 0, 0, 0.1)"
                  : "transparent",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.3s ease, background-color 0.3s ease",
                cursor: "pointer",
              };

              return (
                <div
                  key={index}
                  className="text-center py-5 px-3 col-md-3 col-sm-6 col-6 border"
                  style={dynamicStyle}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <i
                    className={`${`fas ${specialization.icon_tag}`} fa-2xl`}
                  ></i>
                  <h5 className="py-3 px-3">
                    <strong>{specialization.specialization}</strong>
                  </h5>
                </div>
              );
            })}
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

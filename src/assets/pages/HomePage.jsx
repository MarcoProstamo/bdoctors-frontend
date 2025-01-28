import React, { useState, useEffect, useContext } from "react";
import { useDocContext } from "../contexts/DoctorsContext";
import { Link } from "react-router-dom";
export default function HomePage() {
  const { docs, icons } = useDocContext();
  const [hoveredCard, setHoveredCard] = useState(null);
  const mostRatedDocs = docs.filter((doc) => doc.avg_vote > 4);
  const API_IMG = import.meta.env.VITE_API_IMG;
  return (
    <>
      <div className="container my-3 py-3 px-4">
        <h2 className="text-center py-5  px-4">
          <strong> I nostri migliori dottori </strong>
        </h2>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {mostRatedDocs &&
              mostRatedDocs.map(({ image, name, id }, index) => (
                <Link
                  to={`/doctors/${id}`}
                  key={id}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={`${API_IMG + image + ".png"}`}
                    className="d-block w-100"
                    alt={name}
                  />
                </Link>
              ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <h1 className="text-center pt-5 px-3">
        <b>
          <strong>Cerca per specializzazione</strong>
        </b>
      </h1>
      <div className="container">
        <div className="pt-5 px-3 row ">
          {icons &&
            icons.map((specialization, index) => {
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
                <Link
                  to={`/doctors`}
                  state={{ specialization: specialization.specialization }}
                  key={index}
                  className="text-dark text-decoration-none text-center py-5 px-3 col-md-3 col-sm-6 col-6 border"
                  style={dynamicStyle}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <i
                    className={`${`fas ${specialization.icon_tag}`} fa-2xl`}
                    style={{ color: "#8ac6f5" }}
                  ></i>
                  <h5 className="py-3 px-3">
                    <strong>{specialization.specialization}</strong>
                  </h5>
                </Link>
              );
            })}
        </div>
      </div>

      <div className="container-speccializzazioni pt-5 px-4 mt-4">
        <div className="text-center pt-5 ">
          <h2>
            <strong>
              Cerca un dottore online tra i centinaia di specialisti
            </strong>
          </h2>
          <div>
            <p>
              Su Bdoctors.it trovi i migliori specialisti in tutti i campi della
              Medicina. Se desideri effettuare una Televisita o ricevere un
              secondo parere su una diagnosi già fatta, puoi cercare un dottore
              online tra i nostri medici di fiducia.
            </p>
          </div>
        </div>
      </div>

      <section className="how-it-works px-5 py-4 mt-3">
        <h2 className="text-center ">Come funziona BDoctor?</h2>
        <div className="cards-container">
          <div className="card">
            <img
              src="https://th.bing.com/th/id/OIP.TYVde0Uv_exmGzUlBfW47wHaHa?w=2500&h=2500&rs=1&pid=ImgDetMain"
              alt="Scegli il Medico"
            />
            <h3>Scegli il Medico</h3>
            <p>
              Fai la <strong>scelta migliore</strong> secondo le tue esigenze:
              valuta <strong>curriculum</strong>, <strong>prezzo</strong> delle
              prestazioni, <strong>patologie</strong> trattate e{" "}
              <strong>recensioni</strong> degli altri pazienti.
            </p>
          </div>

          <div className="card">
            <img
              src="https://saludocupacionalpitalito.com/images/contacto2.png"
              alt="Prenota la visita"
            />
            <h3>Prenota la visita</h3>
            <p>
              Ti bastano <strong>pochi secondi</strong>: è facile e veloce, non
              serve telefonare e non è richiesta la carta di credito:{" "}
              <strong>pagherai</strong> direttamente <strong>al medico</strong>.
            </p>
          </div>

          <div className="card">
            <img
              src="https://th.bing.com/th/id/OIP.RuvrKooL_0z40Uqb6rW39gHaHa?w=512&h=512&rs=1&pid=ImgDetMain"
              alt="Vai all'appuntamento"
            />
            <h3>Vai all'appuntamento</h3>
            <p>
              Vai dal Medico scelto, nel giorno e nell'ora selezionati. Dopo la
              visita potrai <strong>lasciare</strong> una tua{" "}
              <strong>recensione</strong> che sarà utile per gli altri pazienti.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

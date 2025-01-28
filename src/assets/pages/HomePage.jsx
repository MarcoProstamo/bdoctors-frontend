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
      <h2 className="text-center pt-5">
        <b>
          <strong>Cerca per specializzazione</strong>
        </b>
      </h2>
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
                  ></i>
                  <h5 className="py-3 px-3">
                    <strong>{specialization.specialization}</strong>
                  </h5>
                </Link>
              );
            })}
        </div>
      </div>

      <div className="container my-3">
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

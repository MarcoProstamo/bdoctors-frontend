import React, { useState, useEffect, useContext } from "react";
import { useDocContext } from "../contexts/DoctorsContext";
import { Link } from "react-router-dom";
export default function HomePage() {
  const { docs, icons } = useDocContext();
  const [hoveredCard, setHoveredCard] = useState(null);
  const mostRatedDocs = docs.filter((doc) => doc.avg_vote > 4);
  const API_IMG = import.meta.env.VITE_API_IMG;

  function voteStarsFormatter(vote) {
    if (!vote || vote < 0) vote = 0;

    const stars = 5;
    const starsNumber = Math.round(vote);
    const starsArray = [];

    for (let i = 0; i < stars; i++)
      i < starsNumber
        ? starsArray.push(<i key={i} className="fa-solid fa-star"></i>)
        : starsArray.push(<i key={i} className="fa-regular fa-star"></i>);

    return starsArray;
  }

  return (
    <>
      <div className="container my-3 py-3 px-4">
        <h2 className="text-center py-5  px-4">
          <strong> I nostri migliori dottori </strong>
        </h2>
        <div className="d-flex justify-content-center">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide w-50"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {mostRatedDocs &&
                mostRatedDocs.map((doc, index) => (
                  <Link
                    to={`/doctors/${doc.id}`}
                    state={doc.specialization}
                    key={doc.id}
                    className={`text-decoration-none carousel-item ${
                      index === 0 ? "active" : ""
                    } card p-4 shadow-sm rounded-4 bg-light`}
                  >
                    <div className="d-flex flex-column justify-content-center align-items-center mb-3">
                      <img
                        src={API_IMG + doc.image + ".png"}
                        className="img-thumbnail me-3 rounded-circle shadow-lg"
                        style={{
                          width: "150px",
                          height: "150px",
                          objectFit: "cover",
                        }}
                        alt={`Foto di ${doc.name} ${doc.surname}`}
                      />
                      <div>
                        <h3 className="card-title mb-0 fs-3 text-dark">
                          {doc.name} {doc.surname}
                        </h3>
                        <p className="fs-5 text-muted">{doc.specialization}</p>
                      </div>

                      <div className="text-warning fs-3">
                        {voteStarsFormatter(doc.avg_vote)}
                      </div>
                    </div>
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
                className="carousel-control-prev-icon text-primary"
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
                className="carousel-control-next-icon text-primary"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
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

      <div className="container container-speccializzazioni-homepage pt-5 px-4 mt-4">
        <div className="text-center pt-2 ">
          <h2>
            <strong>
              Cerca un dottore online tra i centinaia di specialisti
            </strong>
          </h2>
          <div className="pt-5 ">
            <p>
              Su <strong>Bdoctors.it</strong> trovi i migliori professionisti in
              ogni ambito medico, pronti a offrirti consulenze rapide e sicure
              ovunque tu sia. Che tu abbia bisogno di una Televisita o di un
              secondo parere su una diagnosi, puoi contare sui nostri medici di
              fiducia per ricevere risposte tempestive e affidabili.
              Selezioniamo con cura ogni specialista per garantirti competenza,
              professionalità e un servizio di alta qualità. Grazie alla nostra
              piattaforma intuitiva, prenotare una consulenza è semplice e
              veloce, senza lunghe attese. Qualunque sia la tua necessità, su
              <strong> Bdoctors.it</strong> troverai sempre un medico pronto ad
              aiutarti con discrezione e attenzione.
            </p>
          </div>
        </div>
      </div>

      <section className="how-it-works px-5 py-4 mt-3">
        <h2 className="text-center ">Come funziona BDoctor?</h2>
        <div className="cards-container-homepage">
          <div className="card-homepage">
            <img
              src="https://th.bing.com/th/id/OIP.TYVde0Uv_exmGzUlBfW47wHaHa?w=2500&h=2500&rs=1&pid=ImgDetMain"
              alt="Scegli il Medico"
            />
            <h3>Scegli il Medico</h3>
            <p>
              Fai la <strong>scelta migliore</strong> secondo le tue esigenze:
              valuta <strong>curriculum</strong>, <strong>prezzo</strong> delle
              prestazioni, <strong>patologie</strong> trattate e{" "}
              <strong> recensioni</strong> degli altri pazienti.
            </p>
          </div>

          <div className="card-homepage">
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

          <div className="card-homepage">
            <img
              src="https://th.bing.com/th/id/OIP.RuvrKooL_0z40Uqb6rW39gHaHa?w=512&h=512&rs=1&pid=ImgDetMain"
              alt="Vai all'appuntamento"
            />
            <h3>Vai all'appuntamento</h3>
            <p>
              Vai dal Medico scelto, nel giorno e nell'ora selezionati. Dopo la
              visita potrai <strong>lasciare</strong> una tua
              <strong> recensione</strong> che sarà utile per gli altri
              pazienti.
            </p>
          </div>
        </div>
      </section>

      <div className="container container-speccializzazioni-homepage">
        <div className="row">
          <div className="col-12 col-md-4 ">
            <div>
              <img
                src="https://www.idoctors.it/images/frontend/commenti_diconodinoi.svg?v=2"
                alt="lavora con noi"
                className="img-fluid ml-auto mt-auto"
              />
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="text-center text-md-left">
              <h2>
                <strong>Dicono di noi</strong>
              </h2>
              <p>
                Chi ha scelto Bdoctors.it apprezza la qualità del servizio, la
                professionalità dei medici e la comodità di poter ricevere un
                consulto senza spostarsi da casa. Le recensioni dei nostri
                utenti parlano di esperienze positive, diagnosi precise e
                risposte rapide ai loro dubbi. Grazie alla nostra rete di
                specialisti qualificati, offriamo un servizio affidabile che
                mette al centro il benessere del paziente. La soddisfazione di
                chi si affida a noi è la nostra migliore garanzia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

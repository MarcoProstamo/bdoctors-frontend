import React, { useState } from "react";
import { useDocContext } from "../contexts/DoctorsContext";
import { Link } from "react-router-dom";
export default function HomePage() {
  const { docs, icons } = useDocContext();
  const [hoveredCard, setHoveredCard] = useState(null);
  const mostRatedDocs = docs.filter((doc) => doc.avg_vote > 4);
  const API_IMG = import.meta.env.VITE_API_IMG;

  // Funzione per le stelline delle recensioni
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
      {/* Card Iniziale di presentazione del sito */}
      <div className="container-hp w-100">
        <div className="container-imp-hp">
          <h1 className="title-card-principale">
            <strong>BDoctors</strong>
          </h1>
          <h3 className="sottotitolo-card-principale">
            <strong> Trova il tuo medico online in pochi click!</strong>
          </h3>
          <p className="paragrafo-card-principale">
            Hai bisogno di una visita medica senza lunghe attese? Con la nostra
            piattaforma, puoi trovare i migliori dottori online, consultare le
            loro specializzazioni, leggere le recensioni dei pazienti e
            prenotare un appuntamento in pochi secondi. La salute è a portata di
            click!
          </p>
        </div>
      </div>

      {/* Card informativa, cerca un dottore */}
      <div className="container-homepage-info px-3 py-4 mt-5">
        <div className="section-homepage">
          <div className="image-container-homepage">
            <img
              style={{ width: "234px" }}
              src="https://www.idoctors.it/images/frontend/medico-vertical.svg"
              alt="Dottore online"
            />
          </div>
          <div className="content-homepage-info pt-3">
            <h2 className="title-homepage">
              Cerca un dottore online tra centinaia di specialisti
            </h2>
            <p className="paragrafo-homepage">
              Su <strong>Bdoctors.it</strong> trovi i migliori professionisti in
              ogni ambito medico. Se hai bisogno di una{" "}
              <strong>Televisita</strong> o desideri un{" "}
              <strong>secondo parere</strong>, puoi contare sui nostri medici
              per consulenze rapide e sicure.
            </p>
            <ul className="lista-homepage">
              <li className="lista-punti-homepage">
                Specialisti altamente selezionati
              </li>
              <li className="lista-punti-homepage">
                Consulenze online rapide e sicure
              </li>
              <li className="lista-punti-homepage">
                Prenotazioni semplici e veloci
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Card delle specializzazioni */}
      <h1 className="text-center pt-5 px-3">
        <b className="title-spec">
          <strong>Cerca per specializzazione</strong>
        </b>
      </h1>
      <div className="container">
        <div className="pt-5 px-3 row">
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
                fontSize: "2rem",
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

      {/* Quattro piccole card informative */}
      <section className="how-it-works px-5 py-4 mt-3">
        <h2 className="text-center ">
          <strong>Come funziona BDoctor?</strong>
        </h2>
        <div className="cards-container-homepage">
          <div className="card-homepage">
            <img
              src="https://img.freepik.com/premium-vector/circle-medical-supplies-including-medical-team-medical-equipment_1092808-9649.jpg?w=2000"
              alt="Scegli la speccializzazione"
            />
            <h3>Scegli la speccializzazione</h3>
            <p>
              Scegli la <strong>specializzazione medica</strong> più adatta ai
              tuoi sintomi: valuta il <strong>curriculum</strong>, confronta il{" "}
              <strong>prezzo</strong> e leggi le <strong>recensioni</strong> per
              trovare lo specialista giusto per te.
            </p>
          </div>
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

      {/* Card informativa, dicono di noi */}
      <div className="container-homepage-info px-3 py-4">
        <div className="section-homepage reverse-homepage">
          <div className="image-container-homepage">
            <img
              style={{ width: "300px" }}
              src="https://www.idoctors.it/images/frontend/commenti_diconodinoi.svg?v=2"
              alt="Recensioni pazienti"
            />
          </div>
          <div className="content-homepage p-3">
            <h2 className="title-homepage">Dicono di noi</h2>
            <p className="paragrafo-homepage">
              Chi sceglie <strong>Bdoctors.it</strong> apprezza la qualità e
              l’affidabilità del nostro servizio. Le testimonianze dei nostri
              utenti parlano chiaro: medici competenti, prenotazioni rapide e
              assistenza eccellente.
            </p>
            <ul className="lista-homepage">
              <li className="lista-punti-homepage">
                Più di <strong>2 milioni</strong> di utenti soddisfatti
              </li>
              <li className="lista-punti-homepage">
                Feedback positivi sulla nostra piattaforma
              </li>
              <li className="lista-punti-homepage">
                Servizio attento e professionale
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Carousel delle recensioni */}
      <div className="container-homepage my-4 py-2 px-2">
        <h1 className="text-center py-5 px-4">
          <strong> I nostri migliori dottori </strong>
        </h1>

        <div className="d-flex justify-content-center">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide w-75"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {mostRatedDocs &&
                mostRatedDocs
                  .reduce((acc, doc, index) => {
                    if (index % 2 === 0) acc.push([doc]);
                    else acc[acc.length - 1].push(doc);
                    return acc;
                  }, [])
                  .map((pair, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <div className="row">
                        {pair.map((doc) => (
                          <div key={doc.id} className="col-md-6">
                            <Link
                              to={`/doctors/${doc.id}`}
                              state={doc.specialization}
                              className="text-decoration-none card p-4 shadow-sm rounded-4 bg-light"
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
                                  <p className="fs-5 text-muted">
                                    {doc.specialization}
                                  </p>
                                </div>
                                <div className="text-warning fs-3">
                                  {voteStarsFormatter(doc.avg_vote)}
                                </div>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
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
    </>
  );
}

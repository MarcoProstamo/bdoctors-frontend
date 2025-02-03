import FormDoctor from "../components/FormDoctor";
import { useState } from "react";

export default function AddDoctorPage() {
  const [message, setMessage] = useState("");

  const handleDoctorRegistration = (data) => {
    data.cellphone_number = "+39" + data.cellphone_number;
    // console.log("Nuovo dottore registrato:", data);

    const newDoctorData = {
      name: data.name,
      surname: data.surname,
      email: data.email,
      cellphone_number: data.cellphone_number,
      address: data.address,
      specialization_id: data.specialization_id,
    };

    fetch("http://localhost:3000/doctors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDoctorData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Errore nella fetch`, error);
        }
        return res.json();
      })
      .then((data) => {
        setMessage("Registrazione avvenuta con successo!");
      })
      .catch((error) => {
        console.error("Si è verificato un errore durante la fetch:", error);
        setMessage("Si è verificato un errore durante la registrazione.");
      });
  };

  return (
    <>
      <div className="container-fluid py-4 bar-numbers ">
        <h1 className="text-center mt-4 mb-3 fw-bold ">
          <strong>Sei un medico? </strong>
        </h1>
        <div className="container">
          <hr />
        </div>
        <h4 className=" fw-semibold text-center my-4">
          Registrati gratuitamente e raggiungi nuovi pazienti!
        </h4>
        <div className="text-center">
          <a className="btn btn-primary my-3 fw-medium" href="#targetSection">
            Voglio registrarmi
          </a>
        </div>
      </div>

      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 text-center">
          <div className="col">
            <div className=" p-4 border bg-white rounded h-100 shadow-sm">
              {/* <p>
              <i className="fa-solid fa-globe fa-2x"></i>
            </p> */}
              <img
                src="https://www.idoctors.it/images/frontend/consultazione-sito.svg?v=2"
                alt=""
                width={150}
                className="mb-4"
              />
              <h6 className="fw-bolder">Aumenta la tua visibilità online</h6>
              <p className="fw-normal">
                Fatti trovare facilmente dai pazienti nella tua area grazie a un
                profilo professionale completo e ottimizzato. Connettiti con chi
                ha bisogno delle tue competenze, ovunque tu sia.
              </p>
            </div>
          </div>

          <div className="col ">
            <div className="p-4 border  bg-white rounded h-100 shadow-sm">
              {/* <p>
              <i className="fa-solid fa-calendar-check fa-2x"></i>
            </p> */}
              <img
                src="https://www.idoctors.it/images/frontend/prenotazione-online.svg?v=2"
                alt=""
                width={150}
                className="mb-4"
              />
              <h6 className="fw-bolder">Agenda sempre piena e organizzata</h6>
              <p className="fw-normal">
                Ricevi nuove richieste di appuntamento direttamente online e
                gestisci la tua agenda con facilità, risparmiando tempo e
                aumentando la tua efficienza.
              </p>
            </div>
          </div>

          <div className="col ">
            <div className="p-4 border  bg-white rounded h-100 shadow-sm">
              {/* <p>
              <i className=" fa-solid fa-star fa-2x"></i>
            </p> */}
              <img
                src="https://www.idoctors.it/images/frontend/medico-e-paziente.svg?v=2"
                alt=""
                width={150}
                className="mb-4"
              />
              <h6 className="fw-bolder">Costruisci fiducia e credibilità</h6>
              <p className="fw-normal">
                Mostra le tue qualifiche, recensioni dei pazienti e i tuoi
                servizi per consolidare la tua reputazione e attrarre più
                pazienti in cerca di esperti affidabili.
              </p>
            </div>
          </div>

          <div className="col ">
            <div className="p-4 border  bg-white rounded h-100 shadow-sm">
              {/* <p>
              <i className=" fa-solid fa-star fa-2x"></i>
            </p> */}
              <img
                src="https://www.idoctors.it/images/illu_slide_home.svg?v=2"
                alt=""
                width={150}
                className="mb-4"
              />
              <h6 className="fw-bolder">Comunicazione facile e immediata</h6>
              <p className="fw-normal">
                Interagisci con i tuoi pazienti tramite chat o videochiamate,
                offrendo consulenze rapide e sicure direttamente online.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-4 bg-light">
        <div className="container">
          <div className="row text-center my-3">
            <div className="col-md-4 col-sm-6">
              <div className="my-1">
                <p>
                  <i className="fa-solid fa-calendar-check fa-2x  filter-icons-tag"></i>{" "}
                </p>
              </div>
              <span className="fw-medium fs-2 text-secondary">
                oltre
                <span className="fs-1 fw-bold text-secondary">
                  <strong> 20 mila</strong>
                </span>
              </span>
              <p>Prenotazioni ogni mese</p>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="my-1">
                <p>
                  <i className="fa-solid fa-globe fa-2x filter-icons-tag"></i>
                </p>
              </div>
              <span className="fw-medium fs-2 text-secondary">
                più
                <span className="fs-1 fw-bold text-secondary">
                  <strong> 2 milioni </strong>
                </span>
              </span>
              <p>Visitatori unici mensili</p>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="my-1">
                <p>
                  <i class="fa-solid fa-users fa-2x filter-icons-tag"></i>
                </p>
              </div>
              <span className="fw-bold fs-1 text-secondary">
                <strong> 1.306.204</strong>
              </span>
              <p>Utenti soddisfatti iscritti</p>
            </div>
          </div>
        </div>
      </div>

      <section id="targetSection"></section>

      <div className="container my-5">
        <h2 className="text-center my-4 fw-semibold">
          Unisciti alla community di <strong> BDoctors!</strong>
        </h2>
        <h4 className="text-center">Compila il form per registrarti:</h4>

        <section className=" mt-5 p-5 border shadow bg-white">
          <div>
            <FormDoctor onSubmit={handleDoctorRegistration} />
            {message && (
              <div
                className={`mt-4 p-3 rounded ${
                  message.includes("successo")
                    ? "text-center fw-bolder text-success-emphasis bg-success-subtle border border-success-subtle"
                    : "text-center fw-bolder text-danger-emphasis bg-danger-subtle border border-danger-subtle"
                }`}
              >
                {message}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

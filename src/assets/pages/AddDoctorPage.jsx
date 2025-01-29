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
      <div className="container my-5">
        <h1 className="text-center my-5">Sei un medico?</h1>
        <h4 className="text-center my-5">
          Registrati gratuitamente e raggiungi nuovi pazienti:
        </h4>
        <div className="text-center ">
          <div className="row row-cols-3 p-2 ">
            <div className="col border p-4 ">
              <p>
                <i className="fa-solid fa-globe fa-2x"></i>
              </p>
              <p className="fw-bolder">Aumenta la tua visibilità online</p>
              <p className="fw-light">
                Fatti trovare facilmente dai pazienti nella tua area grazie a un
                profilo professionale completo e ottimizzato. Connettiti con chi
                ha bisogno delle tue competenze, ovunque tu sia.
              </p>
            </div>
            <div className="col border p-4 ">
              <p>
                <i className="fa-solid fa-calendar-check fa-2x"></i>
              </p>
              <p className="fw-bolder">Agenda sempre piena e organizzata</p>
              <p className="fw-light">
                Ricevi nuove richieste di appuntamento direttamente online e
                gestisci la tua agenda con facilità, risparmiando tempo e
                aumentando la tua efficienza.
              </p>
            </div>
            <div className="col border p-4 ">
              <p>
                <i className=" fa-solid fa-star fa-2x"></i>
              </p>
              <p className="fw-bolder">Costruisci fiducia e credibilità</p>
              <p className="fw-light">
                Mostra le tue qualifiche, recensioni dei pazienti e i tuoi
                servizi per consolidare la tua reputazione e attrarre più
                pazienti in cerca di esperti affidabili.
              </p>
            </div>
          </div>
        </div>
        <h4 className="text-center my-5">Compila il form qui sotto:</h4>
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

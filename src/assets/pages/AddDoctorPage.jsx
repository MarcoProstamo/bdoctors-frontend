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
      <div className="container">
        <section className="mt-5">
          <h1>Crea un nuovo profilo come Dottore: </h1>
          <div className="my-5"></div>
          <FormDoctor onSubmit={handleDoctorRegistration} />
          {message && (
            <div
              className={`mt-4 p-3 rounded ${
                message.includes("successo")
                  ? "text-success-emphasis bg-success-subtle border border-success-subtle"
                  : "text-danger-emphasis bg-danger-subtle border border-danger-subtle"
              }`}
            >
              {message}
            </div>
          )}
        </section>
      </div>
    </>
  );
}

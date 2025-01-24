import FormDoctor from "../components/FormDoctor";

export default function AddDoctorPage() {
  const handleDoctorRegistration = (data) => {
    data.cellphone_number = "+39" + data.cellphone_number;

    const newDoctorData = {
      name: data.name,
      surname: data.surname,
      email: data.email,
      cellphone_number: data.cellphone_number,
      address: data.address,
      medical_specialization: data.medical_specialization,
      image: data.image ? data.image : "",
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
        return res
          .status(200)
          .json({ message: "Registrazione avvenuta con successo!" });
      })
      .catch((error) => {
        console.error("Si è verificato un errore durante la fetch:", error);
      });
  };

  return (
    <>
      <div className="container">
        <h1>Crea nuovo profilo come Dottore: </h1>
        <div className="my-5"></div>
        <FormDoctor onSubmit={handleDoctorRegistration} />
      </div>
    </>
  );
}

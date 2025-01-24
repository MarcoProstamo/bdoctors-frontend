import FormDoctor from "../components/FormDoctor";

export default function AddDoctorPage() {
  const handleDoctorRegistration = (data) => {
    data.cellphone_number = "+39" + data.cellphone_number;
    console.log("Nuovo dottore registrato:", data);
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

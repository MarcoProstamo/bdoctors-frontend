import FormDoctor from "../components/FormDoctor";

export default function AddDoctorPage() {
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

import { useState } from "react";

export default function FormDoctor({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    telephone: "",
    address: "",
    specialization: "",
  });

  const handleFormData = (event) => {
    const newformData = {
      ...formData,
      [event.target.name]: value,
    };

    setFormData(newformData);
    console.log(newformData);
  };

  const handleFormSubmit = (event) => {
    const form = event.target;
    if (!form.checkValidity()) {
      event.preventDefault();
    }
    form.classList.add("was-validated");
  };

  return (
    <form
      className="row g-3 needs-validation"
      noValidate
      onSubmit={handleFormSubmit}
    >
      <div className="col-md-6">
        <label htmlFor="inputName" className="form-label">
          Nome
        </label>
        <input
          type="text"
          className="form-control"
          id="inputName"
          minLength={3}
          required
          value={formData.name}
          onChange={handleFormData}
        />
        <div className="valid-feedback"></div>
        <div className="invalid-feedback">Campo obbligatorio</div>
      </div>

      <div className="col-md-6">
        <label htmlFor="inputSurname" className="form-label">
          Cognome
        </label>
        <input
          type="text"
          className="form-control"
          id="inputSurname"
          minLength={3}
          required
          value={formData.surname}
          onChange={handleFormData}
        />
        <div className="valid-feedback"></div>
        <div className="invalid-feedback">Campo obbligatorio</div>
      </div>

      <div className="col-md-6">
        <label htmlFor="inputEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          minLength={5}
          required
          value={formData.email}
          onChange={handleFormData}
        />
        <div className="valid-feedback"></div>
        <div className="invalid-feedback">Campo obbligatorio</div>
      </div>

      <div className="col-md-6">
        <label htmlFor="inputTelephone" className="form-label">
          Telefono
        </label>
        <div className="input-group">
          <span className="input-group-text">+39</span>
          <input
            type="telephone"
            className="form-control"
            id="inputTelephone"
            maxLength={10}
            required
            value={formData.telephone}
            onChange={handleFormData}
          />
          <div className="valid-feedback"></div>
          <div className="invalid-feedback">Campo obbligatorio</div>
        </div>
      </div>

      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">
          Indirizzo
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="Indirizzo, Città, Stato"
          required
          value={formData.address}
          onChange={handleFormData}
        />
        <div className="valid-feedback"></div>
        <div className="invalid-feedback">Campo obbligatorio</div>
      </div>

      <div className="col-md-6">
        <label htmlFor="inputSpecialization" className="form-label">
          Specializzazione
        </label>
        <select
          id="inputSpecialization"
          className="form-select "
          required
          value={formData.specialization}
          onChange={handleFormData}
        >
          <option selected disabled value="">
            Scegli...
          </option>
          <option value="1">Cardiologia</option>
          <option value="2">Dermatologia</option>
          <option value="3">Pediatria</option>
          <option value="4">Neurologia</option>
          <option value="5">Psichiatria</option>
          <option value="6">Ortopedia</option>
          <option value="7">Oncologia</option>
          <option value="8">Chirurgia Generale</option>
          <option value="9">Ginecologia</option>
          <option value="10">Oftalmologia</option>
        </select>
        <div className="valid-feedback"></div>
        <div className="invalid-feedback">Campo obbligatorio</div>
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary mt-3">
          Registrati
        </button>
      </div>
    </form>
  );
}

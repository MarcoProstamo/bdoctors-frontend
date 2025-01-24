import { useState } from "react";

export default function FormDoctor({ onSubmit }) {
  const formInitialData = {
    name: "",
    surname: "",
    email: "",
    cellphone_number: "",
    address: "",
    medical_specialization: "",
  };

  const [formData, setFormData] = useState(formInitialData);

  const handleFormData = (event) => {
    const { name, value } = event.target;

    const newformData = {
      ...formData,
      [name]: value,
    };

    setFormData(newformData);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    if (onSubmit) {
      onSubmit(formData);
    }

    setFormData(formInitialData);
    form.classList.remove("was-validated");
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
          type="password"
          className="form-control"
          id="inputName"
          minLength={3}
          required
          name="name"
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
          name="surname"
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
          name="email"
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
            type="tel"
            className="form-control"
            id="inputTelephone"
            maxLength={10}
            required
            name="cellphone_number"
            value={formData.cellphone_number}
            onChange={handleFormData}
          />
          <div className="valid-feedback"></div>
          <div className="invalid-feedback">Campo obbligatorio</div>
        </div>
      </div>

      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">
          Indirizzo / Città / Stato
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="Esempio: Via Manzoni 23, Firenze, Italia"
          required
          minLength={5}
          name="address"
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
          name="medical_specialization"
          value={formData.medical_specialization}
          onChange={handleFormData}
        >
          <option defaultValue disabled value="">
            Scegli...
          </option>
          <option value="Cardiologia">Cardiologia</option>
          <option value="Dermatologia">Dermatologia</option>
          <option value="Pediatria">Pediatria</option>
          <option value="Neurologia">Neurologia</option>
          <option value="Psichiatria">Psichiatria</option>
          <option value="Ortopedia">Ortopedia</option>
          <option value="Oncologia">Oncologia</option>
          <option value="Chirurgia Generale">Chirurgia Generale</option>
          <option value="Ginecologia">Ginecologia</option>
          <option value="Oftalmologia">Oftalmologia</option>
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

import { useState } from "react";
import { useDocContext } from "../contexts/DoctorsContext";

export default function FormDoctor({ onSubmit }) {
  const formInitialData = {
    name: "",
    surname: "",
    email: "",
    cellphone_number: "",
    address: "",
    specialization_id: "",
  };

  const [formData, setFormData] = useState(formInitialData);
  const { icons } = useDocContext();

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
      className="row g-4 needs-validation"
      noValidate
      onSubmit={handleFormSubmit}
    >
      <div className="col-md-6">
        <label htmlFor="inputName" className="form-label fw-semibold">
          Nome
        </label>
        <input
          type="text"
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
        <label htmlFor="inputSurname" className="form-label fw-semibold">
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
        <label htmlFor="inputEmail" className="form-label fw-semibold">
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
          placeholder="Es. anna.rossi@gmail.com"
        />
        <div className="valid-feedback"></div>
        <div className="invalid-feedback">Campo obbligatorio</div>
      </div>

      <div className="col-md-6">
        <label htmlFor="inputTelephone" className="form-label fw-semibold">
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
        <label htmlFor="inputAddress" className="form-label fw-semibold">
          Indirizzo / Città / Stato
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="Es. Via Manzoni 23, Firenze, Italia"
          required
          minLength={5}
          name="address"
          value={formData.address}
          onChange={handleFormData}
        />
        <div className="valid-feedback"></div>
        <div className="invalid-feedback">Campo obbligatorio</div>
      </div>

      <div className="col-md-12">
        <label htmlFor="inputSpecialization" className="form-label fw-semibold">
          Specializzazione
        </label>
        <select
          id="inputSpecialization"
          className="form-select "
          required
          name="specialization_id"
          value={formData.specialization_id}
          onChange={handleFormData}
          // size="8"
        >
          <option defaultValue disabled value="">
            Seleziona...
          </option>
          {icons &&
            icons.map(({ id, specialization }) => (
              <option key={id} value={id}>
                {specialization}
              </option>
            ))}
        </select>
        <div className="valid-feedback"></div>
        <div className="invalid-feedback">Campo obbligatorio</div>
      </div>

      <div className="col-12 text-center">
        <button
          type="submit"
          className="btn btn-primary mt-3 w-50 h-100 fw-bold font-monospace"
        >
          INVIA <i class="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </form>
  );
}

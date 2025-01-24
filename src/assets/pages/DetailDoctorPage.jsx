import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DetailDoctorPage() {
  let { id: doctorId } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newText, setNewText] = useState("");
  const [newName, setNewName] = useState("");
  const [newVote, setNewVote] = useState(0);

  useEffect(() => {
    const url = import.meta.env.VITE_API_INDEX + "/" + doctorId;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setDoctor(data);
        setReviews(data.reviews || []);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [doctorId]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    if (!newName.trim()) {
      alert("Per favore, inserisci il tuo nome.");
      return;
    }
    if (!newText.trim()) {
      alert("Per favore, scrivi una recensione.");
      return;
    }
    if (newVote <= 0 || newVote > 5) {
      alert("Per favore, inserisci un voto tra 1 e 5.");
      return;
    }

    const reviewData = {
      name: newName.trim(),
      text: newText.trim(),
      vote: newVote,
      doctor_id: doctorId,
    };

    fetch(import.meta.env.VITE_API_INDEX + "/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Errore nell'invio della recensione.");
        }
        return res.json();
      })
      .then(() => {
        fetch(import.meta.env.VITE_API_INDEX + "/" + doctorId)
          .then((res) => res.json())
          .then((data) => {
            setReviews(data.reviews || []);
            setNewText("");
            setNewName("");
            setNewVote(0);
          })
          .catch((error) => {
            setError(error);
          });
      })
      .catch((error) => {
        setError(error);
      });
  };

  // ! Render stars function

  function renderStars(vote) {
    const maxStars = 5;
    const fullStar = "★";
    const emptyStar = "☆";

    return (
      <span className="star-rating">
        {Array.from({ length: maxStars }, (_, i) =>
          i < vote ? fullStar : emptyStar
        ).join(" ")}
      </span>
    );
  }

  if (loading) {
    return <div className="text-center">Caricamento...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-danger">Error: {error.message}</div>
    );
  }

  if (!doctor) {
    return <div className="text-center">No doctor data available</div>;
  }

  const doctorImagePath =
    "http://localhost:3000" + "/doctor_images/imageDoc_" + doctorId + ".png";

  return (
    <div className="container pt-5">
      <h1 className="text-center mb-4 fs-1">Dettaglio dottore</h1>
      <div className="row mb-4">
        <div className="col-md-6 offset-md-3">
          <div className="card p-4">
            <div className="d-flex align-items-center">
              <img
                src={doctorImagePath}
                className="img-thumbnail me-3"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <h3 className="card-title mb-0">
                {doctor.name} {doctor.surname}
              </h3>
            </div>
            <p className="mt-3">
              <strong>Email:</strong> {doctor.email}
            </p>
            <p>
              <strong>Numero di telefono:</strong> {doctor.cellphone_number}
            </p>
            <p>
              <strong>Specializzazione medica:</strong>{" "}
              {doctor.medical_specialization}
            </p>
            <p>
              <strong>Indirizzo:</strong> {doctor.address}
            </p>
            <p>
              <strong>Media voti:</strong> {doctor.avg_vote}
            </p>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-8 offset-md-2">
          <h2 className="text-center mb-4 fs-1">Recensioni</h2>
          <div className="list-group">
            {reviews &&
              reviews.map((review, index) => (
                <div key={index} className="list-group-item">
                  <p>
                    <strong>{review.name}</strong>
                  </p>
                  <p>{review.text}</p>
                  <p>
                    <strong>Voto:</strong> {renderStars(review.vote)}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-8 offset-md-2">
          <h2 className="text-center mb-3">Scrivi una recensione</h2>
          <form onSubmit={handleReviewSubmit}>
            <div className="mb-3">
              <textarea
                className="form-control"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                placeholder="Scrivi la tua recensione"
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                value={newVote}
                onChange={(e) => setNewVote(Number(e.target.value))}
                min="0"
                max="5"
              />
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary me-2" type="submit">
                Invia
              </button>
              <input
                type="text"
                className="form-control"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Il tuo nome"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

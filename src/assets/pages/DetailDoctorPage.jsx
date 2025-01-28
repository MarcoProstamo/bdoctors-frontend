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

    fetch("http://localhost:3000/reviews", {
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

  const resetForm = (e) => {
    setNewText("");
    setNewName("");
    setNewVote(0);
  };

  const handleStarClick = (vote) => {
    setNewVote(vote);
  };

  const renderStars = (vote) => {
    const maxStars = 5;
    const fullStar = "★";
    const emptyStar = "☆";

    return (
      <span className="star-rating">
        {Array.from({ length: maxStars }, (_, i) => (
          <span
            key={i}
            className={i < vote ? "filled" : "empty"}
            onClick={() => handleStarClick(i + 1)}
            style={{
              fontSize: "2rem",
              cursor: "pointer",
              color: i < vote ? "#FFD700" : "#D3D3D3",
            }}
          >
            {fullStar}
          </span>
        ))}
      </span>
    );
  };

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
    <div>
      <div className="page-wrapper" style={{ backgroundColor: "#CFFFF6" }}>
        <div className="container py-5">
          <div className="row mb-4 d-flex align-items-stretch">
            <div className="col-md-6">
              <h1 className="mb-4 fs-1 text-dark-emphasis ">
                Dettaglio Dottore
                <i className="fa-solid fa-circle-info mx-3"></i>
              </h1>
              <div className="card p-4 shadow-sm rounded-4 bg-light">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={doctorImagePath}
                    className="img-thumbnail me-3 rounded-circle shadow-lg"
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                    }}
                    alt={`Foto di ${doctor.name} ${doctor.surname}`}
                  />
                  <div>
                    <h3 className="card-title mb-0 fs-3 text-dark">
                      {doctor.name} {doctor.surname}
                    </h3>
                    <p className="fs-5 text-muted">{doctor.specialization}</p>
                  </div>
                </div>
                <div className="text-dark">
                  <p>
                    <strong>Email:</strong> {doctor.email}
                  </p>
                  <p>
                    <strong>Telefono:</strong> {doctor.cellphone_number}
                  </p>
                  <p>
                    <strong>Indirizzo:</strong> {doctor.address}
                  </p>
                  <p>
                    <strong>Media Voti:</strong> {doctor.avg_vote}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 ">
              <h2 className="text-center mb-4 fs-1 text-dark-emphasis">
                Recensioni
                <i className="fa-solid fa-ranking-star mx-3"></i>
              </h2>
              <div
                className="list-group overflow-y-auto"
                style={{ maxHeight: "400px" }}
              >
                {reviews &&
                  reviews.map((review, index) => (
                    <div
                      key={index}
                      className="list-group-item shadow-sm mb-3 rounded-3 "
                    >
                      <p>
                        <strong>{review.name}</strong>
                      </p>
                      <p>{review.text}</p>
                      <p>{renderStars(review.vote)}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-wrapper" style={{ backgroundColor: "#FFFFF7" }}>
        <div className="container">
          <div className="row ">
            <h2
              className="text-center mb-5 fs-1 text-dark-emphasis"
              style={{ marginTop: "150px" }}
            >
              Scrivi una recensione
              <i className="fa-solid fa-comment-dots mx-3"></i>
            </h2>

            <div className="col-md-8 offset-md-2 mb-5">
              <form
                onSubmit={handleReviewSubmit}
                className="border p-4 rounded-3 shadow-sm bg-light"
              >
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Il tuo nome"
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    placeholder="Scrivi la tua recensione"
                    rows="4"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label"></label>
                  <div className="d-flex justify-content-center">
                    {renderStars(newVote)}
                  </div>
                </div>

                <div className="d-flex justify-content-evenly">
                  <button className="btn btn-primary" type="submit">
                    Invia
                  </button>
                  <button
                    onClick={resetForm}
                    className="btn btn-danger"
                    type="reset"
                  >
                    Cancella
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

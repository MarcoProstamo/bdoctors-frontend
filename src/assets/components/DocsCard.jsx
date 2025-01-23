import { Link } from "react-router-dom";

export default function DocsCard({ data }) {
  function voteStarsFormatter(vote) {
    if (vote <= 1.5) {
      return (
        <>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </>
      );
    }

    if (vote <= 2.5) {
      return (
        <>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </>
      );
    }

    if (vote <= 3.5) {
      return (
        <>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </>
      );
    }

    if (vote <= 4.5) {
      return (
        <>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </>
      );
    }

    if (vote <= 5) {
      return (
        <>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </>
      );
    }
  }

  return (
    <div className="col">
      <Link className="text-decoration-none" to={`/doctors/${data.id}`}>
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {data.name} {data.surname}
            </h5>

            <div className="d-flex justify-content-between mt-4">
              <span className="badge bg-primary">
                {data.medical_specialization}
              </span>
              <span className="text-warning">
                {voteStarsFormatter(data.avg_vote)}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

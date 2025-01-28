import { Link } from "react-router-dom";

export default function DocsCard({ data }) {
  function voteStarsFormatter(vote) {
    if (!vote || vote < 0) vote = 0;

    const stars = 5;
    const starsNumber = Math.round(vote);
    const starsArray = [];

    for (let i = 0; i < stars; i++)
      i < starsNumber
        ? starsArray.push(<i key={i} className="fa-solid fa-star"></i>)
        : starsArray.push(<i key={i} className="fa-regular fa-star"></i>);

    return starsArray;
  }

  return (
    <div className="col">
      <Link className="text-decoration-none" to={`/doctors/${data.id}`}>
        <div className="card shadow">
          <img
            src={import.meta.env.VITE_API_IMG + data.image + ".png"}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title fw-bold text-center">
              {data.name} {data.surname}
            </h5>

            <div className="d-flex justify-content-between mt-4">
              <span className="badge text-bg-success">
                {data.specialization}
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

import { Link } from "react-router-dom";
import { useDocContext } from "../contexts/DoctorsContext";

export default function DocsCard({ data }) {
  const { icons } = useDocContext();

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

  const icon = icons.find((el) => el.specialization === data.specialization);

  return (
    <div className="col">
      <Link className="text-decoration-none" to={`/doctors/${data.id}`}>
        <div className="card docs-card">
          <img
            src={import.meta.env.VITE_API_IMG + data.image + ".png"}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title fw-bold text-center text-color">
              {data.name} {data.surname}
            </h5>

            <div className="d-flex justify-content-between mt-4">
              <span className="badge filter-icons-tag">
                <i className={`fas ${icon && icon.icon_tag} me-1`}></i>
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

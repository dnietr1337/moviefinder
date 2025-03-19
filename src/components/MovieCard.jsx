import { useState } from 'react';
const MovieCard = ({
  movie: {
    title,
    vote_average,
    poster_path,
    release_date,
    original_language,
    overview,
  },
}) => {
  const shortenOverview = (overview) => {
    if (overview.length > 200) {
      return overview.substring(0, 200) + '...';
    }
    return overview;
  };
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="movie-card relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : '/no-movie.png'
        }
        alt={title}
      />
      <div
        className={`overview ${
          hovered ? 'opacity-100' : 'opacity-0'
        } transition-all duration-450`}
      >
        <span>
          {overview.length > 1
            ? shortenOverview(overview)
            : 'No overview found!'}
        </span>
      </div>
      <div className="mt-4">
        <h3 className="text-white">{title}</h3>
        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="Star Icon" />
            <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
          </div>
          <span>•</span>
          <p className="lang">{original_language}</p>
          <span>•</span>
          <p className="year">
            {release_date ? release_date.split('-')[0] : 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

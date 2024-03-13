import './FilmCard.styles.css';

function FilmCard({ Poster, Title }: { Poster: string, Title: string }) {
  return (
    <div className="film-card">
      <img className="film-poster" src={Poster} alt="Film poster" />
      <p className="title">{Title}</p>
      <p className="genre">2</p>
    </div>
  );
}

export default FilmCard;

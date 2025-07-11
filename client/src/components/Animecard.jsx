const AnimeCard = ({ image, title }) => {
  return (
    <div className="Animecard">
      <img src={image} alt={title} />
      <h4>{title}</h4>
    </div>
  );
};

export default AnimeCard;

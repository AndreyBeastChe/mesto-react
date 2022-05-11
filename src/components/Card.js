function Card({ key, card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="place" key={key}>
      <img
        className="place__foto"
        style={{ backgroundImage: `url(${card.link})` }}
        onClick={handleClick}
      />
      <button type="button" className="place__delete" />
      <div className="place__rectangle">
        <h2 className="place__title">{card.name}</h2>
        <div className="place__like-place">
          <button type="button" className="place__like" />
          <span className="place__like-count">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;

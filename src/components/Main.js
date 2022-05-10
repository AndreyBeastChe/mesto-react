import api from "../utils/api";
import React, { useState } from "react";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  let [userName, setUserName] = useState();
  let [userDescription, setUserDescription] = useState();
  let [userAvatar, setUserAvatar] = useState();
  let [cards, setCards] = React.useState([]);

  api.getUser().then((res) => {
    setUserName(res.name);
    setUserDescription(res.about);
    setUserAvatar(res.avatar);
  });

  api.gerCards().then((cards) => {
    setCards(cards);
  });

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            className="profile__avatar"
            onClick={onEditAvatar}
            src={userAvatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__description">{userDescription}</p>
          <button
            type="button"
            className="profile__edit-button"
            onClick={onEditProfile}
          />
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        />
      </section>
      <section className="places">
        <ul className="places__grid">
          {cards.map((card) => (
            <Card card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;

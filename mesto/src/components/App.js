import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        title="Редактировать профиль"
        name="edit"
        onClose={closeAllPopups}
      >
        <div>
          <div className="popup__field">
            <input
              required
              minLength={2}
              maxLength={40}
              type="text"
              className="popup__input popup__input_type_name"
              name="nameInput"
              id="name"
            />
            <span id="name-error" className="popup__error" />
          </div>
          <div className="popup__field">
            <input
              required
              minLength={2}
              maxLength={200}
              type="text"
              className="popup__input popup__input_type_profession"
              name="jobInput"
              id="job"
            />
            <span id="job-error" className="popup__error" />
          </div>
        </div>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        title="Новое место"
        name="new-card"
        onClose={closeAllPopups}
      >
        <div>
          <div className="popup__field">
            <input
              required
              minLength={2}
              maxLength={30}
              type="text"
              className="popup__input popup__input_type_place"
              name="placeInput"
              placeholder="Название"
              id="new-place"
            />
            <span id="new-place-error" className="popup__error" />
          </div>
          <div className="popup__field">
            <input
              required
              type="url"
              className="popup__input popup__input_type_link"
              name="linkInput"
              placeholder="Ссылка на картинку"
              id="link"
            />
            <span id="link-error" className="popup__error" />
          </div>
        </div>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        title="Обновить аватар"
        name="user"
        onClose={closeAllPopups}
      >
        <div>
          div class="popup__field"&gt;
          <input
            required
            type="url"
            className="popup__input popup__input_type_link"
            name="avatarInput"
            placeholder="Ссылка на аватар"
            id="avatar"
          />
          <span id="avatar-error" className="popup__error" />
        </div>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <Footer />
    </div>
  );
}

export default App;

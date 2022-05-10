import React from "react";

function ImagePopup({ card, onClose }) {
  const isOpen = true;
  React.useEffect(() => {
    if (!isOpen) return;
  }, [isOpen, onClose]);

  return (
    <div className={`popup popup_type_photo ${card && "popup_opened"}`}>
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={onClose} />
        <img
          className="popup__fullscreen"
          alt="фото"
          src={card ? card.link : ""}
        />
        <h2 className="popup__name">{card ? card.name : ""}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;

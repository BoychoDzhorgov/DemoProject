import "./checkout-form .scss";
import { useState } from "react";

export default function CheckoutForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function onSubmit(event) {
    alert(`${name} | ${email} | ${phone}`);
    event.preventDefault();
  }

  return (
    <div className="contact-information-section">
      <form onSubmit={onSubmit}>
        <div className="contact-information-section__form__name">
          <input
            id="contact-form-name"
            className="contact-information-section__form__name__input"
            placeholder="Име"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="contact-information-section__form__email">
          
          <input
            className="contact-information-section__form__email__input"
            id="contact-form-email"
            placeholder="Имейл"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="contact-information-section__form__phone">
          <input
            id="contact-form-phone"
            className="contact-information-section__form__phone__input"
            placeholder="Телефон:"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div >
          <button className="contact-information-section__form__submit-btn" type="submit">Поръчай</button>
        </div>
      </form>
    </div>
  );
}

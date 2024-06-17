import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { sendFormTelegram } from "/src/api/telegram"; // adjust the path as necessary

const Footer = () => {
  const initialFormData = {
    name: "",
    phone: "",
    budget: "",
    email: "",
    message: ""
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `
      Имя: ${formData.name}\n
      Телефон: ${formData.phone}\n
      Бюджет: ${formData.budget}\n
      Почта: ${formData.email}\n
      Сообщение: ${formData.message}
    `;

    try {
      await sendFormTelegram(message);
      setFormData(initialFormData); // Reset the form fields

      Swal.fire({
        title: 'Успех!',
        text: 'Сообщение успешно отправлено! Мы скоро с вами свяжемся =)',
        icon: 'success',
        confirmButtonText: 'Жду!'
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: 'Ошибка!',
        text: 'Произошла ошибка при отправке сообщения. Попробуйте еще раз.',
        icon: 'error',
        confirmButtonText: 'Попробовать ещё раз'
      });
    }
  };

  return (
    <footer className="footer">
      <h2>Начнем работу с <span>WebAura!</span></h2>
      <form className="footer__form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ваше имя *"
          className="footer__form-field"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Телефон *"
          className="footer__form-field"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="budget"
          placeholder="Бюджет (тенге)"
          className="footer__form-field"
          value={formData.budget}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Почта *"
          className="footer__form-field"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          placeholder="Сообщение *"
          type="text"
          name="message"
          className="footer__form-field footer__form-field-full"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="footer__form-btn footer__form-field-full">
          Начать работу
        </button>
        <p className="footer__form-field-full">
          Нажимая кнопку "Отправить" я даю разрешение на обработку моих персональных данных и подтверждаю ознакомление с <Link to=""><span>Политикой конфиденциальности</span></Link>.
        </p>
      </form>
      <div className="footer__info">
        <Link target="_blank" className="footer__info-link" to='https://yandex.kz/maps/10298/petropavlovsk/house/YkAYdwNmS0wFQFtufXR4c3xhZg==/?ll=69.146292%2C54.892022&z=17.19'>150000, Петропавловск, <br /> Назарбаева 203</Link>
        <div>
          <Link target="_blank" className="footer__info-link" to='https://api.whatsapp.com/send/?phone=77009807823&text&type=phone_number&app_absent=0'>+7(700) 950-87-69</Link>
          <Link target="_blank" className="footer__info-link" to='mailto:info@webaura.kz'>info@webaura.kz</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

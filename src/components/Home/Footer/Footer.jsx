import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Начнем работу с <span>WebAura!</span></h2>
      <form className="footer__form">
        <input type="text" placeholder="Ваше имя *" className="footer__form-field" />
        <input type="text" placeholder="Телефон *" className="footer__form-field" />
        <input type="text" placeholder="Бюджет *" className="footer__form-field" />
        <input type="text" placeholder="Почта *" className="footer__form-field" />

        <input placeholder="Сообщение *" type="text" className="footer__form-field footer__form-field-full" />
        <button className="footer__form-btn footer__form-field-full">Начать работу</button>
        <p className="footer__form-field-full">Нажимая кнопку "Отправить" я даю разрешение на обработку моих персональных данных и подтверждаю ознакомление с <Link to=""><span>Политикой конфиденциальности</span></Link>.</p>
      </form>
      <div className="footer__info">
        <Link className="footer__info-link" to=''>150000, Петропавловск, <br /> Назарбаева 203</Link>
        <div>
          <Link className="footer__info-link" to=''>+7(700) 950-87-69</Link>
          <Link className="footer__info-link" to=''>info@webaura.kz</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
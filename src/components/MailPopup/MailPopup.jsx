import { useState } from "react";
import { Link } from "react-router-dom";

const MailPopup = ({ isOpen, onClose }) => {

  const [checkedLabels, setCheckedLabels] = useState([]);

  const handleCheckboxChange = (e) => {
    const { id } = e.target;
    if (e.target.checked) {
      setCheckedLabels((prevLabels) => [...prevLabels, id]);
    } else {
      setCheckedLabels((prevLabels) => prevLabels.filter((label) => label !== id));
    }
  };

  return (
    <div className={`mail-popup ${isOpen ? 'open' : ''}`}>

      <div className="mail-popup-header">

        <Link to='/' className="logo">
          <svg width="223" height="23" viewBox="0 0 223 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.7656 23L18.5156 7.54688L13.25 23H8.07812L0.453125 0.59375H5.34375L10.6562 16.0781L15.9844 0.59375H21.0312L26.3438 16.0781L31.6719 0.59375H36.5625L28.9375 23H23.7656ZM43.8438 9.64062H60.6562L63.4531 11.6875L60.6562 13.7344H43.8438V18.9062H64.0938V23H38.6875V13.4219L36.3125 11.6875L38.6875 9.95312V0.59375H64.0938V4.6875H43.8438V9.64062ZM85.2969 23H66.8125V0.59375H85.2969C90.9219 0.59375 93.6979 2.74479 93.625 7.04688C93.5938 9.05729 92.7292 10.6146 91.0312 11.7188C92.7917 12.7812 93.6562 14.3125 93.625 16.3125C93.5521 20.7708 90.776 23 85.2969 23ZM84.7969 4.6875H71.9688V9.75H84.7969C87.2344 9.75 88.4531 8.84896 88.4531 7.04688C88.4531 5.47396 87.2344 4.6875 84.7969 4.6875ZM84.7969 13.8438H71.9688V18.9062H84.7969C87.2344 18.9062 88.4531 18.0052 88.4531 16.2031C88.4531 14.6302 87.2344 13.8438 84.7969 13.8438ZM116.609 0.59375H122.422L134.484 23H129.141L127.5 19.9844H111.531L109.891 23H104.547L116.609 0.59375ZM113.641 16.1094H125.391L119.516 5.3125L113.641 16.1094ZM145.734 18.9062H148.922C153.401 18.9062 155.641 16.9896 155.641 13.1562V0.59375H160.812V13.1562C160.74 19.7188 157.005 23 149.609 23H145.047C137.651 23 133.917 19.7188 133.844 13.1562V0.59375H139.016V13.1562C139.016 16.9896 141.255 18.9062 145.734 18.9062ZM185.516 23L180.703 15.0312H169.562V23H164.375V0.59375H182.859C188.484 0.59375 191.26 2.95833 191.188 7.6875C191.135 11.4479 189.484 13.7656 186.234 14.6406L191.297 23H185.516ZM169.562 10.9375H182.359C184.797 10.9375 186.016 9.85417 186.016 7.6875C186.016 5.6875 184.797 4.6875 182.359 4.6875H169.562V10.9375ZM204.859 0.59375H210.672L222.734 23H217.391L215.75 19.9844H199.781L198.141 23H192.797L204.859 0.59375ZM201.891 16.1094H213.641L207.766 5.3125L201.891 16.1094Z" fill="#0149F2" />
          </svg>
        </Link>

        <button className="mail-popup-close" onClick={onClose}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="black" />
            <path d="M30 10L10 30M10 10L30 30" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <form>

        <div className="text">
          <h2>Расскажите <br /> о вашем проекте</h2>
          <p>Кратко опишите свою задачу, а мы свяжемся с вами в ближайшее время.</p>
        </div>

        <div className="grid">
          <div className="form-inputs">
            <input placeholder="Ваше имя *" type="text" />
            <input placeholder="Телефон *" type="text" />
            <input placeholder="Бюджет *" type="text" />
            <input placeholder="Почта *" type="text" />
            <input placeholder="Сообщение *" type="text" className="full" />
          </div>
          <p className="spec">Опишите вашу задачу. В чём она заключается? Сроки?</p>


          <div className="chips">
            <label htmlFor="landing" className={checkedLabels.includes('landing') ? 'checked' : ''}>
              <input type="checkbox" name="landing" id="landing" onChange={handleCheckboxChange} />
              лэндинг
            </label>
            <label htmlFor="mobile" className={checkedLabels.includes('mobile') ? 'checked' : ''}>
              <input type="checkbox" name="mobile" id="mobile" onChange={handleCheckboxChange} />
              мобильное приложение
            </label>
          </div>

          <button>Начать работу</button>
        </div>

      </form>

    </div>
  );
}

export default MailPopup;
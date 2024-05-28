import React, { useState } from 'react';
import { sendFormTelegram } from '/src/api/telegram';
import Swal from 'sweetalert2';

const Mailing = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const message = `Подписка на новости: ${email}`;
      await sendFormTelegram(message);
      Swal.fire({
        title: 'Успех!',
        text: 'Вы подписались на рассылку!',
        icon: 'success',
        confirmButtonText: 'Закрыть'
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: 'Ошибка!',
        text: 'Не удалось подписаться на рассылку.',
        icon: 'error',
        confirmButtonText: 'Закрыть'
      });
    }
  }

  return (
    <div className="mailing">
      <form className='mailing__form' onSubmit={handleSubmit}>
        <div className='mailing__form-wrapper'>
          <h3>Узнавайте новое с рассылкой!</h3>
          <p>Получайте полезные материалы в нашей рассылке</p>
          <input
            type="email"
            placeholder="Введите вашу почту"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">ОК</button>
      </form>
    </div>
  );
}

export default Mailing;

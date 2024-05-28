const baseURL = 'https://api.telegram.org/bot7347970589:AAEEsaCHuChay2cI2ppjmtP9rayamgbat24/';

export const sendFormTelegram = async (message) => {
  const url = `${baseURL}sendMessage?chat_id=-1002239230875&text=${message}`

  const response = await fetch(url);

  if (!response.ok) {
    await Promise.reject('Что-то пошло не так')
    const errorPromise = await Promise.reject('Что-то пошло не так');
  }
}
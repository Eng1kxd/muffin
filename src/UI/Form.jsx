import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import ButtonOrder from './ButtonOrder'

const Form = () => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleNameChange = (e) => {
    const value = e.target.value;
    const regex = /^[А-Яа-яЁёs]+$/;
    if (value === '' || regex.test(value)) {
      setName(value);
      setError('');
    } else {
      setError('Имя может содержать только кириллические буквы.');
    }
  };


   const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const allowedExtensions = /(.jpg|.jpeg|.png|.bmp)$/i;
      if (!allowedExtensions.exec(selectedFile.name)) {
        setError('Допустимые форматы: jpg, jpeg, png, bmp.');
        setFile(null);
      } else {
        setError('');
        setFile(selectedFile);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !file) {
      setError('Пожалуйста, заполните все поля корректно.');
      return;
    }
    console.log('Форма отправлена:', { name, phone, file });
  };

  return (
    <form onSubmit={handleSubmit}>
        <p className='fnsz32 accentColor extraBold form__title'>
            Закажи маффин по фото
        </p>
        <div className="inputs">
            <input type="text" placeholder='Имя' value={name} onChange={handleNameChange} className='input mt26'/>

            <label htmlFor="phone" className='input mt26'>
              
              <InputMask
                mask="+7(999)999-99-99"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="+7(___)___-__-__"
                className='inputMask'
              />
            </label>
            
            
            <label className="custom-button input mt26" htmlFor="file-upload" style={{opacity: 0.7}}>Загрузить фото</label>
            <input type="file" id="file-upload" className="file-input" onChange={handleFileChange} />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <div className="mt26 ButtonOrder__form">
            <ButtonOrder/>
        </div>
    </form>
  )
}
export default Form
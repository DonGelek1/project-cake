import React, { useEffect, useState } from 'react';
import './Modal.scss';

const Modal = ({ active, setActive }) => {

   const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: '',
      time: ''
   });

   useEffect(() => {
      if (active) {
         document.body.classList.add('no-scroll');
      } else {
         document.body.classList.remove('no-scroll');
      }
      return () => {
         document.body.classList.remove('no-scroll');
      };
   }, [active]);

   const handleSubmit = (e) => {
      e.preventDefault();

      // логика отправки данных

      setFormData({ name: '', phone: '', email: '', time: '' });
      setActive(false);
      alert("Заказ принят в обработку!")
   };


   return (
      <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
         <div className="modal__content" onClick={e => e.stopPropagation()}>
            <span className="modal__close" onClick={() => setActive(false)}>&#x2715;</span>
            <h2 className="modal__title">Чтобы сделать заказ, расскажите нам о себе</h2>
            <form className="form" onSubmit={handleSubmit}>
               <div className="form__inputs">
                  <input
                     type="text"
                     placeholder="Имя"
                     required
                     value={formData.name}
                     onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />

                  <input
                     type="tel"
                     placeholder="Телефон"
                     required
                     value={formData.phone}
                     onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  />

                  <input
                     type="email"
                     placeholder="Электронная почта"
                     required
                     value={formData.email}
                     onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />

                  <input
                     type="text"
                     placeholder="Удобное для звонка время"
                     required
                     value={formData.time}
                     onChange={e => setFormData({ ...formData, time: e.target.value })}
                  />
               </div>
               <div className="form__info">
                  Мы перезвоним Вам в удобное время,<br />чтобы уточнить ваши пожелания
               </div>
               <div className="form__checkbox">
                  <input type="checkbox" defaultChecked required />
                  <p>Нажимая на кнопку, вы соглашаетесь с&nbsp;<a href="#">условиями обработки персональных данных</a></p>
               </div>
               <button type="submit" className="form__submit">Сделать заказ</button>
            </form>
         </div>
      </div>
   );
};

export default Modal;

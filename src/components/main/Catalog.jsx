import React from 'react'

const Catalog = ({ cupcakes }) => {
   return (
      <section className="catalog">
         <h2 className="catalog__title">Для любых событий и дорогих вам людей </h2>
         <div className="catalog__content">
            {cupcakes.map((item, index) => (
               <div className="cart" key={index}>
                  <img className="cart__img" src={item.img} alt={item.title} />
                  <div>
                     <h3 className="cart__title">{item.title}</h3>
                     <p className="cart__subtitle">{item.subtitle}</p>
                  </div>
                  <div>
                     <p className="cart__price">{item.price}</p>
                     <button className="cart__button">Заказать</button>
                  </div>
               </div>
            ))}
         </div>
      </section>
   )
}

export default Catalog

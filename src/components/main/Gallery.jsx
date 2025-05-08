import React from 'react'

const Gallery = ({ photos }) => {
   return (
      <section className="gallery">
         <h2 className="gallery__title">Сделали более 3.000 заказов за 2 года</h2>
         <p className="gallery__subtitle">Посмотрите фото реальных заказов из нашего instagram</p>
         <div className="gallery__content">
            {photos.map((src, index) => (
               <img
                  key={index}
                  src={src}
                  alt={`cake ${index + 1}`}
                  className="gallery__img"
               />
            ))}
         </div>
      </section>
   )
}

export default Gallery

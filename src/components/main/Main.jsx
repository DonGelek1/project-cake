import React from 'react';
import './Main.scss';
import Catalog from './Catalog';
import Gallery from './Gallery';

import cake1 from '../../assets/gallery/img1.png';
import cake2 from '../../assets/gallery/img2.png';
import cake3 from '../../assets/gallery/img3.png';
import cake4 from '../../assets/gallery/img4.png';
import cake5 from '../../assets/gallery/img5.png';
import cake6 from '../../assets/gallery/img6.png';
import cake7 from '../../assets/gallery/img7.png';
import cake8 from '../../assets/gallery/img8.png';
import cake9 from '../../assets/gallery/img.png';

import photo from '../../assets/gallery/photo.png';
import photo1 from '../../assets/gallery/photo1.png';
import photo2 from '../../assets/gallery/photo2.png';
import photo3 from '../../assets/gallery/photo3.png';
import photo4 from '../../assets/gallery/photo4.png';
import photo5 from '../../assets/gallery/photo5.png';
import photo6 from '../../assets/gallery/photo6.png';
import photo7 from '../../assets/gallery/photo7.png';
import photo8 from '../../assets/gallery/photo8.png';


const Main = () => {
   const cupcakes = [
      {
         img: cake9,
         title: 'Кремовый замок',
         subtitle: 'Нежный крем любого цвета на выбор, ванильная основа',
         price: '150 ₽/шт',
      },
      {
         img: cake1,
         title: 'Малиновый рай',
         subtitle: 'Воздушный крем, тёплый оттенок и вкус малины',
         price: '150 ₽/шт',
      },
      {
         img: cake2,
         title: 'Фейерверк',
         subtitle: 'Разноцветные кремы, с бисквитной основой',
         price: '150 ₽/шт',
      },
      {
         img: cake3,
         title: 'Шоколадный мир',
         subtitle: 'Ореховая стружка, нежный крем и шоколадная основа',
         price: '150 ₽/шт',
      },
      {
         img: cake4,
         title: 'Слёзы дракона',
         subtitle: 'Нежный крем любого цвета на выбор, ванильная основа',
         price: '150 ₽/шт',
      },
      {
         img: cake5,
         title: 'Летняя фантазия',
         subtitle: 'Украшены в форме сердец, для любимого человека',
         price: '150 ₽/шт',
      },
      {
         img: cake6,
         title: 'Мыс безумия',
         subtitle: 'Разноцветная основа, стружка и нежный крем',
         price: '150 ₽/шт',
      },
      {
         img: cake7,
         title: 'Облачная сказка',
         subtitle: 'Светлая основа, нежный крем со стружкой сверху',
         price: '150 ₽/шт',
      },
      {
         img: cake8,
         title: 'Тёмный рыцарь',
         subtitle: 'Тёмная основа, нежный крем и ручные шоколадки',
         price: '150 ₽/шт',
      },
   ];

   const photos = [
      photo,
      photo1,
      photo2,
      photo3,
      photo4,
      photo5,
      photo6,
      photo7,
      photo8,
   ];

   return (
      <main className="main">
         <Catalog cupcakes={cupcakes} />
         <Gallery photos={photos} />
      </main>

   )
}

export default Main

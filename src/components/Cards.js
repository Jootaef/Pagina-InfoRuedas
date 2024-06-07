import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explora nuestra selección de vehículos mas comunes en el país</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images-autos/auto-1.jpg'
              text='Chevrolet Aveo Family - 2012'
              label='Chevrolet'
              path='/services'
            />
            <CardItem
              src='images-autos/auto-2.jpg'
              text='Suzuki Grand Vitara - 2013'
              label='Suzuki'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images-autos/auto-3.jpg'
              text='Chevrolet D-Max High Power - 2024'
              label='Chevrolet'
              path='/services'
            />
            <CardItem
              src='images-autos/auto-4.jpg'
              text='Chevrolet Colorado - 2023'
              label='Chevrolet'
              path='/products'
            />
            <CardItem
              src='images-autos/auto-5.jpg'
              text='Renault Duster - 2013'
              label='Renault'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images-autos/auto-6.jpg'
              text='Great Wall Haval M4 2019'
              label='Great Wall'
              path='/sign-up'
            />
            <CardItem
              src='images-autos/auto-7.jpg'
              text='Great Wall Haval H6 - 2021'
              label='Great Wall'
              path='/products'
            />
            <CardItem
              src='images-autos/auto-8.jpg'
              text='Great Wall Hover H3 - 2017'
              label='Great Wall'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images-autos/auto-9.jpg'
              text='Great Wall Wingle - 2014'
              label='Great Wall'
              path='/sign-up'
            />
            <CardItem
              src='images-autos/auto-10.jpg'
              text='Kia Rio Sedán - 2015'
              label='KIA'
              path='/products'
            />
            <CardItem
              src='images-autos/auto-11.jpg'
              text='Kia Picanto (Morning) - 2020 '
              label='KIA'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images-autos/auto-12.jpg'
              text='Hyundai Tucson - 2017'
              label='Hyundai'
              path='/sign-up'
            />
            <CardItem
              src='images-autos/auto-13.jpg'
              text='Kia Sportage - 2013'
              label='KIA'
              path='/products'
            />
            <CardItem
              src='images-autos/auto-14.jpg'
              text='Ford Ecosport Titanium - 2016'
              label='Ford'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

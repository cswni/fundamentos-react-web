import React, { FC } from 'react'

// Definir las propiedades de la tarjeta
interface CardProps {
  title: string
  body: string | JSX.Element
}

const Card : FC<CardProps> = ( { title, body} ) => {
  return (
    <div className='card'>
        <div className='card-title'>{title}</div>
        <div className='card-body'>{body}</div>
    </div>
  )
}

export default Card

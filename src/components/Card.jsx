import React from 'react'

export const Card = ( {img, name} ) => {
    return (
        <div className='element'>
            <img src={img} alt={name} />
            <h2>Name: {name}</h2>
        </div>
    )
}

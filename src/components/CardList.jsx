import React from 'react'
import {Card} from './Card'

export const CardList = ( {data} ) => {
    return (
        <div className='container'>
            {data.map(i => (
                <Card key={i.id} img={i.image} name={i.name}/>
            ))}
        </div>
    )
}

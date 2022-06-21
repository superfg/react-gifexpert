import React from 'react'
import { GifItem } from './GifItem';


export const GifGriditem = ({ id, title, url }) => {
    //  console.log(id, title, url);
    return (
        <div className='card'>
            <img src={url} alt={title} />
            <p>{title}</p>
            {/* {img.title} */}
        </div>
    )
}
